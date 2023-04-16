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

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { CardContent, CardMedia, Typography, Button, makeStyles } from "@material-ui/core";
import { Card, Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";

// Data

function GrantsAndProposals() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
            <ArgonTypography variant="h2">Protocol Grants and Proposals</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox>
        <Card sx={{ height: "100%", overflow: "hidden" }}>
          <ArgonBox px={3} py={3}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={3}
                lg={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://via.placeholder.com/200"
                  alt="placeholder"
                  style={{ marginRight: "20px" }}
                />
              </Grid>
              <Grid item xs={12} md={9} lg={8}>
                <Stack spacing={3}>
                  <ArgonTypography variant="h2">Title</ArgonTypography>
                  <ArgonTypography variant="subtitle2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                </Stack>
              </Grid>
            </Grid>
            <Grid container style={{marginTop: '50px'}}>
              <Grid item>
                <Stack spacing={3} direction="row">
                  <ArgonButton style={{ height: "60px", width: "220px" }}>Proposals</ArgonButton>
                  <ArgonButton style={{ height: "60px", width: "220px" }}>Grants</ArgonButton>
                  <ArgonButton style={{ height: "60px", width: "220px" }}>Jobs</ArgonButton>
                </Stack>
              </Grid>
            </Grid>
          </ArgonBox>
        </Card>
      </ArgonBox>

      <Footer />
    </DashboardLayout>
  );
}

export default GrantsAndProposals;
