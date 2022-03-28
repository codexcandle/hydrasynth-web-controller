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
  bankNames: string[];
  slotIndex: number;
  fileIndex: number;
  slotSelectHandler: (slotIndex: number, selectionIndex: number) => void;
  fileSelectHandler: (slotIndex: number, selectionIndex: number) => void;
  selected: boolean;
}

const ButtonSelectFormControl: FC<{
  bankNames: string[];
  slotIndex: number;
  fileIndex: number;
  slotSelectHandler: (slotIndex: number, selectionIndex: number) => void;
  fileSelectHandler: (slotIndex: number, selectionIndex: number) => void;
  selected: boolean;
}> = ({
  bankNames,
  slotIndex,
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
    fileSelectHandler(slotIndex, index);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    slotSelectHandler(slotIndex, selectionIndex);
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
        Bank {slotIndex + 1}
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
