import React, { useEffect } from "react";
import { Grid, Stack, Card } from "@mui/material";
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
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
            <ArgonTypography variant="h2">Related Protocols</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>
      <ArgonBox px={3} py={3}>
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
                    <ArgonTypography variant="h1">Protocol</ArgonTypography>
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
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard >
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://i.postimg.cc/TwXKt51X/pancakeswap-cake-logo.png"
                      alt="placeholder"
                      style={{ marginRight: "25px", width: '120px', height: '120px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h1">Protocol</ArgonTypography>
                      <ArgonTypography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </HoverCard>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://i.postimg.cc/TwXKt51X/pancakeswap-cake-logo.png"
                      alt="placeholder"
                      style={{ marginRight: "25px", width: '120px', height: '120px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h1">Protocol</ArgonTypography>
                      <ArgonTypography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </HoverCard>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
        <Grid item xs={12} md={6}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://i.postimg.cc/TwXKt51X/pancakeswap-cake-logo.png"
                      alt="placeholder"
                      style={{ marginRight: "25px", width: '120px', height: '120px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h1">Protocol</ArgonTypography>
                      <ArgonTypography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </HoverCard>
            </div>
          </Grid>

         <Grid item xs={12} md={6}>
            <div data-aos="fade-up" data-aos-duration="5000">
            <HoverCard>
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://i.postimg.cc/TwXKt51X/pancakeswap-cake-logo.png"
                      alt="placeholder"
                      style={{ marginRight: "25px", width: '120px', height: '120px' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h1">Protocol</ArgonTypography>
                      <ArgonTypography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </HoverCard>
            </div>
          </Grid>
          </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default RelatedProtocols;
