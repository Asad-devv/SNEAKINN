




import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import {
    Typography,
    Box,
    CardContent,
    CardMedia,
    CardActions,
    Container,
    Grid,
    Card,
    CardActionArea,
    Pagination,
    Avatar,
    AppBar,
    Toolbar,
  } from "@mui/material";
// import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: "#fff",
    },
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
        height: 300,
        fontSize: "3em",
      },
    },
    blogsContainer: {
      paddingTop: theme.spacing(3),
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3),
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 240,
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between",
    },
    author: {
      display: "flex",
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center",
    },
  }));


  export default function BlogCardSkeleton() {
    const classes = useStyles();
  
    return (
      <Card >
        <CardActionArea>
          <CardMedia className={classes.media} >
            <Skeleton variant="rounded" width={350}  height={250} />
          </CardMedia>
          <CardContent>
            <Stack  spacing={1} textAlign="center" width="30vh"  mb={5}>
              <Skeleton variant="text" width={300} sx={{ fontSize: "1.2rem" }} pl={5} />
              <Skeleton variant="text" width={300} sx={{ fontSize: "1.2rem" }}  />
              <Skeleton variant="text" width={300} sx={{ fontSize: "1.2rem" }}  />
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box top={4} className={classes.author}>
            <Avatar >
              <Skeleton variant="circular" width={40} height={40} />
            </Avatar>
            <Box ml={2} >
              <Skeleton variant="text" width={250} height={40} sx={{ fontSize: "1rem" }} />
              <Skeleton width={140} height={40} variant="text" />
            </Box>
          </Box>
        </CardActions>
      </Card>
    );
  }