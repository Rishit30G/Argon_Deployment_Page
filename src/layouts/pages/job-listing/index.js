import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Grid from "@material-ui/core/Grid";
import { Card } from "@mui/material";
import { Stack } from "@mui/material";

const JobListing = () => {
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
                      src="https://picsum.photos/200/200"
                      alt="placeholder"
                      style={{ marginRight: "20px", borderRadius: "50%" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                      <ArgonTypography variant="h4">Blockchain Developer</ArgonTypography>
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
                      src="https://picsum.photos/200/200"
                      alt="placeholder"
                      style={{ marginRight: "20px", borderRadius: "50%" }}
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
                      src="https://picsum.photos/200/200"
                      alt="placeholder"
                      style={{ marginRight: "20px", borderRadius: "50%" }}
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
                      src="https://picsum.photos/200/200"
                      alt="placeholder"
                      style={{ marginRight: "20px", borderRadius: "50%" }}
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
