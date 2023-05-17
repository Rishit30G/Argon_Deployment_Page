import React, { useEffect } from "react";
import { Card, Grid, Icon, Avatar, Stack, CardContent } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { Heart } from "@web3uikit/icons";
import { Reply, Share } from "@mui/icons-material";
import HoverCard from "components/HoverCard";
import { makeStyles } from "@material-ui/core/styles";
import 'aos/dist/aos.css';
import AOS from 'aos';

const useStyles = makeStyles({
  
  goldenCard: {
    boxShadow: "12px 12px 30px #B721BE",
    borderRadius: "15px",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
    border: "1px solid grey",
  },
});

const Proposals = () => {
  useEffect(() => {
    AOS.init();
  },[]);
  const classes = useStyles();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={10}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <ArgonTypography variant="h2">Proposals</ArgonTypography>
          </Grid>
          <Grid item xs={12} md={7}>
            <div className={classes.goldenCard}>
              <CardContent>
                <ArgonTypography
                  variant="h5"
                  style={{
                    marginTop: "10px",
                    marginLeft: "10px",
                    fontSize: "22.3px",
                    color: "white",
                  }}
                >
                  Using this protocol? Analyze the effects of these proposals on your usability and
                  profitability.
                </ArgonTypography>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </ArgonBox>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
      <div data-aos="fade-up">
          <HoverCard>
            <CardContent>
              <Grid container xs={12} sm={12} md={12}>
                <ArgonBox style={{ marginTop: "10px" }}>
                  <Grid container justifyContent="space-between" >
                    <Grid item>
                    <Grid container spacing={2} style={{ marginBottom: "30px" }}>
                    <Grid item>
                      <Avatar
                        src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                        sx={{ width: 60, height: 60 }}
                      ></Avatar>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h1">Uniswap</ArgonTypography>
                    </Grid>
                  </Grid>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h2">
                        10th Jan 2023
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                  
                  <ArgonTypography variant="body2" style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)"}}>
                    Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices. convallis mi ut quam
                    dictum, eget rutrum ipsum ultrices. convallis mi ut quam dictum, eget rutrum
                    ipsum ultrices. convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices. convallis mi ut quam
                    dictum, eget rutrum ipsum ultrices.
                  </ArgonTypography>
                  <Stack direction="row-reverse" spacing={2} style={{ marginTop: "25px" }}>
                    <ArgonTypography variant="h4">
                      <Heart style={{ marginRight: "10px" }}></Heart> 15
                    </ArgonTypography>
                    <ArgonTypography variant="h4">
                      <Share style={{ marginRight: "10px" }}></Share> 12
                    </ArgonTypography>
                    <ArgonTypography variant="h4">
                      <Reply style={{ marginRight: "10px" }}></Reply> 5
                    </ArgonTypography>
                  </Stack>
                </ArgonBox>
              </Grid>
            </CardContent>
          </HoverCard>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div data-aos="fade-up">
          <HoverCard>
            <CardContent>
              <Grid container xs={12} sm={12} md={12}>
                <ArgonBox style={{ marginTop: "10px" }}>
                <Grid container justifyContent="space-between" >
                    <Grid item>
                    <Grid container spacing={2} style={{ marginBottom: "30px" }}>
                    <Grid item>
                      <Avatar
                        src="https://i.postimg.cc/TwXKt51X/pancakeswap-cake-logo.png"
                        sx={{ width: 60, height: 60 }}
                      ></Avatar>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h1">Pancake Swap</ArgonTypography>
                    </Grid>
                  </Grid>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h2">
                        10th Jan 2023
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                  <ArgonTypography variant="body2" style={{fontSize: '20px', color: "rgba(255, 255, 255, 0.7)" }}>
                  Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices. convallis mi ut quam
                    dictum, eget rutrum ipsum ultrices. convallis mi ut quam dictum, eget rutrum
                    ipsum ultrices. convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                    convallis mi ut quam dictum, eget rutrum ipsum ultrices. convallis mi ut quam
                    dictum, eget rutrum ipsum ultrices.
                  </ArgonTypography>
                  <Stack direction="row-reverse" spacing={2} style={{ marginTop: "25px" }}>
                    <ArgonTypography variant="h4">
                      <Heart style={{ marginRight: "10px" }}></Heart> 15
                    </ArgonTypography>
                    <ArgonTypography variant="h4">
                      <Share style={{ marginRight: "10px" }}></Share> 12
                    </ArgonTypography>
                    <ArgonTypography variant="h4">
                      <Reply style={{ marginRight: "10px" }}></Reply> 5
                    </ArgonTypography>
                  </Stack>
                </ArgonBox>
              </Grid>
            </CardContent>
          </HoverCard>
          </div>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Proposals;
