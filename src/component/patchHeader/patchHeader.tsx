import './patchHeader.sass';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { FC } from 'react';

interface Props {
  bankName: string;
  programName: string;
}

const PatchHeader: FC<{
  bankName: string;
  programName: string;
}> = ({ bankName, programName }: Props) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: '#111111',
        color: '#00b8b8',
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="#a3ffff" gutterBottom>
          {bankName}
        </Typography>
        <Typography variant="h2" component="div">
          {programName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PatchHeader;
