import './app.styles.sass';

import { Box, Container, CssBaseline, Link, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

import { APP_CONTENT_TEXT, APP_HEADER } from '../../model/appConstants';
import PatchSelect from '../patchSelect/patchSelect';
import * as data from './../../model/bank/inhalt.json';
import BankData from './../../model/interface/bankData';
import imgUrl from './hsynth.png';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://codebycandle.com">
        Codebycandle
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const App: FC = () => {
  const bankData: BankData = JSON.parse(JSON.stringify(data as BankData));

  // console.log(json);
  // console.log(`title: ${json.title}`);
  // console.log(`program count: ${json.programs.length}`);
  console.log('title:' + bankData.title);
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

        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
          <Paper>
            <img src={imgUrl} alt="" width="300px"></img>
            <Typography variant="h4" component="h3" gutterBottom>
              {APP_HEADER}
            </Typography>
            <Typography variant="h5" component="h4" gutterBottom>
              {APP_CONTENT_TEXT}
            </Typography>
          </Paper>
          {/* <Typography variant="body1">Sticky footer placeholder.</Typography> */}
          <PatchSelect bankTitle={bankData.title} programs={bankData.programs} />
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
            {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
            <Copyright />
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default App;
