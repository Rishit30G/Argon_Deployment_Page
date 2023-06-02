import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ArgonTypography from 'components/ArgonTypography';
import HoverCard from 'components/HoverCard';
import { CardContent } from '@mui/material';

const ads = [
  { 
    title: 'Ad 1', 
    description: 'This is advertisement 1', 
    bgImage: 'https://picsum.photos/800/300'
  },
  { 
    title: 'Ad 2', 
    description: 'This is advertisement 2', 
    bgImage: 'https://picsum.photos/800/300'
  },
  { 
    title: 'Ad 3', 
    description: 'This is advertisement 3', 
    bgImage:  'https://picsum.photos/800/300'
  },
  // ... more ads
]

export default function Slider() {
  return (
    <HoverCard>
      <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
        {ads.map((ad, index) => {
          const useStyles = makeStyles({
            root: {
              minWidth: 275,
              minHeight: 140,
              backgroundImage: `url(${ad.bgImage})`,
              backgroundSize: 'cover',
              border: 0,
              borderRadius: 3,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              padding: '0 30px',
            },
            title: {
              fontSize: 14,
            },
            pos: {
              marginBottom: 12,
            },
          });

          const classes = useStyles();

          return (
            <div className={classes.root} key={index}>
              <CardContent>
                <ArgonTypography className={classes.title} color="textSecondary" gutterBottom>
                  {ad.title}
                </ArgonTypography>
                <ArgonTypography variant="body2" >
                  {ad.description}
                </ArgonTypography>
              </CardContent>
            </div>
          );
        })}
      </Carousel>  
    </HoverCard>
  );
}
