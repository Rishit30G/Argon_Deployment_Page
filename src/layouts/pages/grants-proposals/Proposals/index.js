import React from "react";
import { Card, Grid, Icon, Avatar, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { Heart } from "@web3uikit/icons";
import { Reply, Share } from "@mui/icons-material";

const Proposals = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Proposals</ArgonTypography>
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
                  <ArgonTypography variant="body1">
                    Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                  </ArgonTypography>
                  <Stack direction="row-reverse" spacing={2} style={{ marginTop: "25px"}}>
                    <ArgonTypography variant="body1">
                      <Heart></Heart> 15 Likes
                    </ArgonTypography>
                    <ArgonTypography variant="body1">
                      <Share></Share> 12 Shares
                    </ArgonTypography>
                    <ArgonTypography variant="body1">
                      <Reply></Reply> 5 Replies
                    </ArgonTypography>
                  </Stack>
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
                  <ArgonTypography variant="body1">
                    Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                  </ArgonTypography>
                  <Stack direction="row-reverse" spacing={2} style={{ marginTop: "25px"}}>
                    <ArgonTypography variant="body1">
                      <Heart></Heart> 15 Likes
                    </ArgonTypography>
                    <ArgonTypography variant="body1">
                      <Share></Share> 12 Shares
                    </ArgonTypography>
                    <ArgonTypography variant="body1">
                      <Reply></Reply> 5 Replies
                    </ArgonTypography>
                  </Stack>
                </ArgonBox>
              </Grid>
            </ArgonBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Proposals;
