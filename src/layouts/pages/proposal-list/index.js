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
import HoverCard from "components/HoverCard";

const ProposalList = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={10} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3} xl={3}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
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
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h4">Etherium Tracker</ArgonTypography>
                 
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "40px"}}
                    >
                     Uniswap
                    </ArgonTypography>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      12K members
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://picsum.photos/150/150"
                      style={{
                        position: "absolute",
                        borderRadius: "50%",
                        bottom: -10,
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

          <Grid item xs={12} md={3} lg={3} xl={3}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h4">Etherium Tracker</ArgonTypography>
                 
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "40px"}}
                    >
                     Uniswap
                    </ArgonTypography>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      12K members
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://picsum.photos/150/150"
                      style={{
                        position: "absolute",
                        borderRadius: "50%",
                        bottom: -10,
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

          <Grid item xs={12} md={3} lg={3} xl={3}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h4">Etherium Tracker</ArgonTypography>
                 
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "40px"}}
                    >
                     Uniswap
                    </ArgonTypography>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      12K members
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://picsum.photos/150/150"
                      style={{
                        position: "absolute",
                        borderRadius: "50%",
                        bottom: -10,
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

          <Grid item xs={12} md={3} lg={3} xl={3}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
              <Grid container spacing={8}>
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
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h4">Etherium Tracker</ArgonTypography>
                 
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "40px"}}
                    >
                     Uniswap
                    </ArgonTypography>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      12K members
                    </ArgonTypography>
                  </Grid>
                  <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://picsum.photos/150/150"
                      style={{
                        position: "absolute",
                        borderRadius: "50%",
                        bottom: -10,
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
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ProposalList;
