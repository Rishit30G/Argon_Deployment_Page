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
import { ArrowBack, DiscFullOutlined } from "@mui/icons-material";
import { Twitter } from "@web3uikit/icons";


// Data

function GrantsAndProposals() {
  useEffect(() => {
    AOS.init();
  },[]);

  
  const [showProposal, setShowProposal] = useState(false);

  const toggleProposal = () => {
    setShowProposal(!showProposal);
  };

  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={10} py={3}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={10} md={6} lg={4}>
            <Card> 
              <CardContent> 
            <ArgonTypography variant="h2">Protocol Grants and Proposals</ArgonTypography>
            </CardContent>
            </Card> 
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

      <ArgonBox px={10} py={3}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4} xl={4}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
              <CardActionArea>
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

                    <ArgonBox style={{fontSize: '30px', marginTop: '10px'}}>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '20px', marginTop: '10px' }}
                    >
                      <Twitter style={{ color: '#1DA1F2' }} />
                    </a>
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '20px', marginTop: '10px', marginLeft: '10px' }}
                    >
                      <LanguageIcon style={{ color: '#808080' }} />
                    </a>
                      <img src="https://i.postimg.cc/NG2GnXwh/defi-lama-logo-freelogovectors-net.png" style={{width: '20px', height: '20px', marginLeft: '10px'}}/>
                  
                    </ArgonBox>
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
            </CardActionArea>
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
          
          {showProposal && <div data-aos="fade-up" data-aos-duration="5000"><Proposals/></div>}
      </ArgonBox>
    </DashboardLayout>
  );
}

export default GrantsAndProposals;
