import React, { useEffect, useState } from "react";
import { Card, CardActionArea, CardMedia, Grid, CardContent, Stack, IconButton } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArticleCard from "examples/Cards/ArticleCard";
import PressReleaseCard from "examples/Cards/PressReleaseCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import 'aos/dist/aos.css';
import AOS from 'aos';

const ArticleMain = () => {
  React.useEffect(() => {
    AOS.init();
  },[]);

  const [startIndex, setStartIndex] = useState(0);
  const items = [
    {
      image: "https://picsum.photos/410/260",
      title: "1 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksandar Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/410/260",
      title: "2 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksan Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/410/260",
      title: "3 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksandar Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/410/260",
      title: "4 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/410/260",
      title: "5 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/410/260",
      title: "6 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/410/260",
      title: "7 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
  ];

  const handlePrev = () => {
    const newStartIndex = Math.max(startIndex - 1, 0);
    setStartIndex(newStartIndex);
  };

  const handleNext = () => {
    const newStartIndex = Math.min(startIndex + 1, items.length - 1);
    setStartIndex(newStartIndex);
  };

  const visibleItems = items.slice(startIndex, startIndex + 4);



  return (
    <DashboardLayout>
      <DashboardNavbar />

      <ArgonBox mb={3} mx={3} my={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
        <Card style={{ border: "1px solid grey" }}>
          <ArgonBox px={3} py={3}>
            <CardContent>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <ArgonTypography variant="h1">Latest Releases</ArgonTypography>
                </Grid>
                <Grid item>
                  <Grid container spacing={4}>
                    {visibleItems.map((item, index) => (
                      <Grid item xs={12} md={6} lg={3} key={index}>
                        <Card sx={{ maxWidth: 455, maxHeight: 600 }}>
                          <CardActionArea>
                            <CardMedia component="img" image={item.image} />
                            <CardContent>
                              <ArgonTypography
                                variant="h4"
                                style={{ marginTop: "30px", marginBottom: "20px" }}
                              >
                                {item.title}
                              </ArgonTypography>
                              <Stack direction="row" spacing={2}>
                                <ArgonTypography variant="body1">{item.author}</ArgonTypography>
                                <ArgonTypography variant="body1">{item.timestamp}</ArgonTypography>
                              </Stack>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item container justifyContent="center">
                  <IconButton
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    style={{ color: "white" }}
                  >
                    <KeyboardArrowLeftIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    disabled={startIndex >= items.length - 4}
                    style={{ color: "white" }}
                  >
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </ArgonBox>
        </Card>
        </div>
      </ArgonBox>
      <div
        style={{
          borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
          margin: "10px 0",
          padding: "5px 0",
          width: "100%",
        }}
      ></div>
      <ArgonBox mb={3} mx={3} my={6}>
        <ArgonTypography variant="h2" style={{ marginBottom: "30px" }}>
          Press Release
        </ArgonTypography>
        <PressReleaseCard />
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ArticleMain;
