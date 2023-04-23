import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Grid from "@material-ui/core/Grid";
import { Card, CardActionArea } from "@mui/material";
import { Stack } from "@mui/material";
import HoverCard from "components/HoverCard";
import { styled } from "@mui/styles";

const JobListing = () => {

  const Hover = styled(ArgonBox)({
    transition: 'transform 0.5s, font-size 0.2s',
    transform: 'translateY(0)',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
    '&:hover .hover-typo1': {
      fontSize: '37px'
    },
    '&:hover .hover-typo2': {
      fontSize: '25px'
    },
    '&:hover .hover-typo3': {
      fontSize: '17px'
    },

  });
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3} px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Job Listing</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <HoverCard>
              <Hover>
              <ArgonBox px={3} py={3}>
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
                      style={{ marginRight: "20px", borderRadius: '50%', width: '200px', height: '200px' }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2" className="hover-typo1" style={{fontFamily: 'Poppins', fontWeight: '600px'}}>Uniswap</ArgonTypography>
                      <ArgonTypography variant="h4" className="hover-typo2" fontWeight="medium">Blockchain Developer</ArgonTypography>
                      <ArgonTypography variant="subtitle2" className="hover-typo3" fontWeight="light"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
                </Hover>
            </HoverCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", overflow: "hidden" }}>
              <ArgonBox px={3} py={3}>
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
                      style={{ marginRight: "20px", borderRadius: "50%", width: '200px', height: '200px' }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">James Harden</ArgonTypography>
                      <ArgonTypography variant="h4">Etherium Developer</ArgonTypography>
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
        </Grid>
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", overflow: "hidden" }}>
              <ArgonBox px={3} py={3}>
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
                      style={{ marginRight: "20px", borderRadius: "50%" , width: '200px', height: '200px'}}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Balancer</ArgonTypography>
                      <ArgonTypography variant="h4">Algorithm Trader</ArgonTypography>
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
              <ArgonBox px={3} py={3}>
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
                      style={{ marginRight: "20px", borderRadius: "50%", width: '200px', height: '200px'}}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Pancake Swap</ArgonTypography>
                      <ArgonTypography variant="h4">Algorithm Trader</ArgonTypography>
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
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default JobListing;
