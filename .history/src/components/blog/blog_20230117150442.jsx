import React, { useEffect, useState } from "react";
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
import { makeStyles } from "@mui/styles";
import AdbIcon from "@mui/icons-material/Adb";
import BlogCard from "./blogCard";
import fetchArticles from "./blogNewsApi/index";
import DummySkeleton from "../utils/skeleton";
import BlogCardSkeleton from "./skeleton";
import {story} from "../../data/data.js"
import Stories from "../Stories"
// const articles = [
//   {
//     id: 1,
//     title: "Article 1",
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1672707222128-2eb88b6646c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     author: "John Smith",
//     date: "January 1, 2020",
//   },
//   {
//     id: 2,
//     title: "Article 2",
//     text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1672707222128-2eb88b6646c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     author: "Jane Doe",
//     date: "February 15, 2020",
//   },
//   {
//     id: 3,
//     title: "Article 3",
//     text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1672707222128-2eb88b6646c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//     author: "Bob Johnson",
//     date: "March 30, 2020",
//   },
// ];

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: ` url('https://sneakernews.com/wp-content/uploads/2022/12/jordan-release-dates-2023-spring.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    objectFit: "contain",
    backgroundSize: "cover",
    color: "#fff",
    fontSize: "4rem",
    fontFamily  : "Unbounded",
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

function App() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchArticles(page).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [page]);

  const handlePagination = (event, value) => {
    setPage(value);
  };
  document.title =`Sneakinn   -`
  return (
    <div className="App">
      <AppBar className={classes.appBar}  position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box></Box>
      </Box>
      <Box mt={7}>
      <Stories  story={story} />
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
     
        {loading && <Grid justifyContent="center" item xs={12} sm={6} md={4}>
              {loading && <BlogCardSkeleton />}
              {loading && <BlogCardSkeleton />}
              {loading && <BlogCardSkeleton />}
  
        </Grid>}
          {articles?.map((article, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              
              {!loading ? (
                <BlogCard
                  {...article}
                  onClick={() => handleArticleClick(article.id)}
                />
              ) : (
                <>
                  <BlogCardSkeleton />
                </>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box my={4} className={classes.paginationContainer}>
        <Pagination variant="outlined" count={10} onChange={handlePagination} />
      </Box>
    </div>
  );
}

export default App;
