/* eslint-disable no-unused-vars */
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
import Icon from "@mui/material/Icon";
// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailedStatisticsCard from "examples/Cards/StatisticsCards/DetailedStatisticsCard";
import SalesTable from "examples/Tables/SalesTable";
import Table from "examples/Tables/Table";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Argon Dashboard 2 PRO MUI base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Slider from "layouts/dashboards/default/components/Slider";
import TeamMembers from "layouts/dashboards/default/components/TeamMembers";
import TodoList from "layouts/dashboards/default/components/TodoList";
import ProgressTrack from "layouts/dashboards/default/components/ProgressTrack";
import BalanceCard from "layouts/dashboards/default/components/BalanceCard";
import CryptoCard from "layouts/dashboards/default/components/CryptoCard";

// Pages layout components
import Post from "layouts/pages/profile/teams/components/Post";

// Data
import reportsBarChartData from "layouts/dashboards/default/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboards/default/data/gradientLineChartData";
import projectsTableData from "layouts/dashboards/default/data/projectsTableData";
import salesTableData from "layouts/dashboards/default/data/salesTableData";
import authorsTableData from "layouts/dashboards/default/data/authorsTableData";
import categoriesListData from "layouts/dashboards/default/data/categoriesListData";
import { Rowing } from "@mui/icons-material";
import { GrantCard } from "examples/Cards/GrantCard";
import axios from "axios";
import { useEffect, useState } from "react";
import HoverCard from "components/HoverCard";
import DefaultDivider from "components/Divider";
import { CardContent } from "@mui/material";

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/appmetrics/?format=json";

function Default() {
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

  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <ArgonBox py={3} px={15}> 
         <Grid container justifyContent="center">  
            <Grid item xs={8} lg={8} xl={8}>
              <Slider/> 
            </Grid>
         </Grid>
      </ArgonBox>



      <ArgonBox  px={15}>
        <ArgonTypography variant="h2" style={{ marginBottom: "20px", fontFamily:'Montserrat' }}>
          App Metrics
          <DefaultDivider />
        </ArgonTypography>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <HoverCard>
              <CardContent> 
                <ArgonBox px={1} py={1}>
                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item xs={12} md={8} lg={9} xl={9}>
                  <ArgonTypography variant="h3" style={{fontFamily: 'Nunito Sans'}}> DAOs Tracked </ArgonTypography>
                  </Grid> 
                  <Grid item xs={12} md={4} lg={3} xl={3}>
                    <ArgonBox style={{display: "flex", justifyContent: "flex-end"}}>
                      <img src="https://i.postimg.cc/76Y3GhZ6/DAO-Icon.png" style={{borderRadius: "50%", height: '60px', width: '60px'}} />
                    </ArgonBox>
                  </Grid>
                </Grid> 
                <Grid container> 
                   <Grid item xs={12} md={6} lg={3}>
                     <ArgonTypography variant="h1" style={{fontFamily: 'Nunito Sans'}}> {post[0].cnt_dao} </ArgonTypography>
                    </Grid>
                </Grid>
                </ArgonBox>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <HoverCard>
              <CardContent> 
                <ArgonBox px={1} py={1}>
                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item xs={12} md={8} lg={9} xl={9}>
                  <ArgonTypography variant="h3"> Protocol Live </ArgonTypography>
                  </Grid> 
                  <Grid item xs={12} md={4} lg={3} xl={3}>
                    <ArgonBox style={{display: "flex", justifyContent: "flex-end"}}>
                      <img src="https://i.postimg.cc/wjp0x6Lt/2.png" style={{borderRadius: "50%", height: '60px', width: '60px'}} />
                    </ArgonBox>
                  </Grid>
                </Grid> 
                <Grid container> 
                   <Grid item xs={12} md={6} lg={3}>
                     <ArgonTypography variant="h1"> {post[0].jobs_disbursed} </ArgonTypography>
                    </Grid>
                </Grid>
                </ArgonBox>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <HoverCard>
              <CardContent> 
                <ArgonBox px={1} py={1}>
                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item xs={12} md={8} lg={9} xl={9}>
                  <ArgonTypography variant="h3"> Live Proposals </ArgonTypography>
                  </Grid> 
                  <Grid item xs={12} md={4} lg={3} xl={3}>
                    <ArgonBox style={{display: "flex", justifyContent: "flex-end"}}>
                      <img src="https://i.postimg.cc/C58sYtKH/3.png" style={{borderRadius: "50%", height: '60px', width: '60px'}} />
                    </ArgonBox>
                  </Grid>
                </Grid> 
                <Grid container> 
                   <Grid item xs={12} md={6} lg={3}>
                     <ArgonTypography variant="h1"> {post[0].live_proposal} </ArgonTypography>
                    </Grid>
                </Grid>
                </ArgonBox>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
          <HoverCard>
              <CardContent> 
                <ArgonBox px={1} py={1}>
                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item xs={12} md={8} lg={9} xl={9}>
                  <ArgonTypography variant="h3"> Job Listing </ArgonTypography>
                  </Grid> 
                  <Grid item xs={12} md={4} lg={3} xl={3}>
                    <ArgonBox style={{display: "flex", justifyContent: "flex-end"}}>
                      <img src="https://i.postimg.cc/cJdY2CYm/4.png" style={{borderRadius: "50%", height: '60px', width: '60px'}} />
                    </ArgonBox>
                  </Grid>
                </Grid> 
                <Grid container> 
                   <Grid item xs={12} md={6} lg={3}>
                     <ArgonTypography variant="h1"> {post[0].xp_earned} </ArgonTypography>
                    </Grid>
                </Grid>
                </ArgonBox>
              </CardContent>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox py={2} px={15}>
        <ArgonTypography variant="h2" style={{ marginBottom: "30px" , marginTop: "10px"}}>
                  Grants & Proposal Calender
            <DefaultDivider />
                </ArgonTypography>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
          
        
                <GrantCard></GrantCard>
          </Grid>
        </Grid>
      </ArgonBox> 

      <ArgonBox py={3} px={15}>
        <Grid container spacing={5} style={{ display: "flex" }}>
          {/* <Grid item xs={12} md={4} lg={4}>
            <ArgonTypography variant="h2" style={{ marginBottom: "20px" }}>
              Top Discussions
              <DefaultDivider />
            </ArgonTypography>

            <Post />
          </Grid> */}
          <Grid item xs={12} md={4} lg={6}>
            <ArgonTypography variant="h2" style={{ marginBottom: "20px" }}>
              Top DAO Proposals  
              <DefaultDivider />
            </ArgonTypography>

            <TeamMembers />
          </Grid>
          <Grid item xs={12} md={4} lg={6}>
            <ArgonTypography variant="h2" style={{ marginBottom: "20px" }}>
              Latest Happenings 
              <DefaultDivider />
            </ArgonTypography>
            <TodoList />
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
