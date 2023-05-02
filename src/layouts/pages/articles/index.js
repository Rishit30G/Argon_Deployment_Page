import React from "react";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/article/?format=json";

const Articles = () => {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
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

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <ArgonTypography variant="h2">Article</ArgonTypography>
      </ArgonBox>

      <ArgonBox mb={3} px={3} py={3}>
        <Card>
          <CardContent>
            <Grid container direction="column" spacing={4}>
              <Grid item xs={12} md={4} lg={4}>
                <ArgonTypography style={{ fontFamily: "Lora", fontSize: "40px" }}>
                  {post[0].title}
                </ArgonTypography>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Grid container direction="row"  alignItems="center"  spacing={2}>
                  <Grid item>
                    <ArgonTypography variant="h4">{post[0].author_name}</ArgonTypography>
                  </Grid>
                  <Grid item>
                    <ArgonTypography variant="subtitle2"> • {hoursSinceUpload.toFixed(0)} hours ago</ArgonTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src={post[0].image_url} alt="placeholder" />
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Grid container>
                  <ArgonTypography variant="body4" style={{ marginBottom: "50px" }}>
                  {post[0].article_desc}
                  </ArgonTypography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default Articles;
