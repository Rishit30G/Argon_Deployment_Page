import { useMemo } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniGradientLineChart from "examples/Charts/LineCharts/MiniGradientLineChart";
import PlaceholderCard from "examples/Cards/PlaceholderCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";
import CategoriesList from "examples/Lists/CategoriesList";
import MessageCard from "examples/Cards/MessageCard";
import RankingsList from "examples/Lists/RankingsList";
import Calendar from "@ericz1803/react-google-calendar";

// Data
import miniGradientLineChartData from "layouts/dashboards/crm/data/miniGradientLineChartData";
import categoriesListData from "layouts/dashboards/crm/data/categoriesListData";
import rankingsListData from "layouts/dashboards/crm/data/rankingsListData";
import calendarEventsData from "layouts/dashboards/crm/data/calendarEventsData";
import { css } from "@emotion/react";
// Images
import ivancik from "assets/images/ivancik.jpg";
import kalVisualsSquare from "assets/images/kal-visuals-square.jpg";

const API_KEY = "AIzaSyCHjtA3QUkLo34MGEAp8bBqBwWEHqBpd";
let calendars = [
  {
    calendarId: "yourgmailid@gmail.com",
    color: '#00FFFF'
  },
];
let styles = {
  //you can use object styles (no import required)
  calendar: {
    borderWidth: "3px", //make outer edge of calendar thicker
    fontSize: '20px', 
    color: '#ffffff'
  },

  //you can also use emotion's string styles
  today: css`
    /* highlight today by making the text red and giving it a red border */
    color: red;
    border: 5px solid red;
  `,

};

function CRM() {
  const { visitorsChart, incomeChart } = miniGradientLineChartData;
  const { transactionsData, revenueData } = rankingsListData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mx={3} my={3} mb={2}>
           <ArgonTypography variant="h2">Calender</ArgonTypography>
      </ArgonBox>
      <ArgonBox my={5} mx={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12} xl={12}>
                <ArgonBox mt={3}>
                  {useMemo(
                    () => (
                      <Calendar apiKey={API_KEY} styles={styles} calendars={calendars} />
                    ),
                    [calendarEventsData]
                  )}
                </ArgonBox>
            </Grid>
          </Grid>
        </ArgonBox>
    </DashboardLayout>
  );
}

export default CRM;
