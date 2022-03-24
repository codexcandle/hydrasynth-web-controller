import './bankSelect.sass';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC, useState } from 'react';
interface Props {
  bankNames: string[];
}

const BankSelect: FC<{ bankNames: string[] }> = ({ bankNames }: Props) => {
  const [selectedBankIndex, setselectedBankIndex] = useState<number>(0);

  const handleChange = (e: SelectChangeEvent) => {
    e.preventDefault();

    setselectedBankIndex(+e.target.value);
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bank A</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedBankIndex.toString()}
          label="Age"
          onChange={handleChange}
        >
          {bankNames?.map((bankName, index) => (
            <MenuItem key={index} value={index}>
              {bankName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bank B</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedBankIndex.toString()}
          label="Age"
          onChange={handleChange}
        >
          {bankNames?.map((bankName, index) => (
            <MenuItem key={index} value={index}>
              {bankName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bank C</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedBankIndex.toString()}
          label="Age"
          onChange={handleChange}
        >
          {bankNames?.map((bankName, index) => (
            <MenuItem key={index} value={index}>
              {bankName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bank D</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedBankIndex.toString()}
          label="Age"
          onChange={handleChange}
        >
          {bankNames?.map((bankName, index) => (
            <MenuItem key={index} value={index}>
              {bankName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bank E</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedBankIndex.toString()}
          label="Age"
          onChange={handleChange}
        >
          {bankNames?.map((bankName, index) => (
            <MenuItem key={index} value={index}>
              {bankName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default BankSelect;
