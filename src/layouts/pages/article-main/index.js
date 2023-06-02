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
import DefaultDivider from "components/Divider";

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
      <Grid container spacing={6} direction="row">
        <Grid item xs={12} sm={12} md={5}>
          <CardMedia
            component="img"
            image = " https://picsum.photos/600/250"
            style={{
              width: "100%",
              height: "auto",
            }}
            >
          </CardMedia>
        </Grid>
        <Grid item xs={12} sm={12} md={7}>
          <ArgonTypography variant="h2">
            Stakers are Withdrawing Rewards, Not Principals
          </ArgonTypography>
          <ArgonTypography variant="h5" style={{ marginTop: "10px" }}>
            Aleksandar Gilbert • 4 hrs ago
          </ArgonTypography>
          <ArgonTypography
            variant="body2"
            style={{ marginTop: "20px", color: "rgba(255, 255, 255, 0.7)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
            feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros
            sit amet arcu vestibulum accumsan in in leo. Fusce malesuada vulputate faucibus.
            Integer in hendrerit nisi. Praesent a hendrerit urna. In non imperdiet elit, sed
            molestie odio. Fusce ac metus finibus, facilisis arcu eu, luctus sapien.
            Pellentesque cursus maximus felis, pharetra porta purus aliquet viverra. Sed nec
            malesuada arcu.
          </ArgonTypography>
        </Grid>
      </Grid>
    </ArgonBox>
  </CardContent>
</HoverCard>

      </ArgonBox>

      <ArgonBox pt={5} mx={15} my={3}>
        <ArgonTypography variant="h2" style={{ marginBottom: "10px" }}>
          Latest Releases
        </ArgonTypography>
        <DefaultDivider />
      </ArgonBox>

      <ArgonBox mx={15} my={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
          <Card style={{ border: "1px solid grey" }}>
            <ArgonBox px={3} py={3}>
              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <Grid container spacing={4}>
                      {visibleItems.map((item, index) => (
                        <Grid item xs={12} md={6} lg={3} key={index}>
                          <HoverCard>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                image={item.image}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "100%",
                                  maxWidth: "100%",
                                  display: "block",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              />
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
                          </HoverCard>
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
      <ArgonBox pt={5} mx={15} my={3}>
        <ArgonTypography variant="h2" style={{ marginBottom: "10px" }}>
          Press Release
        </ArgonTypography>
        <DefaultDivider />

        <PressReleaseCard />
      </ArgonBox>

      <ArgonBox pt={5} mx={15} my={3}>
        <ArgonTypography variant="h2" style={{ marginBottom: "10px" }}>
          Defi Analysis
        </ArgonTypography>
        <DefaultDivider />
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
                          <HoverCard>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                image={item.image}
                                style={{
                                  objectFit: "cover",
                                  maxHeight: "100%",
                                  maxWidth: "100%",
                                  display: "block",
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              />
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
                          </HoverCard>
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
    </DashboardLayout>
  );
};

export default ArticleMain;
