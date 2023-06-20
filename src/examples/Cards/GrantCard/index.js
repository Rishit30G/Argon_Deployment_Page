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
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
        <HoverCard>
            <ArgonBox my={1} mx={1}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item lg={12} sm={12} md={12} xs={12} xl={3}>
                    <Stack> 
                      <ArgonTypography variant="h1">12</ArgonTypography>
                      <ArgonTypography variant="h5">Apr</ArgonTypography>
                     </Stack>
                  </Grid>

                  <Grid item lg={12} sm={12} md={12} xs={12} xl={9}>
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
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
        <HoverCard>
            <ArgonBox my={1} mx={1}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item lg={12} sm={12} md={12} xs={12} xl={3}>
                    <Stack> 
                      <ArgonTypography variant="h1">12</ArgonTypography>
                      <ArgonTypography variant="h5">Apr</ArgonTypography>
                     </Stack>
                  </Grid>

                  <Grid item lg={12} sm={12} md={12} xs={12} xl={9}>
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
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
        <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backdropFilter: 'blur(8px)', /* Apply a blur effect to the background */
            zIndex: -1,
          }}
        ></div>
        <HoverCard>
            <ArgonBox my={1} mx={1}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item lg={12} sm={12} md={12} xs={12} xl={3}>
                    <Stack> 
                      <ArgonTypography variant="h1">12</ArgonTypography>
                      <ArgonTypography variant="h5">Apr</ArgonTypography>
                     </Stack>
                  </Grid>

                  <Grid item lg={12} sm={12} md={12} xs={12} xl={9}>
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
</div>

        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
          <Card style={{  background: 'rgba(33, 37, 41, 0.7)', /* Set a semi-transparent background color */
  border: '1px solid #7B848D',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', /* Add a subtle shadow */ }}>
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
                    <ArgonBox mx={1}>
                        <ArgonTypography variant="body2" style={{ justifyContent: "center", fontSize: '18px'}}>
                          Keep up with everything that's going around in Web 3.0 world
                        </ArgonTypography>
                    </ArgonBox>
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
          </Card>
        </Grid>
      </Grid>
    </ArgonBox>
  );
};
