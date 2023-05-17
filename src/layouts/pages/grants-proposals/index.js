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
import { Card, Stack } from "@mui/material";
import ArgonButton from "components/ArgonButton";
import ArgonSocialButton from "components/ArgonSocialButton";
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import HoverCard from "components/HoverCard";
import { useEffect, useState } from "react";


// Data

function GrantsAndProposals() {
  useEffect(() => {
    AOS.init();
  },[]);
  
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
            <ArgonTypography variant="h2">Protocol Grants and Proposals</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <div data-aos="fade-up" data-aos-duration="5000">
        <HoverCard>
          <CardContent>
            <Grid container>
              <Grid
                item
                xs={12}
                md={2}
                lg={2}
                xl={2}
                style={{ display: "flex", justifyContent: "center"}}
              >
                <img
                  src="https://i.postimg.cc/GpLgWgBX/image.png"
                  alt="placeholder"
                  style={{borderRadius: '50%', width: '150px', height: '150px', marginTop: '25px'}}
                />
              </Grid>
              <Grid item xs={12} md={10} lg={10} xl={10}>
                <Stack spacing={5} style={{marginBottom: '10px'}}>
                  <ArgonTypography variant="h1">Title</ArgonTypography>
                  <ArgonTypography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                </Stack>
                <Stack spacing={2} direction="row"> 
                    <ArgonButton varaint="h4" variant="text">
                    <LanguageIcon style={{marginRight: '5px'}}></LanguageIcon> Website
                    </ArgonButton>
                    <ArgonButton varaint="h4" variant="text">
                      <img src="https://i.postimg.cc/1td6PCMj/defi-lama-logo-freelogovectors-net.png" style={{width: '20px', width: '20px', marginRight: '5px'}}/>Defillama
                    </ArgonButton>
                    <ArgonButton varaint="h4" variant="text">
                    <TwitterIcon style={{marginRight: '5px'}}></TwitterIcon> Twitter
                    </ArgonButton>
                </Stack>
              </Grid>
            </Grid>
            <Grid container style={{marginTop: '50px'}}>
              <Grid item>
                  <div data-aos="fade-up">
                <Stack spacing={3} direction="row">
                  <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Proposals</ArgonButton>
                  <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Grants</ArgonButton>
                  <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Jobs</ArgonButton>
                </Stack>
                  </div>
              </Grid>
            </Grid>
          </CardContent>
        </HoverCard>
        </div>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default GrantsAndProposals;
