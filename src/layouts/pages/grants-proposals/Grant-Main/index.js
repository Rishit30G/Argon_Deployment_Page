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
import 'aos/dist/aos.css';
import AOS from 'aos';

const GrantMainPage = () => {
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

      <ArgonBox mb={3} px={3} py={3}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <ArgonTypography variant="h1">Refi Spring 2023</ArgonTypography>
            <div
              style={{
                borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                margin: "10px 0",
                padding: "5px 0",
                width: "80%",
              }}
            ></div>
          </Grid>

          <Grid item>
          <div data-aos="fade-up" data-aos-duration="5000">
            <ArgonBox mr={12}>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography variant="h4">
                    {" "}
                    <Link /> Website
                  </ArgonTypography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography variant="h4">
                    {" "}
                    <Language /> Country
                  </ArgonTypography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography variant="h4">
                    {" "}
                    <AccessTime /> Updated 3 months{" "}
                  </ArgonTypography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography variant="h4">
                    {" "}
                    <LocalAtm /> Raised External Funding
                  </ArgonTypography>
                </Grid>
              </Grid>
            </ArgonBox>

            <div
              style={{
                borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                margin: "10px 0",
                padding: "5px 0",
                width: "80%",
                borderWidth: "50%",
              }}
            ></div>
            </div>
          </Grid>

          <Grid item>
              <div data-aos="fade-up" data-aos-duration="5000">
            <ArgonBox my={1}>
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

                <Grid item style={{ marginRight: "110px" }}>
                  <ArgonButton variant="text">
                    {/* https://mui.com/material-ui/react-select/ */}
                    <ArgonTypography variant="h3">Flag</ArgonTypography>
                  </ArgonButton>
                </Grid>
              </Grid>
            </ArgonBox>
                </div>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox mb={3} mx={3} my={3}>
      <div data-aos="fade-up" data-aos-duration="5000">
        <Card style={{ border: "1px solid grey", boxShadow: "0px 0px 50px #B721BE" }}>
          <ArgonBox px={10} py={3}>
            <CardContent>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <img src="https://picsum.photos/70/70" style={{ borderRadius: "50%" }} />
                    <ArgonTypography variant="h1">About</ArgonTypography>
                  </Stack>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body2">
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat
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
                    <img src="https://picsum.photos/1100/600" style={{ borderRadius: "20px" }}/>
                  </ArgonBox>
                  <ArgonTypography variant="body2" style={{ marginTop: "10px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud
                  </ArgonTypography>
                </Grid>

                <Grid item>
                  <ArgonTypography variant="body2">
                    At the edges of our imagination lies a regenerative economy, a financial system
                    that serves humanity and our collective home. Within web3, the ReFi movement
                    aims to cultivate this vision within a new economic system. ReFi Spring exists
                    to support its emergence across a rich diversity of global networks. At the
                    edges of our imagination lies a regenerative economy, a financial system that
                    serves humanity and our collective home. Within web3, the ReFi movement aims to
                    cultivate this vision within a new economic system. ReFi Spring exists to
                    support its emergence across a rich diversity of global networks.
                  </ArgonTypography>
                </Grid>
              </Grid>
            </CardContent>
          </ArgonBox>
        </Card>
        </div>
      </ArgonBox>

      <ArgonBox mb={3} mx={3} my={10}>
        <div data-aos="fade-up" data-aos-duration="5000">
        <Card style={{ border: "1px solid grey"}}>
          <ArgonBox px={10} py={3}>
            <CardContent>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Stack direction="row" spacing={2}>
                    <img src="https://picsum.photos/70/70" style={{ borderRadius: "50%" }} />
                    <ArgonTypography variant="h1">Team Description</ArgonTypography>
                  </Stack>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body2">
                    Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                </Grid>
                <Grid item style={{marginTop: '30px'}}>
                  <Grid container spacing={4} direction="row">
                    <Grid item>
                      <img src="https://picsum.photos/80/80" style={{ borderRadius: "50%" , boxShadow: '0px 0px 20px #D12CBD'}} />
                      <ArgonTypography variant="h4"> David </ArgonTypography>
                    </Grid>
                    <Grid item>
                      <img src="https://picsum.photos/80/80" style={{ borderRadius: "50%", boxShadow: '0px 0px 20px #D12CBD' }} />
                      <ArgonTypography variant="h4"> James </ArgonTypography>
                    </Grid>
                    <Grid item>
                      <img src="https://picsum.photos/80/80" style={{ borderRadius: "50%" , boxShadow: '0px 0px 20px #D12CBD'}} />
                      <ArgonTypography variant="h4"> Charlie </ArgonTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </ArgonBox>
        </Card>
        </div>
      </ArgonBox>
      <ArgonBox mb={3} mx={3} my={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
        <Card style={{ border: "1px solid grey" }}>
          <ArgonBox px={3} py={3}>
            <CardContent>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <ArgonTypography variant="h1">Recent Grants</ArgonTypography>
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
    </DashboardLayout>
  );
};

export default GrantMainPage;
