import React, { useEffect } from "react";
import { Grid, Stack, Card, CardContent } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import HoverCard from "components/HoverCard";
import 'aos/dist/aos.css';
import AOS from 'aos';

const RelatedProtocols = () => {
  useEffect(() => {
    AOS.init();
  },[]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ lineHeight: 0 }}>
            <Card>
              <CardContent>
            <ArgonTypography variant="h2">Related Protocols</ArgonTypography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <div
        style={{
          borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
          margin: "10px 0",
          padding: "5px 0",
          width: "100%",
        }}
      ></div>
      </ArgonBox>
     
      <ArgonBox px={15} py={3}>
        <Grid container>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <ArgonBox px={3} py={3}>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={2}
                  lg={2}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    src="https://picsum.photos/200/200"
                    alt="placeholder"
                    style={{ marginRight: "20px", borderRadius: '50%' }}
                  />
                </Grid>
                <Grid item xs={12} md={10} lg={10}>
                  <Stack spacing={3}>
                    <ArgonTypography variant="h2">Protocol</ArgonTypography>
                    <ArgonTypography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

                    </ArgonTypography>
                  </Stack>
                </Grid>
              </Grid>
            </ArgonBox>
          </HoverCard>
          </div>
        </Grid>
      </ArgonBox>
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={4} md={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                    </ArgonTypography>
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
            </div>
          </Grid>

          <Grid item xs={12} lg={4} md={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                    </ArgonTypography>
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
            </div>
          </Grid>

          <Grid item xs={12} lg={4} md={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                    </ArgonTypography>
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
            </div>
          </Grid>
        </Grid>
        {/* <Grid container spacing={3} style={{ marginTop: "10px" }}>
        
        <Grid item xs={12} lg={4} md={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                      style={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        bottom: 40,
                        right: 0,
                      }}
                      alt="Uniswap logo"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </HoverCard>
            </div>
          </Grid>

          <Grid item xs={12} lg={4} md={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                      style={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        bottom: 40,
                        right: 0,
                      }}
                      alt="Uniswap logo"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </HoverCard>
            </div>
          </Grid>

          <Grid item xs={12} lg={4} md={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                      style={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        bottom: 40,
                        right: 0,
                      }}
                      alt="Uniswap logo"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </HoverCard>
            </div>
          </Grid>

          </Grid> */}
      </ArgonBox>
    </DashboardLayout>
  );
};

export default RelatedProtocols;
