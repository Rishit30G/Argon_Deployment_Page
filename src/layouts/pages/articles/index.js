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
      <ArgonBox px={15} py={3}>
        <ArgonTypography variant="h1">Article</ArgonTypography>
      </ArgonBox>

      <ArgonBox px={20} py={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
          <Card style={{ boxShadow: "0px 0px 60px #B721BE" }}>
            <ArgonBox px={10} py={3}>
              <CardContent>
                <Grid container direction="column" spacing={4}>
                  <Grid item xs={12} md={12} lg={12}>
                    <div data-aos="fade-up" data-aos-duration="5000">
                      <ArgonTypography style={{ fontFamily: "Lora", fontSize: "50px" }}>
                        {post[0].title}
                      </ArgonTypography>
                    </div>
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
                </Grid>

                <Grid container direction="column" spacing={4} style={{ marginTop: "10px" }}>
                  <Card
                    style={{ marginTop: "30px", backgroundColor: "#242424", marginLeft: "20px" }}
                  >
                    <ArgonBox px={10} py={3}>
                      <CardContent>
                        <Grid
                          item
                          xs={12}
                          md={12}
                          lg={12}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <div data-aos="zoom-out" data-aos-duration="5000">
                            <img
                              src="https://picsum.photos/1100/600"
                              style={{ borderRadius: "10px" }}
                              alt="placeholder"
                            />
                          </div>
                        </Grid>

                        <Grid item xs={12} md={12} lg={12}>
                          <Grid container>
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
