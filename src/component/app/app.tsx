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
import * as inhaltBankData from './../../model/bank/inhalt.json';
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
  const [bankData, setBankData] = useState<BankData>();
  const [activeBankName, setActiveBankName] = useState<string>('');

  useEffect(() => {
    // const dir = '../../model/bank';

    const data = JSON.parse(JSON.stringify(inhaltBankData as BankData));
    if (data) {
      setBankData(data);
      setActiveBankName(data.title);
    }
  }, []);

  return (
    <div className="app">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />

        <Container
          component="main"
          sx={{ mt: 8, mb: 2 }}
          maxWidth="lg"
          className="containerBgApp"
        >
          <Paper sx={{ backgroundColor: '#C2C057' }}>
            <img src={imgUrl} alt="" width="300px"></img>
            <Typography variant="h4" component="h3" gutterBottom>
              {APP_HEADER}
            </Typography>
            <Link href={APP_GITHUB_LINK_URL}>{APP_GITHUB_LINK_LABEL}</Link>
          </Paper>
          {bankData && (
            <PatchSelect
              bankNames={BANK_FILE_NAMES}
              activeBankName={activeBankName}
              programs={bankData.programs}
            />
          )}
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
