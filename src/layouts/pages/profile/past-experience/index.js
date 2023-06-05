import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { Card, Grid, Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";
import axios from "axios";
import { useEffect, useState } from "react";
import HoverCard from "components/HoverCard";

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/pastproject/?format=json";



const PastExperience = () => {

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


  if(posts.length === 0) return null;

  return (
    <>
      <ArgonBox mb={3} px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Past Experience</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      {posts.map((post) => (
      <HoverCard>
        <ArgonBox px={3} py={3}>
          <Grid container>
            <Grid item xs={12} md={4} lg={3} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={post.image_url}
                alt="placeholder"
                style={{ marginRight: "20px" }}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Stack spacing={3}>
                <ArgonTypography variant="h2">{post.project_title}</ArgonTypography>
                <ArgonTypography variant="subtitle2">
                  {post.project_desc}
                </ArgonTypography>
                <ArgonButton href={post.project_url} style={{ height: "40px", width: "180px" }}>View Full Project</ArgonButton>
              </Stack>
            </Grid>
          </Grid>
        </ArgonBox>
      </HoverCard>
   ))}
    </>
  );
};

export default PastExperience;
