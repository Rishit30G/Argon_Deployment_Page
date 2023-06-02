import React from "react";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ArgonBadge from "components/ArgonBadge";
import Footer from "examples/Footer";
import DefaultDivider from "components/Divider";

const markdownIt = require("markdown-it");

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/article/?format=json";


const Articles = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

 
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

  if (!post) return null;

  //Make a function to calcultae cureent time and time of post
  const time = new Date();
  const timeOfPost = new Date(post[0].upload_time);
  const hoursSinceUpload = (time - timeOfPost) / (1000 * 60 * 60);

 const md = new markdownIt();
 const html = md.render(post[0].article_desc);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <ArgonBox px={20} py={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
          <Card style={{ boxShadow: "0px 0px 80px purple", backgroundColor: "#212529"}}>
            <ArgonBox px={10} py={3}>
              <CardContent>
                <Grid container direction="column" spacing={2}>
                  <Grid item xs={12} md={12} lg={12}>
                    <div data-aos="fade-up" data-aos-duration="5000">
                      <ArgonTypography style={{ fontFamily: "Lora", fontSize: "50px" }}>
                        {post[0].title}
                      </ArgonTypography>
                    </div>
                    <DefaultDivider/>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <div data-aos="fade-up" data-aos-duration="5000">
                      <Grid container direction="row" alignItems="center" spacing={2}>
                        <Grid item>
                          <ArgonTypography variant="h4">{post[0].author_name}</ArgonTypography>
                        </Grid>
                        <Grid item>
                          <ArgonTypography variant="subtitle2">
                            {" "}
                            • {hoursSinceUpload.toFixed(0)} hours ago
                          </ArgonTypography>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12}>
                    <div data-aos="fade-up" data-aos-duration="5000">
                    <ArgonBadge badgeContent="Web Development" variant="contained" color="dark" container style={{marginRight: '10px'}}/>
                    <ArgonBadge badgeContent="Python" variant="contained" color="dark" container />
                    </div>
                  </Grid>
                </Grid>

                <Grid container direction="column" spacing={4} style={{ marginTop: "10px" }}>
                  <Card
                    style={{ marginTop: "30px", backgroundColor: "#2A2F34", marginLeft: "20px" }}
                  >
                    <ArgonBox px={17} py={3}>
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
                </Grid>
              </CardContent>
            </ArgonBox>
          </Card>
        </div>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default Articles;
