import { CardContent, CardMedia, Grid, Stack } from "@mui/material";
import ArgonBadge from "components/ArgonBadge";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import ArgonTypography from "components/ArgonTypography";
import DefaultDivider from "components/Divider";
import HoverCard from "components/HoverCard";
import DefiAnalysisCard from "examples/Cards/DefiAnalysisCard";
import PressReleaseCard from "examples/Cards/PressReleaseCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

const DefiAnalysis = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Latest Happenings</ArgonTypography>
          </Grid>
        </Grid>
        <DefaultDivider />
      </ArgonBox>

      <ArgonBox px={15} py={3}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6} lg={8} xl={8}>
          <HoverCard>
  <ArgonBox px={2} py={2}>
    <CardContent>
      <Grid container spacing={5}> 
        <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
          <CardMedia
            component="img"
            image = " https://picsum.photos/700/400"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "300px",
              objectFit: "cover"
            }}
            >
          </CardMedia>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={7}>
          <ArgonBox> 
            <Stack direction="column" spacing={1}>
              <ArgonBadge badgeContent="Python" variant="contained" color="dark" container />
              <ArgonTypography variant="h2">DAI Mostly Centralized Even After Halving USDC Exposure</ArgonTypography>
            </Stack>
          </ArgonBox>
          <ArgonBox mt={2}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <ArgonTypography variant="h5" style={{color: 'grey'}}>Samuel Haig</ArgonTypography>
              <ArgonTypography variant="body2" style={{color: 'grey'}}>• 2 hours ago</ArgonTypography>
            </Stack>
          </ArgonBox>
          <ArgonBox mt={2}>
            <ArgonTypography variant="body2" style={{color: "#B2B2B2"}}>The lion's share of MakerDAO's stablecoin is backed by centralized stablecoins and real-world assets.</ArgonTypography>
          </ArgonBox>
        </Grid>
      </Grid>
    </CardContent>
  </ArgonBox>
</HoverCard>

          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
             <HoverCard> 
              <CardContent> 
                <ArgonBox px={2} py={2}>
                    <Grid container direction="row" spacing={4}>
                        <Grid item> 
                           <ArgonTypography variant="h1">Subscribe to the best Newsletter</ArgonTypography>
                        </Grid>
                        <Grid item> 
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <ArgonInput placeholder="Email Address" />
                            <ArgonButton variant="contained" color="primary">Subscribe</ArgonButton>
                          </Stack>
                        </Grid>
                    </Grid> 
                </ArgonBox>
              </CardContent>
             </HoverCard>

          </Grid>
        </Grid>
        </ArgonBox>

        <ArgonBox mt={5} px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8} xl={8}>
          <DefaultDivider/>
          <ArgonTypography variant="h2" style={{marginBottom: '20px'}}>Latest Articles</ArgonTypography>
            <DefiAnalysisCard/>
          </Grid> 
          <Grid item xs={12} md={6} lg={4} xl={4}>
          <DefaultDivider/>
          <ArgonTypography variant="h2" style={{marginBottom: '20px'}}>Trending Posts</ArgonTypography>
            <HoverCard> 
              <CardContent>
                <ArgonBox px={2} py={2}>
                    
                        <ArgonBox mt={2}>
                      <Stack spacing={2}>
                        <HoverCard> 
                          <CardContent> 
                            <ArgonBox px={1} py={1}>
                                <Grid container>
                                  <Grid container item xs={12} md={3} lg={5} xl={5} >
                                  <CardMedia
                                      component="img"
                                      image = "https://picsum.photos/150/150"
                                      style={{
                                        objectFit: 'cover', 
                                        maxHeight: '100%', 
                                        maxWidth: '100%',
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto' 
                                      }}
                                      ></CardMedia>
                                  </Grid>
                                  <Grid item xs={12} md={9} lg={7} xl={7}>
                                    <ArgonBadge badgeContent="Defi News" variant="contained" color="dark" container />
                                    <ArgonTypography variant="h5">DAI Mostly Centralized Even After Halving USDC Exposure</ArgonTypography>
                                    <ArgonTypography variant="body2" style={{color: 'grey'}}>Samuel Haig</ArgonTypography>
                                </Grid>
                                </Grid>
                              </ArgonBox>
                          </CardContent>
                        </HoverCard>
                        <HoverCard> 
                          <CardContent> 
                            <ArgonBox px={1} py={1}>
                                <Grid container>
                                  <Grid container item xs={12} md={3} lg={5} xl={5} >
                                    <CardMedia
                                      component="img"
                                      image = "https://picsum.photos/150/150"
                                      style={{
                                        objectFit: 'cover', 
                                        maxHeight: '100%', 
                                        maxWidth: '100%',
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto' 
                                      }}
                                      ></CardMedia>
                                  </Grid>
                                  <Grid item xs={12} md={9} lg={7} xl={7}>
                                    <ArgonBadge badgeContent="Defi News" variant="contained" color="dark" container />
                                    <ArgonTypography variant="h5">DAI Mostly Centralized Even After Halving USDC Exposure</ArgonTypography>
                                    <ArgonTypography variant="body2" style={{color: 'grey'}}>Samuel Haig</ArgonTypography>
                                </Grid>
                                </Grid>
                              </ArgonBox>
                          </CardContent>
                        </HoverCard>
                        <HoverCard> 
                          <CardContent> 
                            <ArgonBox px={1} py={1}>
                                <Grid container>
                                  <Grid container item xs={12} md={3} lg={5} xl={5} >
                                  <CardMedia
                                      component="img"
                                      image = "https://picsum.photos/150/150"
                                      style={{
                                        objectFit: 'cover', 
                                        maxHeight: '100%', 
                                        maxWidth: '100%',
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto' 
                                      }}
                                      ></CardMedia>
                                  </Grid>
                                  <Grid item xs={12} md={9} lg={7} xl={7}>
                                    <ArgonBadge badgeContent="Defi News" variant="contained" color="dark" container />
                                    <ArgonTypography variant="h5">DAI Mostly Centralized Even After Halving USDC Exposure</ArgonTypography>
                                    <ArgonTypography variant="body2" style={{color: 'grey'}}>Samuel Haig</ArgonTypography>
                                </Grid>
                                </Grid>
                              </ArgonBox>
                          </CardContent>
                        </HoverCard>
                      </Stack> 
                       </ArgonBox> 
                 </ArgonBox>
                </CardContent> 
            </HoverCard>
          </Grid> 
        </Grid> 

      </ArgonBox>
    </DashboardLayout>
  );
};

export default DefiAnalysis;
