import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate } from "react-router-dom";


function DefiAnalysisCard() {

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/pages/article/?id=${id}`);
  };


    const [posts, setPosts] = useState([]);

    useEffect(() => {

      axios.get('https://dolphin-app-qq7rr.ondigitalocean.app/article/?format=json')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        //console.error(error);
      }) 
    });

    
      const [startIndex, setStartIndex] = useState(0);
      const visibleTestimonials = posts.slice(startIndex, startIndex + 4);

      const handleNext = () => {
        const nextIndex = startIndex + 1;
        if (nextIndex <= posts.length - 4) {
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
    <Card style={{ border: "1px solid grey",  backgroundColor: "#222122" }}>
      <CardContent> 
        <ArgonBox px={3} py={3}>
          <Grid container spacing={3} >
      {visibleTestimonials.map((post) => (
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={post.id}
        onClick = {() => handleCardClick(post.id)}
        >
        <HoverCard style={{backgroundColor: '#3E3D3E'}}> 
          <CardContent>
            <CardActionArea>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <CardMedia component="img" image={post.image_url} 
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
                  <ArgonTypography variant="body2">
                          {post.article_desc.split(" ").slice(0,12).join(" ")}
                           {post.article_desc.split(" ").length > 12 ? <span style={{color: '#B721BE'}}> ...Read More</span> : ""}
                  </ArgonTypography>
               </Grid> 
            </Grid>
            </CardActionArea>
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
          disabled={startIndex >= posts.length - 4}
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
