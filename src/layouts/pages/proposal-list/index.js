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
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3} style={{ marginBottom: "40px" }}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Proposal Listing Page</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox px={2} py={2}>
        <Grid container justifyContent="space-around" alignItems="center" spacing={3}>
          <Card style={{ width: "330px" }}>
            <Grid item lg={3}>
              <ArgonBox px={3} py={2}>
                <CardContent>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                      <ArgonTypography variant="h5" style={{marginTop: '10px'}}>Etherium Tracker</ArgonTypography>
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
            </Grid>
          </Card>
          <Card style={{ width: "330px" }}>
            <Grid item lg={3}>
              <ArgonBox px={3} py={2}>
                <CardContent>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                      <ArgonTypography variant="h5" style={{marginTop: '10px'}}>Etherium Tracker</ArgonTypography>
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
            </Grid>
          </Card>
          <Card style={{ width: "330px" }}>
            <Grid item lg={3}>
              <ArgonBox px={3} py={2}>
                <CardContent>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                      <ArgonTypography variant="h5" style={{marginTop: '10px'}}>Etherium Tracker</ArgonTypography>
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
            </Grid>
          </Card>
          <Card style={{ width: "330px" }}>
            <Grid item lg={3}>
              <ArgonBox px={3} py={2}>
                <CardContent>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                      <ArgonTypography variant="h5" style={{marginTop: '10px'}}>Etherium Tracker</ArgonTypography>
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
            </Grid>
          </Card>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ProposalList;
