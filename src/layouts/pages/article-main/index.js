import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  CardContent,
  Stack,
  IconButton,
} from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArticleCard from "examples/Cards/ArticleCard";
import PressReleaseCard from "examples/Cards/PressReleaseCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "aos/dist/aos.css";
import AOS from "aos";
import HoverCard from "components/HoverCard";

const ArticleMain = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const items = [
    {
      image: "https://picsum.photos/350/260",
      title: "1 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksandar Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/350/260",
      title: "2 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksan Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/350/260",
      title: "3 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksandar Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/350/260",
      title: "4 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/350/260",
      title: "5 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/350/260",
      title: "6 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/350/260",
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

      <ArgonBox mb={3} mx={15} my={3}>
        <HoverCard>
          <CardContent>
            <ArgonBox px={3} py={3}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={12} md={5}>
                  <img
                    src="https://picsum.photos/600/300"
                    alt="Placeholder"
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <ArgonTypography variant="h2">
                    Stakers are Withdrawing Rewards, Not Principals
                  </ArgonTypography>
                  <ArgonTypography variant="h5" style={{marginTop: '10px'}}> 
                    Aleksandar Gilbert • 4 hrs ago
                 </ArgonTypography>
                  <ArgonTypography variant="body2" style={{marginTop: '20px',  color: "rgba(255, 255, 255, 0.7)"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
                    Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum
                    accumsan in in leo. Fusce malesuada vulputate faucibus.
                    Integer in hendrerit nisi. Praesent a hendrerit urna. In
                    non imperdiet elit, sed molestie odio. Fusce ac metus
                    finibus, facilisis arcu eu, luctus sapien. Pellentesque
                    cursus maximus felis, pharetra porta purus aliquet viverra.
                    Sed nec malesuada arcu.
                  </ArgonTypography>
                 
                </Grid>
              </Grid>
            </ArgonBox>
          </CardContent>
        </HoverCard>
      </ArgonBox>

      <ArgonBox mb={3} mx={15} my={3}>
        <ArgonTypography variant="h2" style={{ marginBottom: "10px" }}>
          Latest Releases
        </ArgonTypography>
      </ArgonBox>

      <ArgonBox mb={3} mx={15} my={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
          <Card style={{ border: "1px solid grey" }}>
            <ArgonBox px={3} py={3}>
              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Grid container spacing={4}>
                      {visibleItems.map((item, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                          <Card style={{ border: "3px solid #2b2b2b" }}>
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
                                  <ArgonTypography variant="body1">
                                    {item.timestamp}
                                  </ArgonTypography>
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
      <ArgonBox mb={3} mx={15} my={3}>
        <ArgonTypography variant="h2" style={{ marginBottom: "30px" }}>
          Press Release
        </ArgonTypography>
        <PressReleaseCard />
      </ArgonBox>

      <div
        style={{
          borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
          margin: "10px 0",
          padding: "5px 0",
          width: "100%",
        }}
      ></div>

      <ArgonBox mb={3} mx={15} my={3}>
        <ArgonTypography variant="h2" style={{ marginBottom: "10px" }}>
          Defi Analysis
        </ArgonTypography>
      </ArgonBox>

      <ArgonBox mb={3} mx={15} my={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
          <Card style={{ border: "1px solid grey" }}>
            <ArgonBox px={3} py={3}>
              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Grid container spacing={4}>
                      {visibleItems.map((item, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                          <Card style={{ border: "3px solid #2b2b2b" }}>
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
                                  <ArgonTypography variant="body1">
                                    {item.timestamp}
                                  </ArgonTypography>
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
    </DashboardLayout>
  );
};

export default ArticleMain;
