import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

import {
  APP_GITHUB_LINK_LABEL,
  APP_GITHUB_LINK_URL,
  APP_HEADER,
  BANK_FILE_NAMES,
  HOMEPAGE_URL,
} from '../../model/constant/appConstants';
import headerImage from './asset/hsynth.png';

const AppHeader = () => {
  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: 'blue',
        backgroundImage: 'linear-gradient(80deg, #000000, #222222)',
        color: 'white',
      }}
    >
      <CardActions>
        <Link
          href={APP_GITHUB_LINK_URL}
          className="headerLink"
          target="_blank"
          rel="noopener"
          sx={{
            color: '#8F8D15',
            textAlign: 'left',
            marginLeft: '0px',
          }}
        >
          {APP_GITHUB_LINK_LABEL}
        </Link>
      </CardActions>
      <CardMedia component="img" height="140" image={headerImage} alt="green iguana" />
      <CardContent sx={{ paddingTop: '0px', height: '40px' }}>
        <Typography variant="h5" component="div" color="#8F8D15">
          {APP_HEADER}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AppHeader;
