import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { Card, Grid, Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/pastproject/?format=json";



const PastExperience = () => {

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!post) return null;

  return (
    <>
      <ArgonBox mb={3} px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Past Experience</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <Card sx={{ height: "100%", overflow: "hidden" }}>
        <ArgonBox px={3} py={3}>
          <Grid container>
            <Grid item xs={12} md={4} lg={3} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://via.placeholder.com/200"
                alt="placeholder"
                style={{ marginRight: "20px" }}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Stack spacing={3}>
                <ArgonTypography variant="h2">{post[0].project_title}</ArgonTypography>
                <ArgonTypography variant="subtitle2">
                  {post[0].project_desc}
                </ArgonTypography>
                <ArgonButton href={post[0].project_url} style={{ height: "40px", width: "180px" }}>View Full Project</ArgonButton>
              </Stack>
            </Grid>
          </Grid>
        </ArgonBox>
      </Card>
    </>
  );
};

export default PastExperience;
