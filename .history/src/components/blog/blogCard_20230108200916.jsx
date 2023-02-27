import React from 'react';
import {Typography,Box,CardContent,CardMedia,CardActions,Container,Grid,Card,CardActionArea, Pagination,Avatar,AppBar,Toolbar} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AdbIcon from "@mui/icons-material/Adb";





const BlogCard = ({ title, text, imageUrl, author, date, onClick }) => (
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
  );
export default BlogCard  



// import { Card, CardActionArea, CardContent, CardActions, CardMedia, Avatar, Typography, Box } from '@material-ui/core';

// const BlogCard = ({ title, text, imageUrl, author, date, onClick }) => (
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
