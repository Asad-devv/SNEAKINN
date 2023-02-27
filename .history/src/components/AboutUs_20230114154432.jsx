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
                Welcome to our sneaker website! We're a team of sneaker enthusiasts who have come together to create a one-stop-shop for all your sneaker needs.

Our website is more than just a place to buy sneakers; it's a community for sneaker lovers to come together and share their passion. We offer a wide selection of the latest and greatest sneakers from top brands, as well as hard-to-find gems for the true sneakerheads out there.

We believe in providing our customers with the best possible shopping experience. That's why we offer fast and free shipping, easy returns, and top-notch customer service. We're always here to help you find the perfect pair of sneakers, whether you're a seasoned collector or just getting started.

So, whether you're looking for the latest drop or a classic pair of kicks, we've got you covered. Thanks for visiting our website, and we hope you enjoy your shopping experience!
                </Typography>
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