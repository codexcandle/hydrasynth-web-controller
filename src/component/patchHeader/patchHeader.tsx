import './patchHeader.sass';

import Box from '@mui/material/Box';
import React, { FC, useEffect, useState } from 'react';

interface Props {
  bankName?: string;
  programName?: string;
}

const PatchHeader: FC<{
  bankName: string;
  programName: string;
}> = ({ bankName, programName }: Props) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 40,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <div>{`BANK: ${bankName} PROGRAM: ${programName}`}</div>
    </Box>
  );
};

export default PatchHeader;
