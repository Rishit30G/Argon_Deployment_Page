import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Grid from "@material-ui/core/Grid";
import { Box, Card, CardActionArea, CardContent, Divider, Tab, Tabs } from "@mui/material";
import { Stack } from "@mui/material";
import { styled } from "@mui/styles";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import "aos/dist/aos.css";
import AOS from "aos";
import HoverCard from "components/HoverCard";
import DefaultDivider from "components/Divider";
import axios from "axios";
import { Clock, Eye } from "@phosphor-icons/react";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";
import { useNavigate } from "react-router-dom";

const JobListing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  const [value, setValue] = React.useState("1");
  const[posts, setPosts] = useState([]);
  const[posts2, setPosts2] = useState([]);


  const handleCardClick = (id) => {
    // Redirect to Overview component with the ID
    navigate(`/pages/profile/profile-overview/?id=${id}`);
  };
  
  
  
  

  
  useEffect(() => {
    axios.get("https://dolphin-app-qq7rr.ondigitalocean.app/joblisting/?format=json&org=Uniswap")
    .then((response) => {
      setPosts(response.data);
    })
    .catch((error) => {
      //console.error(error);
    });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    axios.get("https://dolphin-app-qq7rr.ondigitalocean.app/joblisting/?format=json")
    .then((response) => {
      setPosts2(response.data);
    })
    .catch((error) =>{
      //console.error(error);
    });
  }, []);

  if(posts.length === 0) return null;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h3">Job Listing</ArgonTypography>
          </Grid>
        </Grid>
        <DefaultDivider/>
      </ArgonBox>


    <ArgonBox px={15} py={3}>
      {/* <Card>
        <CardContent> */}
          <ArgonBox px={1} py={1}>
            <TabContext value={value}>
              <Box sx={{ marginBottom: '40px' }}>
                 <div>
      <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: '#212529'} }}>
        <Tab label="Organization" value="1" style={{fontSize: '30px', fontStyle: 'italic'}}/>
        <Tab label="Individual" value="2" style={{fontSize: '30px', fontStyle: 'italic'}}/>
      </Tabs>
    </div>
              </Box>
              <TabPanel value="1">
                <Grid container spacing={4}>
                    {posts.map((post)=> {
                  return ( 
                    <>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                    <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                      <Grid container justifyContent="space-between" alignItems="center"> 
                            <Grid item>
                              <ArgonTypography variant="h2">{post?.organisations.name}</ArgonTypography>
                              <ArgonTypography variant="h4" style={{marginTop: '5px'}}>{post?.positions}</ArgonTypography>
                            </Grid>
                            <Grid item>
                            <ArgonTypography variant="h5"> <Clock style={{marginRight: '5px'}}/> 12 Days Left</ArgonTypography>
                              <ArgonTypography variant="h5" style={{marginTop: '5px'}}> <Eye style={{marginRight: '5px'}}/> {post?.views} {post?.views == 1 ? 'View': 'Views'}</ArgonTypography>
                            </Grid>
                      </Grid> 
                      <Grid container style={{marginTop: '40px'}}>
                      <Grid item>
                           <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                            <Grid item xs={8} lg={7} sm={9} md={9}>
                              <ArgonTypography
                                variant="body2"
                                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                              >
                                {post?.job_description}
                              </ArgonTypography>
                            </Grid>
                            <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                              <img
                                src= {post?.image}
                                style={{
                                  width: "200px",
                                  height: "200px",
                                  position: "absolute",
                                  bottom: -30,
                                  right: -20,
                                }}
                                alt="Uniswap logo"
                              />
                            </Grid>
                           </Grid>
                    </Grid>
                      </Grid>
                      <Grid container style={{marginTop: '20px'}} spacing={1}>
                            <Grid item>
                              <ArgonButton variant="outlined" size="small" style={{borderRadius: '40px', fontSize: '13px'}}>  
                                 Software Engineer
                              </ArgonButton>
                            </Grid> 
                            <Grid item>
                              <ArgonButton variant="outlined" size="small" style={{borderRadius: '40px', fontSize: '13px'}}>  
                                 DAOs
                              </ArgonButton>
                            </Grid> 
                      </Grid>

                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                    <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                      <Grid container justifyContent="space-between" alignItems="center"> 
                            <Grid item>
                              <ArgonTypography variant="h2">{post?.organisations.name}</ArgonTypography>
                              <ArgonTypography variant="h4" style={{marginTop: '5px'}}>{post?.positions}</ArgonTypography>
                            </Grid>
                            <Grid item>
                            <ArgonTypography variant="h5"> <Clock style={{marginRight: '5px'}}/> 12 Days Left</ArgonTypography>
                              <ArgonTypography variant="h5" style={{marginTop: '5px'}}> <Eye style={{marginRight: '5px'}}/> {post?.views} {post?.views == 1 ? 'View': 'Views'}</ArgonTypography>
                            </Grid>
                      </Grid> 
                      <Grid container style={{marginTop: '40px'}}>
                      <Grid item>
                           <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                            <Grid item xs={8} lg={7} sm={9} md={9}>
                              <ArgonTypography
                                variant="body2"
                                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                              >
                                {post?.job_description}
                              </ArgonTypography>
                            </Grid>
                            <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                              <img
                                src= {post?.image}
                                style={{
                                  width: "200px",
                                  height: "200px",
                                  position: "absolute",
                                  bottom: -30,
                                  right: -20,
                                }}
                                alt="Uniswap logo"
                              />
                            </Grid>
                           </Grid>
                    </Grid>
                      </Grid>
                      <Grid container style={{marginTop: '20px'}} spacing={1}>
                            <Grid item>
                              <ArgonButton variant="outlined" size="small" style={{borderRadius: '40px', fontSize: '13px'}}>  
                                 Software Engineer
                              </ArgonButton>
                            </Grid> 
                            <Grid item>
                              <ArgonButton variant="outlined" size="small" style={{borderRadius: '40px', fontSize: '13px'}}>  
                                 DAOs
                              </ArgonButton>
                            </Grid> 
                      </Grid>

                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                    <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                      <Grid container justifyContent="space-between" alignItems="center"> 
                            <Grid item>
                              <ArgonTypography variant="h2">{post?.organisations.name}</ArgonTypography>
                              <ArgonTypography variant="h4" style={{marginTop: '5px'}}>{post?.positions}</ArgonTypography>
                            </Grid>
                            <Grid item>
                            <ArgonTypography variant="h5"> <Clock style={{marginRight: '5px'}}/> 12 Days Left</ArgonTypography>
                              <ArgonTypography variant="h5" style={{marginTop: '5px'}}> <Eye style={{marginRight: '5px'}}/> {post?.views} {post?.views == 1 ? 'View': 'Views'}</ArgonTypography>
                            </Grid>
                      </Grid> 
                      <Grid container style={{marginTop: '40px'}}>
                      <Grid item>
                           <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                            <Grid item xs={8} lg={7} sm={9} md={9}>
                              <ArgonTypography
                                variant="body2"
                                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                              >
                                {post?.job_description}
                              </ArgonTypography>
                            </Grid>
                            <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                              <img
                                src= {post?.image}
                                style={{
                                  width: "200px",
                                  height: "200px",
                                  position: "absolute",
                                  bottom: -30,
                                  right: -20,
                                }}
                                alt="Uniswap logo"
                              />
                            </Grid>
                           </Grid>
                    </Grid>
                      </Grid>
                      <Grid container style={{marginTop: '20px'}} spacing={1}>
                            <Grid item>
                              <ArgonButton variant="outlined" size="small" style={{borderRadius: '40px', fontSize: '13px'}}>  
                                 Software Engineer
                              </ArgonButton>
                            </Grid> 
                            <Grid item>
                              <ArgonButton variant="outlined" size="small" style={{borderRadius: '40px', fontSize: '13px'}}>  
                                 DAOs
                              </ArgonButton>
                            </Grid> 
                      </Grid>

                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                  </>
                   );
                  })}
                </Grid>
              </TabPanel>
              <TabPanel value="2">
              <Grid container spacing={4}>
               
                {posts2.map((post) => (
                  !post.organisations.name && (
                    <Grid item xs={12} lg={4} xl={4} md={12} key={post.id} onClick={() => handleCardClick(post.id)}>
                      <HoverCard>
                        <CardContent>
                          <ArgonBox pt={1}>
                            <Grid container spacing={8}>
                              <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                                <ArgonTypography variant="h3">{post.profile.User_name}</ArgonTypography>
                                <ArgonTypography variant="h5">{post.profile.User_profession}</ArgonTypography>
                              </Grid>
                              <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                                <Grid item xs={8} lg={7} sm={9} md={9}>
                                  <ArgonTypography
                                    variant="body2"
                                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                                  >
                                    {post.profile.desc}
                                  </ArgonTypography>
                                </Grid>
                                <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                                  <img
                                    src={post.profile.image_url}
                                    style={{
                                      width: "180px",
                                      height: "180px",
                                      position: "absolute",
                                      bottom: -10,
                                      right: 0,
                                    }}
                                    alt="Profile Image"
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </ArgonBox>
                        </CardContent>
                      </HoverCard>
                    </Grid>
                  )
                ))}
              </Grid>

              </TabPanel>
            </TabContext>
            </ArgonBox>
        {/* </CardContent>
      </Card> */}
            </ArgonBox>
    </DashboardLayout>
  );
};

export default JobListing;
