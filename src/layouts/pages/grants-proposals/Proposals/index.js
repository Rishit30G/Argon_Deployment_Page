import React, { useEffect } from "react";
import { Card, Grid, Icon, Avatar, Stack, CardContent } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { Heart } from "@web3uikit/icons";
import { Reply, Share } from "@mui/icons-material";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";
import { Fireplace } from "@material-ui/icons";

const Proposals = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ArgonBox px={4} py={3}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={12} xl={8} lg={8}>
            <ArgonTypography variant="h4">Proposals</ArgonTypography>
            <DefaultDivider />
          </Grid>
          <Grid item xs={12} md={12} xl={4} lg={4} >
            <Stack direction="row" justifyContent="space-evenly" >
              <ArgonTypography variant="h4">Status</ArgonTypography>
              <ArgonTypography variant="h4">Category</ArgonTypography>
              <ArgonTypography variant="h4">Importance</ArgonTypography>
            </Stack>
            <DefaultDivider />
        </Grid>
        </Grid> 
      </ArgonBox>

      <ArgonBox px={4} py={2}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} lg={8}>
            <HoverCard>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ArgonTypography variant="h2">Title</ArgonTypography>
                    <ArgonTypography variant="h4">10th Jan 2023</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item>
                      <ArgonTypography
                        variant="body2"
                        style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi convallis mi ut quam dictum,
                      </ArgonTypography>
                      <Stack direction="row" spacing={2} style={{ marginTop: "25px" }}>
                        <ArgonTypography variant="h5">
                          <Heart style={{ marginRight: "10px" }}></Heart> 15
                        </ArgonTypography>
                        <ArgonTypography variant="h5">
                          <Share style={{ marginRight: "10px" }}></Share> 12
                        </ArgonTypography>
                        <ArgonTypography variant="h5">
                          <Reply style={{ marginRight: "10px" }}></Reply> 5
                        </ArgonTypography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <HoverCard>
              <CardContent>
                <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
                  <Grid container item xs={12} md={4} xl={4} lg={4} justifyContent="center"> 
                    <ArgonTypography variant="h6">Prelimanary Discussion</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} md={4} xl={4} lg={4} justifyContent="center">
                    <ArgonTypography variant="h6">Parameters Changed</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} md={4} xl={4} lg={4}>
                      <Stack direction="row" spacing={1} alignItems="center"> 
                      <ion-icon name="flame-outline" style={{color: 'white'}}></ion-icon>
                      <ArgonTypography variant="h6">Low</ArgonTypography>
                      </Stack>
                  </Grid>
                </Grid>
                </CardContent>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>
    </>
  );
};

export default Proposals;
