import React from "react";
import { Card, CardContent, Divider, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonProgress from "components/ArgonProgress";
import ReactGithubCalendar from "react-github-calendar";
import HoverCard from "components/HoverCard";

const Reputation = () => {
  return (
    <>
      <ArgonBox px={3} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Reputation</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <div style={{width: '80%'}}>
        <HoverCard>
          <CardContent>
          <ArgonBox px={3} py={3}>
            <Grid container direction="column" spacing={5}>
              <Grid item xs={12} md={3} lg={3}>
                <ArgonTypography variant="h3">Reputation Earned</ArgonTypography>
                <Grid xs={3} md={3} lg={3}>
                  <ArgonProgress value="75" variant="gradient" label />
                  <ArgonProgress value="55" variant="gradient" label />
                </Grid>
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
              <Divider/>
                <ArgonTypography variant="h3">Badges Earned by User</ArgonTypography>
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
              <Divider/>
              
                <ArgonTypography variant="h3">GitHub Contribution</ArgonTypography>
                <ReactGithubCalendar username="Rishit30G" />
              
              </Grid>
              <Grid item xs={12} md={3} lg={3}>
                <ArgonTypography variant="h3" >Web 3.0 Contribution</ArgonTypography>
                <Grid container style={{marginTop: '20px'}}>
                  <Grid item xl={6} lg={6} md={6}>
                  <HoverCard>
                      <CardContent>
                          <ArgonBox mx={3} my={3}>

                              <Grid container direction="row" spacing={2} style={{marginBottom: '12px'}}>
                                  <img src="https://picsum.photos/100/100" height="100px" width="100px" style={{borderRadius: '50%'}}/>
                                <Grid item>
                                  <ArgonTypography variant="h3"> Blockchain Developer </ArgonTypography>
                                </Grid>
                              </Grid>
                              <Grid container direction="row" spacing={2} style={{marginBottom: '13px'}}>
                                <Grid item>
                                  <ArgonTypography variant="h5">Company Name</ArgonTypography>
                                </Grid>
                                <Grid item>
                                  <ArgonTypography variant="h5">2 months</ArgonTypography>
                                </Grid>
                              </Grid>
                              <Grid container direction="column">
                                <Grid item>
                                  <ArgonTypography variant="body1">Nevada, USA (Remote)</ArgonTypography>
                                </Grid>
                                <Grid item>
                                  <ArgonTypography variant="body1">
                                    Skills: Skill1, Skill2, Skill3
                                  </ArgonTypography>
                                </Grid>
                              </Grid>
                          </ArgonBox>
                      </CardContent>
                  </HoverCard>
                  </Grid>
                </Grid>
              
              </Grid>
            </Grid>
            
          </ArgonBox>
          </CardContent>
        </HoverCard>
        </div>
      </ArgonBox>
    </>
  );
};

export default Reputation;
