/**
=========================================================
* Argon Dashboard 2 PRO MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-mui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {TabContext, TabList, TabPanel} from '@material-ui/lab';
import Tab from '@mui/material/Tab';

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/pages/profile/components/Header";
import PlatformSettings from "layouts/pages/profile/profile-overview/components/PlatformSettings";

// Data
import profilesListData from "layouts/pages/profile/profile-overview/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import ArgonButton from "components/ArgonButton";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Overview2 from "../overview";
import Reputation from "../reputation";
import PastExperience from "../past-experience";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

function Overview() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <Card sx={{ height: "40%", overflow: "hidden", marginTop: "170px" }}>
        <ArgonBox px={3} py={3}>
          <Grid container>
            <Grid item xs={12} md={6} lg={4} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://via.placeholder.com/200"
                alt="placeholder"
                style={{ marginRight: "20px" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={8}>
              <Stack spacing={3}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <ArgonTypography variant="h2">James Harden</ArgonTypography>
                  <ArgonButton style={{ height: "40px", width: "180px", marginRight: "15px" }}>
                    Contact
                  </ArgonButton>
                </Grid>
                <ArgonTypography variant="h5">Eth Trader</ArgonTypography>
                <ArgonTypography variant="subtitle2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </ArgonTypography>
                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                  <ArgonButton style={{ height: "40px", width: "180px", marginRight: "15px" }}>
                    Salary
                  </ArgonButton>
                  <ArgonButton style={{ height: "40px", width: "180px", marginRight: "15px" }}>
                    View
                  </ArgonButton>
                  <ArgonButton style={{ height: "5px", width: "220px" }}>
                    Badges and XP Earned
                  </ArgonButton>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </ArgonBox>
      </Card>

      <ArgonBox mt={3} >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Overview" value="1" />
              <Tab label="Reputation" value="2" />
              <Tab label="Past Experience" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><Overview2/></TabPanel>
          <TabPanel value="2"><Reputation/></TabPanel>
          <TabPanel value="3"><PastExperience/></TabPanel>
        </TabContext>
      </ArgonBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
