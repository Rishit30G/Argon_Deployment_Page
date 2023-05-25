import React from "react";
import { Card, CardContent, Grid, Stack } from "@mui/material";
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
    <>
      <ArgonBox px={4} py={3}>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={12} lg={12} >
            <ArgonTypography variant="h2">
              Jobs
            </ArgonTypography>
          </Grid>
          <div
        style={{
          borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
          margin: "10px 0",
          padding: "5px 0",
          width: "100%",
        }}
      ></div>
        </Grid>
      </ArgonBox>

      <ArgonBox px={4} py={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Stack spacing={3}>
                  <ArgonTypography variant="h2">Algorithm Trader</ArgonTypography>
                  <ArgonTypography variant="body2" style={{color: "rgba(255, 255, 255, 0.7)", marginTop: '30px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                  <Stack spacing={3} direction="row" style={{marginTop: '40px'}}>
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
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Stack spacing={3}>
                  <ArgonTypography variant="h2">Algorithm Trader</ArgonTypography>
                  <ArgonTypography variant="body2" style={{color: "rgba(255, 255, 255, 0.7)", marginTop: '30px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                  <Stack spacing={3} direction="row" style={{marginTop: '40px'}}>
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
          <Grid item xs={12} md={6} lg={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Stack spacing={3}>
                  <ArgonTypography variant="h2">Algorithm Trader</ArgonTypography>
                  <ArgonTypography variant="body2" style={{color: "rgba(255, 255, 255, 0.7)", marginTop: '30px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                  <Stack spacing={3} direction="row" style={{marginTop: '40px'}}>
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
      </>
  );
};

export default Jobs;
