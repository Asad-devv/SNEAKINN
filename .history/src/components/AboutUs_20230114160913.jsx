import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Grid,
  Container,
  Divider,
  Paper,
  Card,
  CardMedia,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import Icon from "../components/utils/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:"#f5f5f5",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  subtitle: {
    textAlign: "center",
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
    height: "100%",
    backgroundColor: "#f5f5f5",
  },
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  media: {
    height: 200,
  },
  cardContent: {
    textAlign: "center",
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
    <Container maxWidth="md" backgroundColor="#f5f5f5"
    >
      <div className={classes.root} >
        <Typography variant="h3" className={classes.title}>
          About Us
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Learn more about our company and our mission.
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} pt={6}>
            <Paper
              className={classes.paper}
              pt={6}
              elevation={7}
              backgroundColor="blue"
              
            >
              <Typography variant="subtitle" className={classes.text}>
                Welcome to my sneaker website! I am <b>Asad Ullah</b>, a sneaker
                enthusiast who has created this website as a passion project. I
                understand the importance of having a place to buy sneakers,
                where you can find all the latest and greatest sneakers from top
                brands.
              </Typography>
              <div className="pt-3">
                <Typography variant="subtitle" className={classes.text}>
                  I have designed and created this website as a one-stop-shop
                  for all your sneaker needs. It's not just a place to buy
                  sneakers but also a platform for sneaker lovers to come
                  together and share their passion. I offer a wide selection of
                  the latest and greatest sneakers from top brands, as well as
                  hard-to-find gems for the true sneakerheads out there.
                </Typography>
              </div>
              <div className="pt-3">
                <Typography  variant="subtitle" className={classes.text}>
                  So, whether you're looking for the latest drop or a classic
                  pair of kicks, I've got you covered. Thanks for visiting my
                  website, and I hope you enjoy your shopping experience!"
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.cardContent}>
                Technologies Used
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="React" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Node.js" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="MongoDB" />
                </ListItem>
          </Grid>
        </Grid>
        <Icon />
      </div>
    </Container>
  );
}
