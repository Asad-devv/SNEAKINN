import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {Grid}from '@mui/material';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(3),
  },
}));

export default function SocialMedia() {
  const classes = useStyles();

  return (
    <Grid container className={classes.row}>
      <FacebookIcon className={classes.icon} />
      <TwitterIcon className={classes.icon} />
      <InstagramIcon className={classes.icon} />
      <LinkedInIcon className={classes.icon} />
    </Grid>
  );
}
