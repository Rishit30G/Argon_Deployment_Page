import React from "react";
import { Card, Grid, Stack, CardContent, Box, Divider } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import HoverCard from "components/HoverCard";
import { Rocket } from "@web3uikit/icons";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import DefaultDivider from "components/Divider";

export const GrantCard = () => {

  return (
    <ArgonBox px={3}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={12} md={6} lg={12} xl={3}>
        <HoverCard>
            <ArgonBox my={1} mx={1}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xl={2}>
                      <ArgonTypography variant="h1">
                        12 <ArgonTypography variant="h5">Apr</ArgonTypography>
                      </ArgonTypography>
                  </Grid>

                  <Grid item xl={10}>
                      <Stack
                      style={{marginTop: '5px'}}
                    >
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="success.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 1 Completed</ArgonTypography>
                      </Box>
                        <DefaultDivider/>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="info.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 2 Starts</ArgonTypography>
                      </Box>
                        <DefaultDivider/>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="warning.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 3 Cancelled</ArgonTypography>
                      </Box> 
                      </Stack>
                  </Grid>
                </Grid>
                
              </CardContent>
            </ArgonBox>
          </HoverCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={12} xl={3}>
        <HoverCard>
            <ArgonBox my={1} mx={1}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xl={2}>
                      <ArgonTypography variant="h1">
                        12 <ArgonTypography variant="h5">Apr</ArgonTypography>
                      </ArgonTypography>
                  </Grid>

                  <Grid item xl={10}>
                      <Stack
                      style={{marginTop: '5px'}}
                    >
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="success.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 1 Completed</ArgonTypography>
                      </Box>
                        <DefaultDivider/>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="info.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 2 Starts</ArgonTypography>
                      </Box>
                        <DefaultDivider/>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="warning.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 3 Cancelled</ArgonTypography>
                      </Box> 
                      </Stack>
                  </Grid>
                </Grid>
                
              </CardContent>
            </ArgonBox>
          </HoverCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={12} xl={3}>
        <HoverCard>
            <ArgonBox my={1} mx={1}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xl={2}>
                      <ArgonTypography variant="h1">
                        12 <ArgonTypography variant="h5">Apr</ArgonTypography>
                      </ArgonTypography>
                  </Grid>

                  <Grid item xl={10}>
                      <Stack
                      style={{marginTop: '5px'}}
                    >
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="success.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 1 Completed</ArgonTypography>
                      </Box>
                        <DefaultDivider/>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="info.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 2 Starts</ArgonTypography>
                      </Box>
                        <DefaultDivider/>
                      <Box display="flex" alignItems="center">
                        <Box bgcolor="warning.main" width={8} height={24} mr={2}></Box>
                        <ArgonTypography variant="body2">Event 3 Cancelled</ArgonTypography>
                      </Box> 
                      </Stack>
                  </Grid>
                </Grid>
                
              </CardContent>
            </ArgonBox>
          </HoverCard>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={12} xl={3}>
          <HoverCard>
            <ArgonBox my={1} mx={1} >
              <CardContent>
                <Grid container justifyContent="center" alignItems="center" spacing={2}>
                  <Grid item>
                    <ArgonButton
                      style={{
                        height: "58px",
                        width: "180px",
                        fontSize: "17px",
                        fontWeight: "400",
                        backgroundColor: "black",
                        border: "1px solid #8d8d8d",
                        color: "white",
                        boxShadow: "5px 5px 10px  #B721BE",
                        marginTop: "5px",
                      }}
                    >
                      {" "}
                      Unlock for More{" "}
                    </ArgonButton>
                  </Grid>
                  <Grid container item justifyContent="center">
                    <ArgonBox my={2}>
                      <Stack direction="row" spacing={1}>
                        <ArgonTypography variant="h6" style={{ justifyContent: "center" }}>
                          Keep up with everything that's going around in Web 3.0 world
                        </ArgonTypography>
                        <ArgonTypography variant="body2" style={{ justifyContent: "center" }}>
                          <Rocket style={{ color: "#fff", fontSize: "40px" }} />
                        </ArgonTypography>
                      </Stack>
                    </ArgonBox>
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
          </HoverCard>
        </Grid>
      </Grid>
    </ArgonBox>
  );
};
