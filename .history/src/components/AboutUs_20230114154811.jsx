import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Container, Divider, Paper, Card, CardMedia, CardContent, Avatar, List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import Icon from "../components/utils/Icon"

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
      height: '100%',
      backgroundColor: '#f5f5f5',
      color : "blue"
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
            <Grid item xs={12} md={12} pt={6}>
              <Paper className={classes.paper} pt={6} elevation={7} backgroundColor= "blue" rounded>
                <Typography variant="subtitle" className={classes.text}>
                Welcome to my sneaker website! I am <b></b>, a sneaker enthusiast who has created this website as a passion project. I understand the importance of having a place to buy sneakers, where you can find all the latest and greatest sneakers from top brands.
                </Typography>
                <div>
                <Typography variant="subtitle" className={classes.text}>
                Our website is more than just a place to buy sneakers; it's a community for sneaker lovers to come together and share their passion. We offer a wide selection of the latest and greatest sneakers from top brands, as well as hard-to-find gems for the true sneakerheads out there.
                </Typography>
                </div>
                <div>
                <Typography variant="subtitle" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
                  magna vel efficitur dictum, augue augue tincidunt nibh, eget
                  gravida ipsum nulla et ligula. Praesent bibendum, velit id
                  malesuada faucibus, velit velit congue velit, vel tincidunt velit
                  velit id augue.
                </Typography>
                </div>
                <div>
                <Typography variant="subtitle" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor,
                  magna vel efficitur dictum, augue augue tincidunt nibh, eget
                  gravida ipsum nulla et ligula. Praesent bibendum, velit id
                  malesuada faucibus, velit velit congue velit, vel tincidunt velit
                  velit id augue.
                </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card className={classes.card}>
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
        <Icon/>
      </div>
    </Container>
  );
}