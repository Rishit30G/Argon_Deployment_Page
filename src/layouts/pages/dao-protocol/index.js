import React, { useEffect } from "react";
import { Grid, Stack, Card, CardContent } from "@mui/material";
import ArgonTypography from "components/ArgonTypography";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonButton from "components/ArgonButton";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";

const NewDAOProtocol = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <ArgonTypography variant="h2">New DAO Protocols</ArgonTypography>
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
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            <div data-aos="fade-up" data-aos-duration="5000">
              <ArgonButton
                style={{
                  height: "58px",
                  width: "220px",
                  fontSize: "20px",
                  fontWeight: "400",
                  backgroundColor: "black",
                  border: "1px solid #8d8d8d",
                  color: "white",
                  boxShadow: "5px 5px 10px  #B721BE",
                }}
              >
                Partners
              </ArgonButton>
            </div>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={3}>
              <div data-aos="fade-up" data-aos-duration="5000">
                <ArgonButton
                  style={{
                    height: "58px",
                    width: "220px",
                    fontSize: "20px",
                    fontWeight: "400",
                    backgroundColor: "black",
                    border: "1px solid #8d8d8d",
                    color: "white",
                    boxShadow: "5px 5px 10px  #B721BE",
                  }}
                >
                  {" "}
                  + New Project
                </ArgonButton>
              </div>
              <div data-aos="fade-up" data-aos-duration="5000">
                <ArgonButton
                  style={{
                    height: "58px",
                    width: "220px",
                    fontSize: "20px",
                    fontWeight: "400",
                    backgroundColor: "black",
                    border: "1px solid #8d8d8d",
                    color: "white",
                    boxShadow: "5px 5px 10px  #B721BE",
                  }}
                >
                  {" "}
                  + New Proposals
                </ArgonButton>
              </div>
            </Stack>
          </Grid>
        </Grid>

        <ArgonBox px={3} py={3}>
          <Grid container style={{ marginTop: "20px" }} spacing={4}>
          <Grid item xs={12} xl={4} lg={12} md={12} sm={12}>
              <HoverCard>
                <CardContent>
                  <ArgonBox mx={2} my={2}>
                  <Grid container spacing={8}>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <ArgonTypography variant="h2">Title</ArgonTypography>
                      <ArgonButton
                        style={{
                          height: "52px",
                          width: "180px",
                          fontSize: "15px",
                          fontWeight: "400",
                          backgroundColor: "black",
                          border: "1px solid #8d8d8d",
                          color: "white",
                          boxShadow: "5px 5px 10px  #B721BE",
                        }}
                      >
                        {" "}
                        Check Proposal{" "}
                      </ArgonButton>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                      <Grid item xs={8} lg={7} sm={9} md={9}>
                        <ArgonTypography
                          variant="body2"
                          style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Morbi convallis mi ut quam dictum
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                        <img
                          src="https://picsum.photos/180/180"
                          style={{
                            position: "absolute",
                            borderRadius: "50%",
                            bottom: 0,
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
            <Grid item xs={12} xl={4} lg={12} md={12} sm={12}>
              <HoverCard>
                <CardContent>
                  <ArgonBox mx={2} my={2}>
                  <Grid container spacing={8}>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <ArgonTypography variant="h2">Title</ArgonTypography>
                      <ArgonButton
                        style={{
                          height: "52px",
                          width: "180px",
                          fontSize: "15px",
                          fontWeight: "400",
                          backgroundColor: "black",
                          border: "1px solid #8d8d8d",
                          color: "white",
                          boxShadow: "5px 5px 10px  #B721BE",
                        }}
                      >
                        {" "}
                        Check Proposal{" "}
                      </ArgonButton>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                      <Grid item xs={8} lg={7} sm={9} md={9}>
                        <ArgonTypography
                          variant="body2"
                          style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Morbi convallis mi ut quam dictum
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                        <img
                          src="https://picsum.photos/180/180"
                          style={{
                            position: "absolute",
                            borderRadius: "50%",
                            bottom: 0,
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
            <Grid item xs={12} xl={4} lg={12} md={12} sm={12}>
              <HoverCard>
                <CardContent>
                  <ArgonBox mx={2} my={2}>
                  <Grid container spacing={8}>
                    <Grid
                      container
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <ArgonTypography variant="h2">Title</ArgonTypography>
                      <ArgonButton
                        style={{
                          height: "52px",
                          width: "180px",
                          fontSize: "15px",
                          fontWeight: "400",
                          backgroundColor: "black",
                          border: "1px solid #8d8d8d",
                          color: "white",
                          boxShadow: "5px 5px 10px  #B721BE",
                        }}
                      >
                        {" "}
                        Check Proposal{" "}
                      </ArgonButton>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                      <Grid item xs={8} lg={7} sm={9} md={9}>
                        <ArgonTypography
                          variant="body2"
                          style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Morbi convallis mi ut quam dictum
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                        <img
                          src="https://picsum.photos/180/180"
                          style={{
                            position: "absolute",
                            borderRadius: "50%",
                            bottom: 0,
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
        </ArgonBox>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default NewDAOProtocol;
