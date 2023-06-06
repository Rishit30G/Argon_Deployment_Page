/**
=========================================================
* Argon Dashboard 2 PRO MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-mui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import 'aos/dist/aos.css';
import AOS from 'aos';

// Argon Dashboard 2 PRO MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { CardContent, CardMedia, Typography, Button, makeStyles } from "@material-ui/core";
import { Card, CardActionArea, IconButton, Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";
import ArgonSocialButton from "components/ArgonSocialButton";
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import HoverCard from "components/HoverCard";
import { useEffect, useState } from "react";
import Proposals from "./Proposals";
import { useNavigate } from "react-router-dom";
import { ArrowBack, DiscFullOutlined, FormatQuote, Twitter } from "@mui/icons-material";
import Grants from "./Grant";
import Jobs from "./Jobs";
import DefaultDivider from "components/Divider";
import Footer from "examples/Footer";


// Data

function GrantsAndProposals() {
  useEffect(() => {
    AOS.init();
  },[]);

  
  const [showProposal, setShowProposal] = useState(false);
  const [showGrant, setShowGrant] = useState(false);
  const [showJobs, setShowJobs] = useState(false);


  const toggleProposal = () => {
    setShowProposal(!showProposal);
    setShowGrant(false);
    setShowJobs(false);

  };

  const toggleGrant = () => {
    setShowGrant(!showGrant);
    setShowProposal(false);
    setShowJobs(false);
  };

  const toggleJobs = () => {
    setShowJobs(!showJobs);
    setShowProposal(false);
    setShowGrant(false);
  };
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={10} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <ArgonTypography variant="h2">Protocol Grants and Proposals</ArgonTypography>
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={12}>
          <ArgonTypography variant="h5" style={{color: '#ced4da', fontStyle: 'italic'}}>
  <q>Using this protocol? Analyze the effects of these proposals on your usability and profitability.</q>
</ArgonTypography>
          </Grid> 
        </Grid>

      <DefaultDivider />
      </ArgonBox>

      <ArgonBox px={10} py={3}>
        <Card>
          <CardContent>
          <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
            <ArgonBox px={1} py={1}> 
              <Grid container spacing={4}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                    >
                      Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                      convallis mi ut quam dictum, eget rutrum ipsum ultrices. 
                     
                    </ArgonTypography>
                    <Grid container style={{marginTop: '10px'}}> 
                      <Grid item> 
                        <TwitterIcon style={{color: '#1DA1F2', marginRight: '10px'}}/>
                      </Grid>
                      <Grid item> 
                       <LanguageIcon style={{color: '#8d8d8d', marginRight: '10px'}}/>
                      </Grid>
                      <Grid item> 
                          <img src="https://i.postimg.cc/hPXgrGBb/defi-lama-logo-freelogovectors-net.png" style={{width: '18px', height: '20px'}}/>
                      </Grid>
                    </Grid>
                  </Grid>
                


                  <Grid item xs={4} lg={5} sm={3} md={3}>
                    <img
                      src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                      style={{
                        width: "250px",
                        height: "250px",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                      }}
                      alt="Uniswap logo"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} justifyContent="space-around" >
                <Stack spacing={3} direction="row" >
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}} onClick={toggleProposal}>Proposals</ArgonButton>
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}} onClick={toggleGrant}>Grants</ArgonButton>
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}} onClick={toggleJobs}>Jobs</ArgonButton>
                  </Stack>
                </Grid> 
              </Grid>
            </ArgonBox>
            </CardContent>
          </HoverCard>
          </div>
          </Grid>
            </Grid>
            {showGrant && (
              <div data-aos="fade-up" data-aos-duration="5000">
                <Grants />
              </div>
            )}

            {showProposal &&  (
              <div data-aos="fade-up" data-aos-duration="5000">
                <Proposals />
              </div>
            )}

            {showJobs && (
              <div data-aos="fade-up" data-aos-duration="5000">
                <Jobs />
              </div>
            )}
          </CardContent>
        </Card>


        
      </ArgonBox>
      {/* <ArgonBox px={10} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4} xl={4}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
            <ArgonBox px={1} py={1}> 
              <Grid container spacing={4}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
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
                        bottom: 0,
                        right: 0,
                      }}
                      alt="Uniswap logo"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} justifyContent="space-around" >
                <Stack spacing={3} direction="row" >
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}} onClick={toggleProposal}>Proposals</ArgonButton>
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Grants</ArgonButton>
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Jobs</ArgonButton>
                  </Stack>
                </Grid> 
              </Grid>
            </ArgonBox>
            </CardContent>
          </HoverCard>
          </div>
          </Grid>
          <Grid item xs={12} md={4} lg={4} xl={4}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
            <ArgonBox px={1} py={1}> 
              <Grid container spacing={4}>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between" alignItems="center">
                  <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                </Grid>
                <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                  <Grid item xs={8} lg={7} sm={9} md={9}>
                    <ArgonTypography
                      variant="body2"
                      style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
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
                        bottom: 0,
                        right: 0,
                      }}
                      alt="Uniswap logo"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} justifyContent="space-around" >
                <Stack spacing={3} direction="row" >
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}} onClick={toggleProposal}>Proposals</ArgonButton>
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Grants</ArgonButton>
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Jobs</ArgonButton>
                  </Stack>
                </Grid> 
              </Grid>
            </ArgonBox>
            </CardContent>
          </HoverCard>
          </div>
          </Grid>
            </Grid>
      </ArgonBox> */}
    </DashboardLayout>
  );
}

export default GrantsAndProposals;
