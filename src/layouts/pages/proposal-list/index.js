import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { Avatar, Badge, Card, CardContent, Divider, Grid, Stack } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Verified } from "@mui/icons-material";
import "aos/dist/aos.css";
import AOS from "aos";

const ProposalList = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={20} py={3}>
        <Grid container justifyContent="space-around" spacing={1}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <Card style={{ border: "1px solid #545454", position: "relative" }}>
  <div
    style={{
      position: "absolute",
      top: "5px",
      right: "5px",
      backgroundColor: "red",
      height: "25px",
      width: "25px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: "12px",
    }}
  >
    3
  </div>
              <ArgonBox px={2} py={2}>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item style={{ marginTop: "10px" }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <ArgonTypography variant="h2">Uniswap </ArgonTypography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h5" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        12K members
                      </ArgonTypography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ backgroundColor: "grey", marginBottom: "20px" }} />

                  <Grid item container justifyContent="center">
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <ArgonTypography variant="h4" style={{ marginTop: "30px" }}>
                      Etherium Tracker
                    </ArgonTypography>
                  </Grid>
                </CardContent>
              </ArgonBox>
            </Card>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000">
            <Card style={{ border: "1px solid #545454" }}>
              <ArgonBox px={2} py={2}>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item style={{ marginTop: "10px" }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <ArgonTypography variant="h2">Uniswap </ArgonTypography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h5" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        12K members
                      </ArgonTypography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ backgroundColor: "grey", marginBottom: "20px" }} />

                  <Grid item container justifyContent="center">
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <ArgonTypography variant="h4" style={{ marginTop: "30px" }}>
                      Etherium Tracker
                    </ArgonTypography>
                  </Grid>
                </CardContent>
              </ArgonBox>
            </Card>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000">
            <Card style={{ border: "1px solid #545454" }}>
              <ArgonBox px={2} py={2}>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item style={{ marginTop: "10px" }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <ArgonTypography variant="h2">Uniswap </ArgonTypography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h5" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        12K members
                      </ArgonTypography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ backgroundColor: "grey", marginBottom: "20px" }} />

                  <Grid item container justifyContent="center">
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <ArgonTypography variant="h4" style={{ marginTop: "30px" }}>
                      Etherium Tracker
                    </ArgonTypography>
                  </Grid>
                </CardContent>
              </ArgonBox>
            </Card>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000">
            <Card style={{ border: "1px solid #545454" }}>
              <ArgonBox px={2} py={2}>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item style={{ marginTop: "10px" }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <ArgonTypography variant="h2">Uniswap </ArgonTypography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h5" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        12K members
                      </ArgonTypography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ backgroundColor: "grey", marginBottom: "20px" }} />

                  <Grid item container justifyContent="center">
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <ArgonTypography variant="h4" style={{ marginTop: "30px" }}>
                      Etherium Tracker
                    </ArgonTypography>
                  </Grid>
                </CardContent>
              </ArgonBox>
            </Card>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000">
            <Card style={{ border: "1px solid #545454" }}>
              <ArgonBox px={2} py={2}>
                <CardContent>
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item style={{ marginTop: "10px" }}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <ArgonTypography variant="h2">Uniswap </ArgonTypography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h5" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        12K members
                      </ArgonTypography>
                    </Grid>
                  </Grid>

                  <Divider sx={{ backgroundColor: "grey", marginBottom: "20px" }} />

                  <Grid item container justifyContent="center">
                    <Avatar
                      alt="John Doe"
                      src="https://picsum.photos/200/200"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </Grid>
                  <Grid item container justifyContent="center">
                    <ArgonTypography variant="h4" style={{ marginTop: "30px" }}>
                      Etherium Tracker
                    </ArgonTypography>
                  </Grid>
                </CardContent>
              </ArgonBox>
            </Card>
          </div>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ProposalList;
