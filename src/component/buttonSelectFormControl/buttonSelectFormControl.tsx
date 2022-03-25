import './buttonSelectFormControl.sass';

import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC, MouseEvent, useState } from 'react';

interface Props {
  bankIndex: number;
  bankNames: string[];
  fileIndex: number;
  slotSelectHandler: (bankIndex: number, selectionIndex: number) => void;
  fileSelectHandler: (bankIndex: number, selectionIndex: number) => void;
  selected: boolean;
}

const ButtonSelectFormControl: FC<{
  bankIndex: number;
  bankNames: string[];
  fileIndex: number;
  slotSelectHandler: (bankIndex: number, selectionIndex: number) => void;
  fileSelectHandler: (bankIndex: number, selectionIndex: number) => void;
  selected: boolean;
}> = ({
  bankIndex,
  bankNames,
  fileIndex,
  slotSelectHandler,
  fileSelectHandler,
  selected,
}: Props) => {
  const [selectionIndex, setSelectionIndex] = useState<number>(fileIndex);

  const handleChange = (e: SelectChangeEvent) => {
    e.preventDefault();

    const index = +e.target.value;
    setSelectionIndex(index);
    fileSelectHandler(bankIndex, index);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    slotSelectHandler(bankIndex, selectionIndex);
  };

  return (
    <Box className="formControlBox">
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          color: selected ? 'white' : 'gray',
          backgroundColor: selected ? 'blue' : 'black',
          marginRight: '20px',
          fontSize: '1.25em',
        }}
      >
        Bank {bankIndex + 1}
      </Button>
      <FormControl className="formControl">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectionIndex.toString()}
          label=""
          onChange={handleChange}
          className="formControlSelect"
          sx={{
            color: 'pink',
          }}
        >
          {bankNames?.map((bankName, index) => (
            <MenuItem key={index} value={index} className="formControlSelect">
              {bankName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ButtonSelectFormControl;
