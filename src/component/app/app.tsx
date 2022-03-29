import './app.sass';

import { Box, Container, CssBaseline, Link, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import { BANK_FILE_NAMES, HOMEPAGE_URL } from '../../model/constant/appConstants';
import PatchSelect from '../patchSelect/patchSelect';
import * as bankData_factoryBankA from './../../model/bank/factory-bank-a.json';
import * as bankData_factoryBankB from './../../model/bank/factory-bank-b.json';
import * as bankData_factoryBankC from './../../model/bank/factory-bank-c.json';
import * as bankData_inhalt from './../../model/bank/inhalt.json';
import * as bankData_sunGodRa from './../../model/bank/sun-god-ra.json';
import BankData from './../../model/interface/bankData';
import AppHeader from './../appHeader/appHeader';
import imgUrl from './asset/hsynth.png';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href={HOMEPAGE_URL}>
        Codebycandle
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App: FC = () => {
  const [bankData, setBankData] = useState<BankData[]>();
  const [activeBankName, setActiveBankName] = useState<string>('');

  useEffect(() => {
    const bankFiles = [
      bankData_factoryBankA,
      bankData_factoryBankB,
      bankData_factoryBankC,
      bankData_inhalt,
      bankData_sunGodRa,
    ];
    let parsedData: BankData[] = [];
    for (let bankFile of bankFiles) {
      const data: BankData = JSON.parse(JSON.stringify(bankFile as BankData));
      if (data) parsedData.push(data);
    }

    if (parsedData) setBankData(parsedData);
  }, []);

  return (
    <div className="app">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          cornerRadius: '200px',
        }}
      >
        <CssBaseline />

        <Container
          component="main"
          sx={{ mt: 8, mb: 2, borderRadius: '14px' }}
          maxWidth="lg"
          className="containerBgApp"
        >
          <AppHeader />
          {bankData && <PatchSelect banks={bankData} />}
        </Container>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}
        >
          <Container maxWidth="sm">
            <Copyright />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default App;
