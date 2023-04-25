import React from "react";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const Articles = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <ArgonTypography variant="h2">Article</ArgonTypography>
      </ArgonBox>

      <ArgonBox mb={3} px={3} py={3}>
        <Card>
          <CardContent>
            <Grid container direction="column" spacing={4}>
              <Grid item xs={12} md={4} lg={4}>
                <ArgonTypography style={{ fontFamily: "Lora", fontSize: "40px" }}>
                  Staked ETH Withdrawals Were Activated in Major Upgrade
                </ArgonTypography>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Grid container direction="row"  alignItems="center"  spacing={2}>
                  <Grid item>
                    <ArgonTypography variant="h4">John Doe</ArgonTypography>
                  </Grid>
                  <Grid item>
                    <ArgonTypography variant="subtitle2"> • 19 hours ago</ArgonTypography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                lg={4}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img src="https://picsum.photos/600/400" alt="placeholder" />
              </Grid>

              <Grid item xs={12} md={4} lg={4}>
                <Grid container>
                  <ArgonTypography variant="body4" style={{ marginBottom: "50px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud
                  </ArgonTypography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default Articles;
