import React from "react";
import { Avatar, Card, CardContent, Grid, Icon, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { OutlinedFlag } from "@material-ui/icons";
import ArgonButton from "components/ArgonButton";
import { ArrowUpward } from "@mui/icons-material";
import { Heart } from "@web3uikit/icons";
import HoverCard from "components/HoverCard";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";
import ArgonBadgeDot from "components/ArgonBadgeDot";
const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/grant/?format=json";

const Grants = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <ArgonBox px={4} py={3}>
        <Grid container spacing={4}>
          <Grid container item xs={12} md={12} lg={12}>
            <ArgonTypography variant="h2">
              Grants 
            </ArgonTypography>
              <DefaultDivider />
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={4} py={3}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
              <HoverCard>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid container item xs={12} sm={12} md={12} alignItems="center" style={{marginBottom: '30px'}}>
                      <Grid container justifyContent="space-between"> 
                        <Grid item> 
                         <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                            <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                            <ArgonButton variant="contained" color="dark" size="small" style={{width: '100px'}}>
                               <ArgonBadgeDot color="primary" badgeContent="Discussion" container></ArgonBadgeDot>
                            </ArgonButton>
                        </Stack>
                        </Grid>
                        <Grid item> 
                           <ArgonTypography variant="h3">10th April</ArgonTypography>
                        </Grid>
                      
                      </Grid>
                      
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                      <Grid item xs={8} lg={7} sm={9} md={9}>
                        <ArgonTypography
                          variant="body2"
                          style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Morbi convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                        <img
                          src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                          style={{
                            width: "180px",
                            height: "180px",
                            position: "absolute",
                            bottom: -20,
                            right: -20,
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
          <Grid item xs={12} md={4} lg={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
              <HoverCard>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid container item xs={12} sm={12} md={12} alignItems="center" style={{marginBottom: '30px'}}>
                      <Grid container justifyContent="space-between"> 
                        <Grid item> 
                         <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                            <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                            <ArgonButton variant="contained" color="dark" size="small" style={{width: '100px'}}>
                               <ArgonBadgeDot color="primary" badgeContent="Active" container></ArgonBadgeDot>
                            </ArgonButton>
                        </Stack>
                        </Grid>
                        <Grid item> 
                           <ArgonTypography variant="h3">10th April</ArgonTypography>
                        </Grid>
                      
                      </Grid>
                      
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                      <Grid item xs={8} lg={7} sm={9} md={9}>
                        <ArgonTypography
                          variant="body2"
                          style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Morbi convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                        <img
                          src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                          style={{
                            width: "180px",
                            height: "180px",
                            position: "absolute",
                            bottom: -20,
                            right: -20,
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
          <Grid item xs={12} md={4} lg={4}>
            <div data-aos="fade-up" data-aos-duration="5000">
              <HoverCard>
                <CardContent>
                  <Grid container spacing={4}>
                    <Grid container item xs={12} sm={12} md={12} alignItems="center" style={{marginBottom: '30px'}}>
                      <Grid container justifyContent="space-between"> 
                        <Grid item> 
                         <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                            <ArgonTypography variant="h2">Uniswap</ArgonTypography>
                            <ArgonButton variant="contained" color="dark" size="small" style={{width: '100px'}}>
                               <ArgonBadgeDot color="success" badgeContent="Successed" container></ArgonBadgeDot>
                            </ArgonButton>
                        </Stack>
                        </Grid>
                        <Grid item> 
                           <ArgonTypography variant="h3">10th April</ArgonTypography>
                        </Grid>
                      
                      </Grid>
                      
                    </Grid>
                    <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                      <Grid item xs={8} lg={7} sm={9} md={9}>
                        <ArgonTypography
                          variant="body2"
                          style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                        >
                          Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Morbi convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                        </ArgonTypography>
                      </Grid>
                      <Grid item xs={4} lg={5} sm={3} md={3} style={{ position: "relative" }}>
                        <img
                          src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                          style={{
                            width: "180px",
                            height: "180px",
                            position: "absolute",
                            bottom: -20,
                            right: -20,
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
    </>
  );
};

export default Grants;
