import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { Avatar, Badge, Card, CardContent, Divider, Grid, Input, Stack } from "@mui/material";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Verified } from "@mui/icons-material";
import "aos/dist/aos.css";
import AOS from "aos";
import HoverCard from "components/HoverCard";
import ArgonBadge from "components/ArgonBadge";
import DefaultDivider from "components/Divider";
import ArgonInput from "components/ArgonInput";
import { Star } from "@phosphor-icons/react";

const ProposalList = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  const handleStarClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <ArgonBox px={10} py={3}>

        <Grid container spacing={3} justifyContent="space-between" >
          <Grid item xl={12}>
              <ArgonTypography variant="h3" fontWeight="bold">
                  Listing of DAOs
              </ArgonTypography>
          <DefaultDivider/>
          </Grid>
        </Grid>
        <Grid container direction="row-reverse" style={{marginTop: '20px'}}>  
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
           <ArgonInput placeholder="Search DAOs"/>
        </Grid> 
        </Grid>
      </ArgonBox>

      <ArgonBox px={{ xs: 2, sm: 3, md: 5, lg: 10 }} py={3}>
        <Grid container spacing={3}>
      
        <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
          <ArgonBox px={1} py={1}>
            <CardContent>
              <Grid container spacing={1} >
              <div
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: "#FF5A5F",
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
                    <Stack direction="row" spacing={2} alignItems="center">
                      <ArgonTypography variant="h3">
                         Uniswap
                      </ArgonTypography>
                    <ArgonBadge badgeContent="12k Memebers" variant="contained" color="dark" container />
                    </Stack>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography variant="body2" style={{color: 'lightgrey'}}>
                       Etherium Tracker
                    </ArgonTypography>
                </Grid>
                </Grid>
              </Grid> 
              <Grid container style={{marginTop: '60px'}}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item xs={8} lg={7} sm={9} md={9}>
                      <ArgonTypography variant="body2"> 
                          lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </ArgonTypography>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <ArgonButton variant="outlined" style={{marginTop: '30px', width: '180px'}} > 
                                <ArgonTypography variant="h6">Track</ArgonTypography>
                            </ArgonButton>
                            <Star size={28} color={isClicked ? '#ffd700' : '#b5a22c'} weight={isClicked ? 'fill' : 'bold'} style={{ marginTop: '26px', cursor: 'pointer' }} onClick={handleStarClick} />
                        </Stack>
                    </Grid>
                    <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                      style={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        bottom: -40,
                        right: -40,
                      }}
                      alt="Uniswap logo"
                    />
                    </Grid>
                  </Grid>
              </Grid> 
            </CardContent>
          </ArgonBox>
          </HoverCard>
          </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
          <ArgonBox px={1} py={1}>
            <CardContent>
              <Grid container spacing={1} >
              <div
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: "#FF5A5F",
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
                    <Stack direction="row" spacing={2} alignItems="center">
                      <ArgonTypography variant="h3">
                         Uniswap
                      </ArgonTypography>
                    <ArgonBadge badgeContent="12k Memebers" variant="contained" color="dark" container />
                    </Stack>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography variant="body2" style={{color: 'lightgrey'}}>
                       Etherium Tracker
                    </ArgonTypography>
                </Grid>
                </Grid>
              </Grid> 
              <Grid container style={{marginTop: '60px'}}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item xs={8} lg={7} sm={9} md={9}>
                      <ArgonTypography variant="body2"> 
                          lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </ArgonTypography>
                      <ArgonButton variant="outlined" style={{marginTop: '30px', width: '180px'}} > 
                        <ArgonTypography variant="h6" >Join Now</ArgonTypography>
                      </ArgonButton>
                    {/* <ArgonButton style={{ height: "48px", width: "150px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE', marginTop: '20px'}}> Join Now </ArgonButton> */}

                    </Grid>
                    <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                      style={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        bottom: -40,
                        right: -40,
                      }}
                      alt="Uniswap logo"
                    />
                    </Grid>
                  </Grid>
              </Grid> 
            </CardContent>
          </ArgonBox>
          </HoverCard>
          </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={4}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
          <ArgonBox px={1} py={1}>
            <CardContent>
              <Grid container spacing={1} >
              <div
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: "#FF5A5F",
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
                    <Stack direction="row" spacing={2} alignItems="center">
                      <ArgonTypography variant="h3">
                         Uniswap
                      </ArgonTypography>
                    <ArgonBadge badgeContent="12k Memebers" variant="contained" color="dark" container />
                    </Stack>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography variant="body2" style={{color: 'lightgrey'}}>
                       Etherium Tracker
                    </ArgonTypography>
                </Grid>
                </Grid>
              </Grid> 
              <Grid container style={{marginTop: '60px'}}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item xs={8} lg={7} sm={9} md={9}>
                      <ArgonTypography variant="body2"> 
                          lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </ArgonTypography>
                      <ArgonButton variant="outlined" style={{marginTop: '30px', width: '180px'}} > 
                        <ArgonTypography variant="h6" >Join Now</ArgonTypography>
                      </ArgonButton>
                    {/* <ArgonButton style={{ height: "48px", width: "150px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE', marginTop: '20px'}}> Join Now </ArgonButton> */}

                    </Grid>
                    <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                    <img
                      src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                      style={{
                        width: "200px",
                        height: "200px",
                        position: "absolute",
                        bottom: -40,
                        right: -40,
                      }}
                      alt="Uniswap logo"
                    />
                    </Grid>
                  </Grid>
              </Grid> 
            </CardContent>
          </ArgonBox>
          </HoverCard>
          </div>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ProposalList;
