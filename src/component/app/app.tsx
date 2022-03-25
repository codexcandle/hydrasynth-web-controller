import './app.sass';

import { Box, Container, CssBaseline, Link, Paper, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';

import {
  APP_GITHUB_LINK_LABEL,
  APP_GITHUB_LINK_URL,
  APP_HEADER,
  BANK_FILE_NAMES,
  HOMEPAGE_URL,
} from '../../model/constant/appConstants';
import PatchSelect from '../patchSelect/patchSelect';
import * as bankData_factoryBankA from './../../model/bank/factory-bank-a.json';
import * as bankData_factoryBankB from './../../model/bank/factory-bank-b.json';
import * as bankData_factoryBankC from './../../model/bank/factory-bank-c.json';
import * as bankData_inhalt from './../../model/bank/inhalt.json';
import * as bankData_sunGodRa from './../../model/bank/sun-god-ra.json';
import BankData from './../../model/interface/bankData';
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
    // const dir = '../../model/bank';

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

    // const data1 = JSON.parse(JSON.stringify(bankData_inhalt as BankData));
    // const data1 = JSON.parse(JSON.stringify(bankData_inhalt as BankData));
    // if (data1) {
    //   setBankData(data1);
    //   setActiveBankName(data1.title);
    // }
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
          sx={{ mt: 8, mb: 2 }}
          maxWidth="lg"
          className="containerBgApp"
        >
          <Paper
            sx={{
              backgroundImage: 'linear-gradient(0deg, #000000, #333333, #000000)',
              paddingTop: '10px',
              maxHeight: '80px',
            }}
          >
            <Typography variant="h4" component="h3" gutterBottom sx={{ color: 'white' }}>
              {APP_HEADER}
            </Typography>
            <Link href={APP_GITHUB_LINK_URL} className="headerLink">
              {APP_GITHUB_LINK_LABEL}
            </Link>
          </Paper>
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
