import React from "react";
import { Card, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import HoverCard from "components/HoverCard";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Jobs = () => {

  React.useEffect(() => {
    AOS.init();
  },[]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <Stack direction="row" spacing={2} alignItems="center">
          <img
            src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
            alt="placeholder"
            style={{height: "80px", weight: "80px" }}
          />
          <ArgonTypography variant="h2">Uniswap</ArgonTypography>
        </Stack>
      </ArgonBox>

      <ArgonBox mx={3} my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Stack spacing={3}>
                  <ArgonTypography variant="h1">Algorithm Trader</ArgonTypography>
                  <ArgonTypography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                  <Stack spacing={3} direction="row">
                    <ArgonButton
                      style={{
                        height: "58px",
                        width: "220px",
                        fontSize: "20px",
                        fontWeight: "400",
                        backgroundColor: "black",
                        border: "1px solid #8d8d8d",
                        color: "white",
                        boxShadow: "5px 5px 10px  #B721BE",
                      }}
                    >
                      Salary
                    </ArgonButton>
                    <ArgonButton
                      style={{
                        height: "58px",
                        width: "220px",
                        fontSize: "20px",
                        fontWeight: "400",
                        backgroundColor: "black",
                        border: "1px solid #8d8d8d",
                        color: "white",
                        boxShadow: "5px 5px 10px  #B721BE",
                      }}
                    >
                      Views
                    </ArgonButton>
                    <ArgonButton
                      style={{
                        height: "58px",
                        width: "220px",
                        fontSize: "20px",
                        fontWeight: "400",
                        backgroundColor: "black",
                        border: "1px solid #8d8d8d",
                        color: "white",
                        boxShadow: "5px 5px 10px  #B721BE",
                      }}
                    >
                      Connect
                    </ArgonButton>
                  </Stack>
                </Stack>
              </ArgonBox>
            </HoverCard>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div data-aos="fade-up">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Stack spacing={3}>
                  <ArgonTypography variant="h1">Etherium Tracker</ArgonTypography>
                  <ArgonTypography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                  <Stack spacing={3} direction="row">
                    <ArgonButton
                      style={{
                        height: "58px",
                        width: "220px",
                        fontSize: "20px",
                        fontWeight: "400",
                        backgroundColor: "black",
                        border: "1px solid #8d8d8d",
                        color: "white",
                        boxShadow: "5px 5px 10px  #B721BE",
                      }}
                    >
                      Salary
                    </ArgonButton>
                    <ArgonButton
                      style={{
                        height: "58px",
                        width: "220px",
                        fontSize: "20px",
                        fontWeight: "400",
                        backgroundColor: "black",
                        border: "1px solid #8d8d8d",
                        color: "white",
                        boxShadow: "5px 5px 10px  #B721BE",
                      }}
                    >
                      Views
                    </ArgonButton>
                    <ArgonButton
                      style={{
                        height: "58px",
                        width: "220px",
                        fontSize: "20px",
                        fontWeight: "400",
                        backgroundColor: "black",
                        border: "1px solid #8d8d8d",
                        color: "white",
                        boxShadow: "5px 5px 10px  #B721BE",
                      }}
                    >
                      Connect
                    </ArgonButton>
                  </Stack>
                </Stack>
              </ArgonBox>
            </HoverCard>
            </div>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default Jobs;
