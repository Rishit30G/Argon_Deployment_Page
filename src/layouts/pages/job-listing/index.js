import React, { useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Grid from "@material-ui/core/Grid";
import { Box, Card, CardActionArea, Tab } from "@mui/material";
import { Stack } from "@mui/material";
import { styled } from "@mui/styles";
import HoverListingCard from "components/HoverListingCard";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import "aos/dist/aos.css";
import AOS from "aos";

const JobListing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Hover = styled(ArgonBox)({
    transition: "transform 0.5s, font-size 0.2s",
    transform: "translateY(0)",
    "&:hover": {
      transform: "translateY(-5px)",
    },
    "&:hover .hover-typo1": {
      fontSize: "33px",
    },
    "&:hover .hover-typo2": {
      fontSize: "22px",
    },
    "&:hover .hover-typo3": {
      // fontSize: "16.5px",
    },
  });

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3} px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h3">Job Listing</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <HoverListingCard>
              <Hover>
                <ArgonBox px={1} py={1}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      md={3}
                      lg={3}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                        style={{
                          marginRight: "20px",
                          borderRadius: "50%",
                          width: "150px",
                          height: "150px",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={9} lg={9}>
                      <Stack spacing={3}>
                        <ArgonTypography
                          variant="h3"
                          className="hover-typo1"
                          style={{ fontFamily: "Poppins", fontWeight: "600px" }}
                        >
                          Uniswap
                        </ArgonTypography>
                        <ArgonTypography variant="h5" className="hover-typo2" fontWeight="medium">
                          Blockchain Developer
                        </ArgonTypography>
                        <ArgonTypography
                          variant="subtitle2"
                          className="hover-typo3"
                          fontWeight="light"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat
                        </ArgonTypography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </Hover>
            </HoverListingCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", overflow: "hidden" }}>
              <ArgonBox px={1} py={1}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://i.postimg.cc/1t6jZ2yq/822711-user-512x512.png"
                      alt="placeholder"
                      style={{
                        marginRight: "20px",
                        borderRadius: "50%",
                        width: "160px",
                        height: "160px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h3">James Harden</ArgonTypography>
                      <ArgonTypography variant="h5">Etherium Developer</ArgonTypography>
                      <ArgonTypography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid> */}
        {/* <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", overflow: "hidden" }}>
              <ArgonBox px={1} py={1}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://i.postimg.cc/KcM9K6Sk/the-balancer-protocol-and-the-bal-cryptocurrency.webp"
                      alt="placeholder"
                      style={{
                        marginRight: "20px",
                        borderRadius: "50%",
                        width: "160px",
                        height: "160px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h3">Balancer</ArgonTypography>
                      <ArgonTypography variant="h5">Algorithm Trader</ArgonTypography>
                      <ArgonTypography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", overflow: "hidden" }}>
              <ArgonBox px={1} py={1}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://i.postimg.cc/TwXKt51X/pancakeswap-cake-logo.png"
                      alt="placeholder"
                      style={{
                        marginRight: "20px",
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h3">Pancake Swap</ArgonTypography>
                      <ArgonTypography variant="h5">Algorithm Trader</ArgonTypography>
                      <ArgonTypography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid> */}
      </ArgonBox>

      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Organization" value="1" />
            <Tab label="Individual" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6} xl={6} md={12}>
              <Grid item>
                <HoverListingCard>
                  <div data-aos="fade-up" data-aos-duration="5000">
                    <Hover>
                      <ArgonBox px={1} py={1}>
                        <Grid container>
                          <Grid
                            item
                            xs={12}
                            md={3}
                            lg={3}
                            style={{ display: "flex", justifyContent: "center" }}
                          >
                            <img
                              src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                              style={{
                                marginRight: "20px",
                                borderRadius: "50%",
                                width: "150px",
                                height: "150px",
                              }}
                            />
                          </Grid>
                          <Grid item xs={12} md={9} lg={9}>
                            <Stack spacing={3}>
                              <ArgonTypography
                                variant="h1"
                                className="hover-typo1"
                                style={{ fontFamily: "Poppins", fontWeight: "600px" }}
                              >
                                Uniswap
                              </ArgonTypography>
                              <ArgonTypography
                                variant="h3"
                                className="hover-typo2"
                                fontWeight="medium"
                              >
                                Blockchain Developer
                              </ArgonTypography>
                              <ArgonTypography
                                variant="subtitle2"
                                className="hover-typo3"
                                fontWeight="light"
                              >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat
                              </ArgonTypography>
                            </Stack>
                          </Grid>
                        </Grid>
                      </ArgonBox>
                    </Hover>
                  </div>
                </HoverListingCard>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} xl={6} md={12}>
              <Grid item>
                <HoverListingCard>
                  <div data-aos="fade-up" data-aos-duration="5000">
                    <ArgonBox px={1} py={1}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          md={3}
                          lg={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            src="https://i.postimg.cc/TwXKt51X/pancakeswap-cake-logo.png"
                            alt="placeholder"
                            style={{
                              marginRight: "20px",
                              borderRadius: "50%",
                              width: "150px",
                              height: "150px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={9} lg={9}>
                          <Stack spacing={3}>
                            <ArgonTypography variant="h1">Pancake Swap</ArgonTypography>
                            <ArgonTypography variant="h3">Algorithm Trader</ArgonTypography>
                            <ArgonTypography variant="subtitle2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat
                            </ArgonTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </ArgonBox>
                  </div>
                </HoverListingCard>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value="2">
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6} xl={6} md={12}>
              <Grid item>
                <HoverListingCard>
                  <div data-aos="fade-up" data-aos-duration="5000">
                    <ArgonBox px={1} py={1}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          md={3}
                          lg={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            src="https://i.postimg.cc/1t6jZ2yq/822711-user-512x512.png"
                            alt="placeholder"
                            style={{
                              marginRight: "20px",
                              borderRadius: "50%",
                              width: "160px",
                              height: "160px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={9} lg={9}>
                          <Stack spacing={3}>
                            <ArgonTypography variant="h3">James Harden</ArgonTypography>
                            <ArgonTypography variant="h5">Etherium Developer</ArgonTypography>
                            <ArgonTypography variant="subtitle2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat
                            </ArgonTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </ArgonBox>
                  </div>
                </HoverListingCard>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={6} xl={6} md={12}>
              <Grid item>
                <HoverListingCard>
                  <div data-aos="fade-up" data-aos-duration="5000">
                    <ArgonBox px={1} py={1}>
                      <Grid container>
                        <Grid
                          item
                          xs={12}
                          md={3}
                          lg={3}
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <img
                            src="https://i.postimg.cc/1t6jZ2yq/822711-user-512x512.png"
                            alt="placeholder"
                            style={{
                              marginRight: "20px",
                              borderRadius: "50%",
                              width: "160px",
                              height: "160px",
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} md={9} lg={9}>
                          <Stack spacing={3}>
                            <ArgonTypography variant="h3">James Harden</ArgonTypography>
                            <ArgonTypography variant="h5">Etherium Developer</ArgonTypography>
                            <ArgonTypography variant="subtitle2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat
                            </ArgonTypography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </ArgonBox>
                  </div>
                </HoverListingCard>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
      </TabContext>
    </DashboardLayout>
  );
};

export default JobListing;
