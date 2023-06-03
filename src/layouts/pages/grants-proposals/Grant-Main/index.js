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
import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";
import axios from "axios";


const markdownIt = require("markdown-it");
const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/article/?format=json";

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

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);
  if(!post) return null;

  const md = new markdownIt();
  const html = md.render(post[0].article_desc);

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
      <ArgonTypography variant="h2">Protocol Description</ArgonTypography>
    </Stack>
    <ArgonBox width="100%">
      <Card style={{ border: "1px solid grey", backgroundColor: '#212529'}}>
        <ArgonBox px={2} py={2}>
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12} lg={12} md={12} xl={12}>
                <ArgonTypography variant="body2" style={{ color: "lightgrey" }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </ArgonTypography>
              </Grid>
            </Grid>
          </CardContent>
        </ArgonBox>
      </Card>
    </ArgonBox>
  </div>
</Grid>



        </Grid>
      </ArgonBox>

      <ArgonBox mb={3} mx={20} my={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
          <Card style={{ border: "1px solid grey", boxShadow: "0px 0px 30px #B721BE", backgroundColor: '#212529' }}>
            <ArgonBox px={17} py={5}>
              <CardContent>
              <Grid container direction="column" justifyContainer="center"  alignItems="center" spacing={2} >
                          <Grid item xs={12} md={12} lg={12}>
                            <div data-aos="fade-up" data-aos-duration="5000">
                              <img src="https://picsum.photos/1300/700" 
                              alt="article"
                              style={{ width: "100%", height: "auto", borderRadius: '14px' }}/>
                            </div>
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                            <div data-aos="fade-up" data-aos-duration="5000">
                            <ArgonTypography style={{ marginBottom: "50px" }}>
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                              </ArgonTypography>
                            </div> 
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                             <div data-aos="fade-up" data-aos-duration="5000">
                              <img src="https://picsum.photos/700/400" 
                              alt="article"
                              style={{ width: "100%", height: "auto", borderRadius: '14px' }}/>
                            </div>
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                            <div data-aos="fade-up" data-aos-duration="5000">
                            <ArgonTypography style={{ marginBottom: "50px" }}>
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                              </ArgonTypography>
                            </div> 
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
                                style={{ 
                                  objectFit: 'cover', 
                                  maxHeight: '100%', 
                                  maxWidth: '100%',
                                  display: 'block',
                                  marginLeft: 'auto',
                                  marginRight: 'auto' 
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

export default GrantMainPage;
