import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { Card, Grid, Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";

const PastExperience = () => {
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
                <ArgonTypography variant="h2">Project 1</ArgonTypography>
                <ArgonTypography variant="subtitle2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </ArgonTypography>
                <ArgonButton style={{ height: "40px", width: "180px" }}>View Full Project</ArgonButton>
              </Stack>
            </Grid>
          </Grid>
        </ArgonBox>
      </Card>
    </>
  );
};

export default PastExperience;
