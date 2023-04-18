import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { Avatar, Card, CardContent, Grid, Stack } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const ProposalList = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3} px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Proposal Listing Page</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <Grid container justifyContent="space-between" spacing={3}> 
        <Grid item lg={3}>
          <Card style={{ width: "350px" }}>
            <ArgonBox px={2} py={2}>
              <CardContent>
                <Grid container spacing={3} direction="column">
                  <Grid item>
                    <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                    <ArgonTypography variant="h4">Etherium Tracker</ArgonTypography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card style={{ width: "350px" }}>
            <ArgonBox px={2} py={2}>
              <CardContent>
                <Grid container spacing={3} direction="column">
                  <Grid item>
                    <ArgonTypography variant="h3">Balancer</ArgonTypography>
                    <ArgonTypography variant="h4">Tracking the system</ArgonTypography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card style={{ width: "350px" }}>
            <ArgonBox px={2} py={2}>
              <CardContent>
                <Grid container spacing={3} direction="column">
                  <Grid item>
                    <ArgonTypography variant="h3">Arbitrum</ArgonTypography>
                    <ArgonTypography variant="h4">Eth Coin Tracker</ArgonTypography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card style={{ width: "350px" }}>
            <ArgonBox px={2} py={2}>
              <CardContent>
                <Grid container spacing={3} direction="column">
                  <Grid item>
                    <ArgonTypography variant="h3">Yoginith</ArgonTypography>
                    <ArgonTypography variant="h4">Blockchain Invention</ArgonTypography>
                  </Grid>
                  <Grid item>
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default ProposalList;
