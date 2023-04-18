import React from "react";
import { Grid, Stack, Card } from "@mui/material";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

const RelatedProtocols = () => {
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
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      style={{ marginRight: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Protocol</ArgonTypography>
                      
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
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      style={{ marginRight: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Protocol</ArgonTypography>
                      
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
         <Grid container spacing={3} style={{marginTop: '10px'}}>
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
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      style={{ marginRight: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Protocol</ArgonTypography>
                      
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
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      style={{ marginRight: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Protocol</ArgonTypography>
                      
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

export default RelatedProtocols;
