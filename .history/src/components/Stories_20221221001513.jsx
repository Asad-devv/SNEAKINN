import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "./utils/Title";
import { truncate } from "lodash";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Stories = ({ story: { title, news } }) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1.5},
        },
      };
  return (
    <>
      <div className="nike-container mb-11">
        <Title title={title} />
        <div className="mt-7">
          <Splide options={splideOptions}>
            {news.map((val, i) => (
              <SplideSlide key={i} className="mb-0.5">
                <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {news.text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;
