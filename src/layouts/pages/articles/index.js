import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import ArgonBadge from "components/ArgonBadge";
import Footer from "examples/Footer";
import DefaultDivider from "components/Divider";
import { Helmet } from "react-helmet";

const markdownIt = require("markdown-it");

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/article/?format=json";

const Articles = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        // console.error(error);
      });
  }, []);

  if (posts.length === 0) return null;

  const md = new markdownIt();

  return (

    
    <DashboardLayout>
      <DashboardNavbar />
            <Helmet>
                <title>Articles</title>
            </Helmet>
            <Helmet>
                <meta name="description" content="Articles" />
            </Helmet>
      {posts.map((post) => {
        const time = new Date();
        const timeOfPost = new Date(post.upload_time);
        const hoursSinceUpload = (time - timeOfPost) / (1000 * 60 * 60);
        const html = md.render(post.article_desc);

        return (
          <ArgonBox key={post.id} px={20} py={3}>
            <div data-aos="fade-up" data-aos-duration="5000">
              <Card style={{ boxShadow: "0px 0px 80px purple", backgroundColor: "#212529" }}>
                <ArgonBox px={10} py={3}>
                  <CardContent>
                    <Grid container direction="column" spacing={2}>
                      <Grid item xs={12} md={12} lg={12}>
                        <div data-aos="fade-up" data-aos-duration="5000">
                          <ArgonTypography style={{ fontFamily: "Lora", fontSize: "50px" }}>
                            {post.title}
                          </ArgonTypography>
                        </div>
                        <DefaultDivider />
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <div data-aos="fade-up" data-aos-duration="5000">
                          <Grid container direction="row" alignItems="center" spacing={2}>
                            <Grid item>
                              <ArgonTypography variant="h4">{post.author_name}</ArgonTypography>
                            </Grid>
                            <Grid item>
                              <ArgonTypography variant="subtitle2">
                                • {hoursSinceUpload.toFixed(0)} hours ago
                              </ArgonTypography>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={12} lg={12}>
                        <div data-aos="fade-up" data-aos-duration="5000">
                          <ArgonBadge
                            badgeContent={post.tags}
                            variant="contained"
                            color="dark"
                            container
                            style={{ marginRight: "10px" }}
                          />
                          <ArgonBadge
                            badgeContent={post.tags}
                            variant="contained"
                            color="dark"
                            container
                          />
                        </div>
                      </Grid>
                    </Grid>

                    <Grid container direction="column" spacing={4} style={{ marginTop: "10px" }}>
                      <Card
                        style={{ marginTop: "30px", backgroundColor: "#2A2F34", marginLeft: "20px" }}
                      >
                        <ArgonBox px={17} py={3}>
                          <CardContent>
                            <Grid
                              container
                              direction="column"
                              justifyContainer="center"
                              alignItems="center"
                              spacing={2}
                            >
                              <Grid item xs={12} md={12} lg={12}>
                                <div data-aos="fade-up" data-aos-duration="5000">
                                  <img
                                    src="https://picsum.photos/1300/700"
                                    alt="article"
                                    style={{ width: "100%", height: "auto", borderRadius: "14px" }}
                                  />
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
                                  <img
                                    src="https://picsum.photos/700/400"
                                    alt="article"
                                    style={{ width: "100%", height: "auto", borderRadius: "14px" }}
                                  />
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
        );
      })}
    </DashboardLayout>
  );
};

export default Articles;
