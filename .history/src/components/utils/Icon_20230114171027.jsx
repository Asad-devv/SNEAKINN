import React from 'react';
import { makeStyles } from '@mui/styles';
// import Grid from '@material-ui/core/Grid';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {Grid,} from '@mui/material';

// import { LinkedInIcon,InstagramIcon,TwitterIcon } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
    '&:hover': {

      cursor:"pointer",
      transform: 'scale(1px, -9px)',
      transition: 'transform 0.3s ease-in-out',
    }
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent : "center",
    marginTop: theme.spacing(3),
  },
}));

export default function SocialMedia() {
  const classes = useStyles();

  return (
    <Grid container md={12} gap={2} className={classes.row}>
      <FacebookIcon className={classes.icon} />
      <TwitterIcon className={classes.icon} />
      <InstagramIcon className={classes.icon} />
      <LinkedInIcon className={classes.icon} />
    </Grid>
  );
}
