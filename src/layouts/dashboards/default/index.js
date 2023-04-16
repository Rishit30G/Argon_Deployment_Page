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

function Default() {
  const { size } = typography;
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3} px={3}>
      <ArgonTypography variant="h2" fontWeight="bold" textTransform="capitalize" style={{marginBottom: '15px'}}>
             App Metrics 
        </ArgonTypography>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Dao's Tracked"
              count="24"
              icon={{ color: "info", component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: "success", count: "+55%", text: "since yesterday" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Jobs Disbursed"
              count="54"
              icon={{ color: "error", component: <i className="ni ni-world" /> }}
              // percentage={{ color: "success", count: "+3%", text: "since last week" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="XP Earned"
              count="3,462"
              icon={{ color: "success", component: <i className="ni ni-paper-diploma" /> }}
              // percentage={{ color: "error", count: "-2%", text: "since last quarter" }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="Live Proposals"
              count="24"
              icon={{ color: "warning", component: <i className="ni ni-cart" /> }}
              // percentage={{ color: "success", count: "+5%", text: "than last month" }}
            />
          </Grid>
        </Grid>
        <ArgonTypography variant="h2" fontWeight="bold" textTransform="capitalize" style={{marginBottom: '15px'}}>
              Grants and Proposal Calender
            </ArgonTypography>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
             <GrantCard></GrantCard>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ display: "flex" }}>
        <Grid item xs={12} md={4} lg={4}>
            <ArgonTypography variant="h2" fontWeight="bold" textTransform="capitalize" style={{marginBottom: '15px'}}>
              Top Discussions
            </ArgonTypography>
            <Post />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <ArgonTypography variant="h2" fontWeight="bold" textTransform="capitalize" style={{marginBottom: '15px'}}>
              Top Proposals
            </ArgonTypography>
            <TeamMembers />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <ArgonTypography variant="h2" fontWeight="bold" textTransform="capitalize" style={{marginBottom: '15px'}}>
              Top Articles
            </ArgonTypography>
            <TodoList />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;
