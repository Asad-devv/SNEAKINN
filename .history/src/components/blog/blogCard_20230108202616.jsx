import React from 'react';
import {Typography,Box,CardContent,CardMedia,CardActions,Container,Grid,Card,CardActionArea, Pagination,Avatar,AppBar,Toolbar} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdbIcon from "@mui/icons-material/Adb";


const useStyles = makeStyles((theme) => ({
    appBar: {
      backgroundColor: "#fff"
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
        fontSize: "3em"
      }
    },
    blogsContainer: {
      paddingTop: theme.spacing(3)
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 240
    },
    cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
    },
    author: {
      display: "flex"
    },
    paginationContainer: {
      display: "flex",
      justifyContent: "center"
    }
  }));



const BlogCard = ({ title, text, imageUrl, author, date, onClick }) => {
    const classes = useStyles()
    return(
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia image={imageUrl} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box className={classes.author}>
          <Avatar src={author.avatarUrl} />
          <Box ml={2}>
            <Typography variant="subtitle2" component="p">
              {author.name}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary" component="p">
              {date}
            </Typography>
          </Box>
        </Box>
      </CardActions>
    </Card>
)};
export default BlogCard  



// import { Card, CardActionArea, CardContent, CardActions, CardMedia, Avatar, Typography, Box } from '@material-ui/core';

// const AA = ({ title, text, imageUrl, author, date, onClick }) => (
//   <Card>
//     <CardActionArea onClick={onClick}>
//       <CardMedia image={imageUrl} title={title} />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//           {text}
//         </Typography>
//       </CardContent>
//     </CardActionArea>
//     <CardActions>
//       <Box className={classes.author}>
//         <Avatar src={author.avatarUrl} />
//         <Box ml={2}>
//           <Typography variant="subtitle2" component="p">
//             {author.name}
//           </Typography>
//           <Typography variant="subtitle2" color="textSecondary" component="p">
//             {date}
//           </Typography>
//         </Box>
//       </Box>
//     </CardActions>
//   </Card>
// );

// const BlogList = ({ articles }) => (
//   <Container maxWidth="lg" className={classes.blogsContainer}>
//     <Typography variant="h4" className={classes.blogTitle}>
//       Articles
//     </Typography>
//     <Grid container spacing={3}>
//       {articles.map(article => (
//         <Grid item xs={12} sm={6} md={4}>
//           <BlogCard
//             title={article.title}
//             text={article.text}
//             imageUrl={article.imageUrl}
//             author={article.author}
//             date={article.date}
//             onClick={() => handleArticleClick(article.id)}
//           />
//         </Grid>
//       ))}
//     </Grid>
//   </Container>
// );
