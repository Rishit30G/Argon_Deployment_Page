import React from "react";
import { Card, Grid } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonProgress from "components/ArgonProgress";
import ReactGithubCalendar from 'react-github-calendar';


const Reputation = () => {
  return (
    <>
      <ArgonBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Reputation</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <Card sx={{ overflow: "hidden", height: "100%" }}>
        <ArgonBox px={3} py={3}>
          <Grid container direction="column" spacing={5}>
            <Grid item xs={12} md={3} lg={3}>
              <ArgonTypography variant="h3">Reputation Earned</ArgonTypography>
              <Grid xs={3} md={3} lg={3}>
              <ArgonProgress value="75" variant="gradient" label />
              <ArgonProgress value="55" variant="gradient" label />
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <ArgonTypography variant="h3">Badges Earned by User</ArgonTypography>
              
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <ArgonTypography variant="h3">GitHub Contribution</ArgonTypography>
              <ReactGithubCalendar username="Rishit30G" />
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <ArgonTypography variant="h3">Web 3.0 Contribution</ArgonTypography>
              <ReactGithubCalendar username="Sayannath"/>
            </Grid>
          </Grid>
          </ArgonBox> 
        </Card>
      </ArgonBox>
    </>
  );
};

export default Reputation;
