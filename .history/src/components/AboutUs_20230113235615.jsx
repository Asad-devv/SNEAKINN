import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Container, Divider, Paper, Card, CardMedia, CardContent, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: theme.spacing(3),
    },
    subtitle: {
      textAlign: 'center',
      color: theme.palette.grey[500],
      marginBottom: theme.spacing(3),
    },
    text: {
      marginTop: theme.spacing(2),
    },
    divider: {
      margin: `${theme.spacing(3)}px 0`,
    },
    paper: {
      padding: theme.spacing(3),
    },
    card: {
      maxWidth: 345,
      margin: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    media: {
      height: 200,
    },
    cardContent: {
      textAlign: 'center',
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    listItem: {
      padding: 0,
    },
    listItemText: {
      margin: 0,
    },
  }));
  
  export default function AboutUs() {
    const classes = useStyles();
  
    return (
      <Container maxWidth="md">
        <div className={classes.root}>
          <Typography variant="h3" className={classes.title}>
            About Us
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Learn more about our company and our mission.
          </Typography>
          <Divider className={classes.divider} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Typography variant="body1" className={classes.text}>
                  Lorem ipsum dolor sit amet, con