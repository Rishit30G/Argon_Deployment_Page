import { AccessTime, Flag, Language, LocalAtm } from "@material-ui/icons";
import { People } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Stack } from "@mui/material";
import { Link } from "@web3uikit/icons";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

const GrantMainPage = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Grant Main Page</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox mb={3} px={3} py={3}>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <ArgonTypography variant="h1">Refi Spring 2023</ArgonTypography>
            <div
              style={{
                borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                margin: "10px 0",
                padding: "5px 0",
                width: "80%",
              }}
            ></div>
          </Grid>

          <Grid item>
            <ArgonBox mr={12}>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography varaint="h5">
                    {" "}
                    <Link /> Website
                  </ArgonTypography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography varaint="h5">
                    {" "}
                    <Language /> Country
                  </ArgonTypography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography varaint="h5">
                    {" "}
                    <AccessTime /> Updated 3 months{" "}
                  </ArgonTypography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <ArgonTypography varaint="h5">
                    {" "}
                    <LocalAtm /> Raised External Funding
                  </ArgonTypography>
                </Grid>
              </Grid>
            </ArgonBox>

            <div
              style={{
                borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
                margin: "10px 0",
                padding: "5px 0",
                width: "80%",
                borderWidth: "50%",
              }}
            ></div>
          </Grid>

          <Grid item>
            <ArgonBox my={1}>
              <Grid container justifyContent="space-between">
                <Card>
                  <CardContent>
                    <Grid item>
                      <ArgonTypography varaint="h5">
                        Estimated lifetime funding received
                      </ArgonTypography>
                      <ArgonTypography variant="h3">~$41,000</ArgonTypography>
                    </Grid>
                  </CardContent>
                </Card>

                <Grid item style={{ marginRight: "110px" }}>
                  <ArgonButton variant="text">
                    {/* https://mui.com/material-ui/react-select/ */}
                    <ArgonTypography variant="h2">Flag</ArgonTypography>
                  </ArgonButton>
                </Grid>
              </Grid>
            </ArgonBox>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox mb={3} mx={3} my={3}>
        <Card>
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <ArgonTypography variant="h2">About</ArgonTypography>
              </Grid>
              <Grid item>
                <ArgonTypography variant="body2">
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat
                </ArgonTypography>
                <ArgonTypography variant="body2" style={{ marginTop: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                </ArgonTypography>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <ArgonTypography variant="h3">Why Refi Spring is doing this</ArgonTypography>
            </Grid>
            <Grid container>
              <Grid item>
                <ArgonTypography variant="body2">
                  At the edges of our imagination lies a regenerative economy, a financial system
                  that serves humanity and our collective home. Within web3, the ReFi movement aims
                  to cultivate this vision within a new economic system. ReFi Spring exists to
                  support its emergence across a rich diversity of global networks.
                </ArgonTypography>
              </Grid>
            </Grid>
            <Grid
              container
              justifyContent="center"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <ArgonTypography variant="h3">
                Ways your funding would support the ReFi Movement.
              </ArgonTypography>
            </Grid>
            <Grid container>
              <Grid item>
                <ArgonTypography variant="body2">
                  At the edges of our imagination lies a regenerative economy, a financial system
                  that serves humanity and our collective home. Within web3, the ReFi movement aims
                  to cultivate this vision within a new economic system. ReFi Spring exists to
                  support its emergence across a rich diversity of global networks. At the edges of
                  our imagination lies a regenerative economy, a financial system that serves
                  humanity and our collective home. Within web3, the ReFi movement aims to cultivate
                  this vision within a new economic system. ReFi Spring exists to support its
                  emergence across a rich diversity of global networks.
                </ArgonTypography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ArgonBox>

      <ArgonBox mb={3} mx={3} my={8}>
        <Card>
          <CardContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <ArgonTypography variant="h2">
                  {" "}
                  <People /> Team Description
                </ArgonTypography>
              </Grid>
              <Grid item>
                <ArgonTypography variant="body2">
                  Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Ut enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat
                </ArgonTypography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ArgonBox>

      <ArgonBox mb={3} mx={3} my={3}>
        <Card>
          <CardContent>
            <Grid container direction="column" spacing={3}>
              <Grid item>
                <ArgonTypography variant="h2">Recent Grants</ArgonTypography>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ maxWidth: 455, maxHeight: 600 }}>
                      <CardActionArea>
                        <CardMedia component="img" image="https://picsum.photos/420/260" />
                        <CardContent>
                          <ArgonTypography
                            variant="h4"
                            style={{ marginTop: "30px", marginBottom: "20px" }}
                          >
                            ETH Stakers are Withdrawing Rewards, Not Principal
                          </ArgonTypography>
                          <Stack direction="row" spacing={2}>
                            <ArgonTypography variant="body1">Aleksandar Gilbert</ArgonTypography>
                            <ArgonTypography variant="body1">4 hrs ago</ArgonTypography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ maxWidth: 455, maxHeight: 600 }}>
                      <CardActionArea>
                        <CardMedia component="img" image="https://picsum.photos/420/260" />
                        <CardContent>
                          <ArgonTypography
                            variant="h4"
                            style={{ marginTop: "30px", marginBottom: "20px" }}
                          >
                            ETH Stakers are Withdrawing Rewards, Not Principal
                          </ArgonTypography>
                          <Stack direction="row" spacing={2}>
                            <ArgonTypography variant="body1">Aleksandar Gilbert</ArgonTypography>
                            <ArgonTypography variant="body1">4 hrs ago</ArgonTypography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ maxWidth: 455, maxHeight: 600 }}>
                      <CardActionArea>
                        <CardMedia component="img" image="https://picsum.photos/420/260" />
                        <CardContent>
                          <ArgonTypography
                            variant="h4"
                            style={{ marginTop: "30px", marginBottom: "20px" }}
                          >
                            ETH Stakers are Withdrawing Rewards, Not Principal
                          </ArgonTypography>
                          <Stack direction="row" spacing={2}>
                            <ArgonTypography variant="body1">Aleksandar Gilbert</ArgonTypography>
                            <ArgonTypography variant="body1">4 hrs ago</ArgonTypography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Card sx={{ maxWidth: 455, maxHeight: 600 }}>
                      <CardActionArea>
                        <CardMedia component="img" image="https://picsum.photos/420/260" />
                        <CardContent>
                          <ArgonTypography
                            variant="h4"
                            style={{ marginTop: "30px", marginBottom: "20px" }}
                          >
                            ETH Stakers are Withdrawing Rewards, Not Principal
                          </ArgonTypography>
                          <Stack direction="row" spacing={2}>
                            <ArgonTypography variant="body1">Aleksandar Gilbert</ArgonTypography>
                            <ArgonTypography variant="body1">4 hrs ago</ArgonTypography>
                          </Stack>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default GrantMainPage;
