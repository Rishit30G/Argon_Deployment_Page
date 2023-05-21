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
import { Box, Divider, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import Overview2 from "../overview";
import Reputation from "../reputation";
import PastExperience from "../past-experience";
import HoverCard from "components/HoverCard";
import axios from "axios";


const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/profile/?format=json";
const bgImage =
  "https://picsum.photos/2600/700?grayscale";

function Overview() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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

  return (
    <DashboardLayout
    sx={{
      backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
        `${linearGradient(
          rgba(gradients.dark.main, 0.6),
          rgba(gradients.dark.state, 0.6)
        )}, url(${bgImage})`,
      backgroundPositionY: "50%",
    }}
    >
      <HoverCard sx={{ height: "40%", overflow: "hidden", marginTop: "170px" }}>
        <ArgonBox px={3} py={3}>
          <Grid container>
            <Grid item xs={12} md={4} lg={3} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.postimg.cc/1t6jZ2yq/822711-user-512x512.png"
                alt="placeholder"
                style={{ marginRight: "20px", height: '250px', width: '250px' }}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={9}>
              <Stack spacing={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <ArgonTypography variant="h2">{post[0].User_name}</ArgonTypography>
                  <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Contact</ArgonButton>
                 
                </Grid>
                <ArgonTypography variant="h5">{post[0].User_profession}</ArgonTypography>
                <ArgonTypography variant="subtitle2">
                  {post[0].desc}
                </ArgonTypography>
                <Grid container spacing={2}>
                  <Grid item>
                <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Salary: {post[0].salary}</ArgonButton>
                </Grid>
                <Grid item>
                <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>View</ArgonButton>
                </Grid>
                <Grid item>
                <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>{post[0].badges} Badge</ArgonButton>
                </Grid>
                <Grid item>
                <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>{post[0].xp_earned} XP Earned</ArgonButton>
                </Grid>
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </ArgonBox>
      </HoverCard>

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
    </DashboardLayout>
  );
}

export default Overview;
