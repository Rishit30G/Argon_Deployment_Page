import React from "react";
import { Avatar, Card, Grid, Icon, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { OutlinedFlag } from "@material-ui/icons";
import ArgonButton from "components/ArgonButton";
import { ArrowUpward } from "@mui/icons-material";
import { Heart } from "@web3uikit/icons";

const Grants = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Grants</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", overflow: "hidden" }}>
            <ArgonBox my={3} mx={3}>
              <Grid container xs={12} sm={12} md={12}>
                <ArgonBox style={{ marginTop: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar></Avatar>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h2">Title</ArgonTypography>
                    </Grid>
                  </Grid>
                  <ArgonTypography variant="body1" style={{ marginBottom: "15px" }}>
                    Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                  </ArgonTypography>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <ArgonTypography variant="body1">Amount Requested: $240</ArgonTypography>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" spacing={3}>
                        <ArgonTypography>
                          {" "}
                          <Heart></Heart> 15 Likes
                        </ArgonTypography>
                        <ArgonButton>
                          {" "}
                          <ArrowUpward></ArrowUpward> 15 Upvotes
                        </ArgonButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </Grid>
            </ArgonBox>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%", overflow: "hidden" }}>
            <ArgonBox my={3} mx={3}>
              <Grid container xs={12} sm={12} md={12}>
                <ArgonBox style={{ marginTop: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar></Avatar>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h2">Title</ArgonTypography>
                    </Grid>
                  </Grid>
                  <ArgonTypography variant="body1" style={{ marginBottom: "15px" }}>
                    Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                  </ArgonTypography>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Grid item>
                      <ArgonTypography variant="body1">Amount Requested: $240</ArgonTypography>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" spacing={3}>
                        <ArgonTypography>
                          {" "}
                          <Heart></Heart> 15 Likes
                        </ArgonTypography>
                        <ArgonButton>
                          {" "}
                          <ArrowUpward></ArrowUpward> 15 Upvotes
                        </ArgonButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </Grid>
            </ArgonBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Grants;
