import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArgonTypography from 'components/ArgonTypography';
import HoverCard from 'components/HoverCard';
import { CardContent } from '@mui/material';
import axios from 'axios';

const baseURL = 'https://dolphin-app-qq7rr.ondigitalocean.app/advertisement/?format=json';
 
const useStyles = makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: 275,
    height: 154,
    objectFit: 'cover', // Change this to 'contain' if you want to see the whole image
  },
  textContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
  },
  metadata: {
    marginBottom: theme.spacing(2),
  },
}));


export default function Slider() {
  const classes = useStyles();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <HoverCard>
      <Carousel autoPlay infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
        {post.map((advertisement) => (
          <div key={advertisement.id} className={classes.imageContainer}>
            <img src={advertisement.image_url} alt={advertisement.add_name} className={classes.image} />
            <div className={classes.textContainer}>
              <ArgonTypography variant="h4">{advertisement.add_name}</ArgonTypography>
              <CardContent className={classes.metadata}>
                <ArgonTypography variant="subtitle1">{advertisement.desc}</ArgonTypography>
              </CardContent>
            </div>
          </div>
        ))}
      </Carousel>
    </HoverCard>
  );
}
