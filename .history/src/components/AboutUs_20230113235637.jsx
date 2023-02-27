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
                  Lorem ipsum dolor sit amet, con  <Typography variant="body1" className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
                magna vel efficitur dictum, augue augue tincidunt nibh, eget
                gravida ipsum nulla et ligula. Praesent bibendum, velit id
                malesuada faucibus, velit velit congue velit, vel tincidunt velit
                velit id augue.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="https://via.placeholder.com/345x200"
                title="About Us"
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5">Our Team</Typography>
                <List>
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>JH</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="John Doe"
                      secondary="Founder and CEO"
                      className={classes.listItemText}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>AM</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Alice Miller"
                      secondary="Chief Operations Officer"
                      className={classes.listItemText}
                    />
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar}>RB</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Robert Brown"
                      secondary="Chief Marketing Officer"
                      className={classes.listItemText}
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}