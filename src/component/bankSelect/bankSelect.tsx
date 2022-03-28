import './bankSelect.sass';

import React, { FC, useState } from 'react';

import { BANK_SLOT_COUNT } from '../../model/constant/appConstants';
import ButtonSelectFormControl from '../buttonSelectFormControl/buttonSelectFormControl';

interface Props {
  bankNames: string[];
  selectHandler: (index: number, fileIndex: number) => void;
}

type SelectHandlerMethodType = (index: number, fileIndex: number) => void;

const BankSelect: FC<{
  bankNames: string[];
  selectHandler: SelectHandlerMethodType;
}> = ({ bankNames, selectHandler }: Props) => {
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);

  const slotSelectHandler = (slotIndex: number, fileIndex: number) => {
    setSelectedSlotIndex(slotIndex);
    selectHandler(slotIndex, fileIndex);
  };

  const fileSelectHandler = (slotIndex2: number, fileIndex: number) => {
    if (slotIndex2 == selectedSlotIndex) selectHandler(slotIndex2, fileIndex);
  };

  return (
    <div>
      {[...Array(BANK_SLOT_COUNT)].map((e, i) => {
        return (
          <ButtonSelectFormControl
            key={i}
            bankNames={bankNames}
            slotIndex={i}
            fileIndex={i}
            slotSelectHandler={slotSelectHandler}
            fileSelectHandler={fileSelectHandler}
            selected={i === selectedSlotIndex}
          />
        );
      })}
    </div>
  );
};

export default BankSelect;
