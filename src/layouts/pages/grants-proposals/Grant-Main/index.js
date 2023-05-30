import { AccessTime, Flag, Language, LocalAtm } from "@material-ui/icons";
import { People } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import { Link } from "@web3uikit/icons";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";

const GrantMainPage = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [startIndex, setStartIndex] = useState(0);
  const items = [
    {
      image: "https://picsum.photos/370/260",
      title: "1 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksandar Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/370/260",
      title: "2 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksan Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/370/260",
      title: "3 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksandar Gilbert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/370/260",
      title: "4 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/370/260",
      title: "5 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/370/260",
      title: "6 Stakers are Withdrawing Rewards, Not Principal",
      author: "Aleksanda Gilert",
      timestamp: "4 hrs ago",
    },
    {
      image: "https://picsum.photos/370/260",
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
      <ArgonBox mb={3} px={20} py={3}>
        <Grid container spacing={10}>
          <Grid item xs={12} lg={12} md={12} xl={8}>
            <Grid container>
              <Grid item xs={12} lg={12} md={12} xl={12}>
                <ArgonTypography variant="h1">Refi Spring 2023</ArgonTypography>
                <DefaultDivider />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12} lg={12} md={12} xl={12}>
                <div data-aos="fade-up" data-aos-duration="5000">
                  <ArgonBox>
                    <Grid container>
                      <Grid item xs={12} md={6} lg={5} xl={6}>
                        <ArgonTypography variant="h5">
                          {" "}
                          <Link /> Website
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={12} md={6} lg={5} xl={6}>
                        <ArgonTypography variant="h5">
                          {" "}
                          <Language /> Country
                        </ArgonTypography>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} md={6} lg={5} xl={6}>
                        <ArgonTypography variant="h5">
                          {" "}
                          <AccessTime /> Updated 3 months{" "}
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={12} md={6} lg={5} xl={6}>
                        <ArgonTypography variant="h5">
                          {" "}
                          <LocalAtm /> Raised External Funding
                        </ArgonTypography>
                      </Grid>
                    </Grid>
                  </ArgonBox>
                </div>
                <DefaultDivider />
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: "30px" }}>
              <Grid item xs={12} lg={12} md={12} xl={12}>
                <div data-aos="fade-up" data-aos-duration="5000">
                  <Grid container justifyContent="space-between">
                    <HoverCard>
                      <CardContent>
                        <Grid item>
                          <ArgonTypography varaint="h5">
                            Estimated lifetime funding received
                          </ArgonTypography>
                          <ArgonTypography variant="h1">~$41,000</ArgonTypography>
                        </Grid>
                      </CardContent>
                    </HoverCard>

                    <Grid item>
                      <ArgonButton variant="text" style={{ fontSize: "50px" }}>
                        {/* https://mui.com/material-ui/react-select/ */}
                        <img
                          src="https://i.postimg.cc/cL9dM8Km/3548753-200.png"
                          style={{
                            height: "50px",
                            width: "50px",
                            filter: "brightness(0) invert(1)",
                          }}
                        />
                      </ArgonButton>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} style={{ marginTop: "10px" }}>
                    <Grid item>
                      <ArgonButton
                        style={{
                          height: "58px",
                          width: "240px",
                          fontSize: "17px",
                          fontWeight: "400",
                          backgroundColor: "black",
                          border: "1px solid #8d8d8d",
                          color: "white",
                          boxShadow: "5px 5px 10px  #B721BE",
                          marginRight: "20px",
                        }}
                      >
                        {" "}
                        Add to Cart{" "}
                      </ArgonButton>
                    </Grid>
                    <Grid item>
                      <ArgonButton
                        style={{
                          height: "58px",
                          width: "240px",
                          fontSize: "17px",
                          fontWeight: "400",
                          backgroundColor: "black",
                          border: "1px solid #8d8d8d",
                          color: "white",
                          boxShadow: "5px 5px 10px  #B721BE",
                        }}
                      >
                        Inquire{" "}
                      </ArgonButton>
                    </Grid>
                  </Grid>
                </div>
                <DefaultDivider />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={12} md={12} xl={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
              <Stack direction="row" justifyContent="center" spacing={2} style={{ marginBottom: "20px" }}>
                <ArgonTypography variant="h2">Team Description</ArgonTypography>
              </Stack>
              <Card style={{ border: "1px solid grey" }}>
                <ArgonBox px={5} py={2}>
                  <CardContent>
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12} lg={12} md={12} xl={12}>
                        <ArgonTypography variant="body2">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                          voluptatum, quibusdam, quia, quod voluptates voluptatem quos
                          </ArgonTypography>
                      </Grid>
                      <Grid item xs={12} lg={12} md={12} xl={12} style={{marginTop: '30px'}}>
                        <Grid container spacing={2} direction="row">
                          <Grid item xl={4}>
                            <img
                              src="https://picsum.photos/80/80"
                              style={{ borderRadius: "50%", boxShadow: "0px 0px 20px #D12CBD" }}
                            />
                            <ArgonTypography variant="h4"> David </ArgonTypography>
                          </Grid>
                          <Grid item xl={4}>
                            <img
                              src="https://picsum.photos/80/80"
                              style={{ borderRadius: "50%", boxShadow: "0px 0px 20px #D12CBD" }}
                            />
                            <ArgonTypography variant="h4"> James </ArgonTypography>
                          </Grid>
                          <Grid item xl={4}>
                            <img
                              src="https://picsum.photos/80/80"
                              style={{ borderRadius: "50%", boxShadow: "0px 0px 20px #D12CBD" }}
                            />
                            <ArgonTypography variant="h4"> Charlie </ArgonTypography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </ArgonBox>
              </Card>
            </div>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox mb={3} mx={20} my={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
          <Stack direction="row" spacing={2} style={{ marginBottom: "20px" }}>
            <img src="https://picsum.photos/60/60" style={{ borderRadius: "50%" }} />
            <ArgonTypography variant="h1">About</ArgonTypography>
          </Stack>
          <Card style={{ border: "1px solid grey", boxShadow: "0px 0px 30px #B721BE" }}>
            <ArgonBox px={10} py={3}>
              <CardContent>
                <Grid container direction="column" spacing={4}>
                  <Grid item></Grid>
                  <Grid item>
                    <ArgonTypography variant="body2">
                      Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </ArgonTypography>
                    <ArgonBox
                      px={5}
                      py={5}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img src="https://picsum.photos/1100/600" style={{ borderRadius: "20px" }} />
                    </ArgonBox>
                    <ArgonTypography variant="body2" style={{ marginTop: "10px" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                    </ArgonTypography>
                  </Grid>

                  <Grid item>
                    <ArgonTypography variant="body2">
                      At the edges of our imagination lies a regenerative economy, a financial
                      system that serves humanity and our collective home. Within web3, the ReFi
                      movement aims to cultivate this vision within a new economic system. ReFi
                      Spring exists to support its emergence across a rich diversity of global
                      networks. At the edges of our imagination lies a regenerative economy, a
                      financial system that serves humanity and our collective home. Within web3,
                      the ReFi movement aims to cultivate this vision within a new economic system.
                      ReFi Spring exists to support its emergence across a rich diversity of global
                      networks.
                    </ArgonTypography>
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
          </Card>
        </div>
      </ArgonBox>

      <ArgonBox mb={3} mx={10} my={3}>
        <DefaultDivider />
        <div data-aos="fade-up" data-aos-duration="5000">
          <ArgonTypography variant="h2" style={{ marginBottom: "20px" }}>
            {" "}
            Recent Grants{" "}
          </ArgonTypography>
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
                                style={{ justifyContent: "center", alignItems: "center" }}
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

export default GrantMainPage;
