import React from 'react';
import { makeStyles } from '@m';
import { Grid,Typography,Container } from '@mui/material';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: theme.spacing(3),
    color: theme.palette.grey[500],
  },
  text: {
    marginTop: theme.spacing(2),
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classes.title}>
              About Us
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Learn more about our company and our mission.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
              magna vel efficitur dictum, augue augue tincidunt nibh, eget
              gravida ipsum nulla et ligula. Praesent bibendum, velit id
              malesuada faucibus, velit velit congue velit, vel tincidunt velit
              velit id augue.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
