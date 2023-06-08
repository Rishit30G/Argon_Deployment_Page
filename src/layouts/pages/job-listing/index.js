import React, { useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Grid from "@material-ui/core/Grid";
import { Box, Card, CardActionArea, CardContent, Divider, Tab } from "@mui/material";
import { Stack } from "@mui/material";
import { styled } from "@mui/styles";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import "aos/dist/aos.css";
import AOS from "aos";
import HoverCard from "components/HoverCard";
import DefaultDivider from "components/Divider";

const JobListing = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h3">Job Listing</ArgonTypography>
          </Grid>
        </Grid>
        <DefaultDivider/>
      </ArgonBox>


    <ArgonBox px={15} py={3}>
      {/* <Card>
        <CardContent> */}
          <ArgonBox px={1} py={1}>
            <TabContext value={value}>
              <Box sx={{ marginBottom: '40px' }}>
                <Card style={{backgroundColor: '#212529'}}>
                  <CardContent>
                <TabList onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: 'grey'} }}> 
                  <Tab label="Organization" value="1" style={{fontSize: '30px', fontStyle: 'italic'}}/>
                  <Tab label="Individual" value="2" style={{fontSize: '30px', fontStyle: 'italic'}}/>
                </TabList>
                </CardContent>
                </Card>
              </Box>
              <TabPanel value="1">
                <Grid container spacing={4}>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                    <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                    <Grid container spacing={8}>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                        <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                        <ArgonTypography variant="h5">Blockchain Developer</ArgonTypography>
                      </Grid>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                        <Grid item xs={8} lg={7} sm={9} md={9}>
                          <ArgonTypography
                            variant="body2"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
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
                              bottom: -10,
                              right: 0,
                            }}
                            alt="Uniswap logo"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                  <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                    <Grid container spacing={8}>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                        <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                        <ArgonTypography variant="h5">Blockchain Developer</ArgonTypography>
                      </Grid>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                        <Grid item xs={8} lg={7} sm={9} md={9}>
                          <ArgonTypography
                            variant="body2"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
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
                              bottom: -10,
                              right: 0,
                            }}
                            alt="Uniswap logo"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                    <Grid container spacing={8}>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                        <ArgonTypography variant="h3">Uniswap</ArgonTypography>
                        <ArgonTypography variant="h5">Blockchain Developer</ArgonTypography>
                      </Grid>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                        <Grid item xs={8} lg={7} sm={9} md={9}>
                          <ArgonTypography
                            variant="body2"
                            style={{ color: "rgba(255, 255, 255, 0.7)" }}
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
                              bottom: -10,
                              right: 0,
                            }}
                            alt="Uniswap logo"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value="2">
              <Grid container spacing={4}>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                    <HoverCard>
                  <CardContent>
                     <ArgonBox pt={1}>
                    <Grid container spacing={8}>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                        <ArgonTypography variant="h3">John Doe</ArgonTypography>
                        <ArgonTypography variant="h5">Etherium Developer</ArgonTypography>
                      </Grid>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                        <Grid item xs={8} lg={7} sm={9} md={9}>
                          <ArgonTypography
                            variant="body2"
                            style={{color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                          </ArgonTypography>
                        </Grid>
                        <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                          <img
                            src=  "https://i.postimg.cc/6QM3WvHG/147142.png"
                            style={{
                              width: "180px",
                              height: "180px",
                              position: "absolute",
                              bottom: -10,
                              right: 0,
                            }}
                            alt="Uniswap logo"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                    <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                    <Grid container spacing={8}>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                        <ArgonTypography variant="h3">John Doe</ArgonTypography>
                        <ArgonTypography variant="h5">Etherium Developer</ArgonTypography>
                      </Grid>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                        <Grid item xs={8} lg={7} sm={9} md={9}>
                          <ArgonTypography
                            variant="body2"
                            style={{color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                          </ArgonTypography>
                        </Grid>
                        <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                          <img
                            src=  "https://i.postimg.cc/6QM3WvHG/147142.png"
                            style={{
                              width: "180px",
                              height: "180px",
                              position: "absolute",
                              bottom: -10,
                              right: 0,
                            }}
                            alt="Uniswap logo"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                  <Grid item xs={12} lg={4} xl={4} md={12}>
                    <HoverCard>
                  <CardContent>
                    <ArgonBox pt={1}>
                    <Grid container spacing={8}>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                        <ArgonTypography variant="h3">John Doe</ArgonTypography>
                        <ArgonTypography variant="h5">Etherium Developer</ArgonTypography>
                      </Grid>
                      <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                        <Grid item xs={8} lg={7} sm={9} md={9}>
                          <ArgonTypography
                            variant="body2"
                            style={{color: "rgba(255, 255, 255, 0.7)" }}
                          >
                            Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                            convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                          </ArgonTypography>
                        </Grid>
                        <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                          <img
                            src=  "https://i.postimg.cc/6QM3WvHG/147142.png"
                            style={{
                              width: "180px",
                              height: "180px",
                              position: "absolute",
                              bottom: -10,
                              right: 0,
                            }}
                            alt="Uniswap logo"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    </ArgonBox>
                  </CardContent>
                    </HoverCard>
                  </Grid>
                </Grid>
              </TabPanel>
            </TabContext>
            </ArgonBox>
        {/* </CardContent>
      </Card> */}
            </ArgonBox>
    </DashboardLayout>
  );
};

export default JobListing;
