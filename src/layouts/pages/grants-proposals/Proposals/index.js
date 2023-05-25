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

const Proposals = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ArgonBox px={4} py={3}>
        <Grid container spacing={3}>
          <Grid container item xs={12} md={12} lg={12}>
            <ArgonTypography variant="h2">
              Proposals
            </ArgonTypography>
            <DefaultDivider/>
            
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={4} py={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
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
                    <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                    <ArgonTypography variant="h4">10th Jan 2023</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item xs={8} lg={7} sm={9} md={9}>
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
                    <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                      <img
                        src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                        style={{
                          width: "200px",
                          height: "200px",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                        alt="Uniswap logo"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
                    <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                    <ArgonTypography variant="h4">10th Jan 2023</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item xs={8} lg={7} sm={9} md={9}>
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
                    <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                      <img
                        src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                        style={{
                          width: "200px",
                          height: "200px",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                        alt="Uniswap logo"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
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
                    <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                    <ArgonTypography variant="h4">10th Jan 2023</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item xs={8} lg={7} sm={9} md={9}>
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
                    <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                      <img
                        src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                        style={{
                          width: "200px",
                          height: "200px",
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                        }}
                        alt="Uniswap logo"
                      />
                    </Grid>
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
