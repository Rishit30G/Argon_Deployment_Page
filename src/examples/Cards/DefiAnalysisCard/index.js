import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Grid,
  Stack,
  IconButton,
} from "@mui/material";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArgonBox from "components/ArgonBox";
import HoverCard from "components/HoverCard";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Happy Customer",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/420/260",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Satisfied Customer",
    quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..",
    image: "https://picsum.photos/420/260",
  },
  {
    id: 3,
    name: "Bob Johnson",
    title: "Loyal Customer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/420/260",
  },
  {
    id: 4,
    name: "Bob Johnson",
    title: "Loyal Customer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/420/260",
  },
  {
    id: 5,
    name: "Bob Johnson",
    title: "Loyal Customer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consedljd.",
    image: "https://picsum.photos/420/260",
  },
  {
    id: 6,
    name: "Bob Johnson",
    title: "Loyal Customer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo csequat.",
    image: "https://picsum.photos/420/260",
  },
  {
    id: 7,
    name: "Bob Johnson",
    title: "Loyal Customer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/420/260",
  },
];

const DefiAnalysisCard = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 4);

  const handleNext = () => {
    const nextIndex = startIndex + 1;
    if (nextIndex <= testimonials.length - 4) {
      setStartIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = startIndex - 1;
    if (prevIndex >= 0) {
      setStartIndex(prevIndex);
    }
  };

  return (
    <Card style={{ border: "1px solid grey",  backgroundColor: '#282D31' }}>
      <CardContent> 
        <ArgonBox px={3} py={3}>
          <Grid container spacing={3} >
      {visibleTestimonials.map((testimonial) => (
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={testimonial.id}>
          <HoverCard>
          <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <CardMedia component="img" image={testimonial.image} 
                  style={{
                    objectFit: 'cover', 
                    maxHeight: '100%', 
                    maxWidth: '100%',
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto' 
                  }}
                  />
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body2">{testimonial.quote}</ArgonTypography>
               </Grid> 
            </Grid>
            </CardContent>
          </HoverCard>
        </Grid>
      ))}
      <Grid container justifyContent="center" style={{marginTop: '20px'}}>
        <IconButton onClick={handlePrev} disabled={startIndex === 0} style={{ color: "white" }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton
          onClick={handleNext}
          disabled={startIndex >= testimonials.length - 4}
          style={{ color: "white" }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
    </ArgonBox>
      </CardContent>
    </Card>
   
  );
};

export default DefiAnalysisCard;
