import React from "react";
import { Card, Grid, Stack, CardContent } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import HoverCard from "components/HoverCard";

export const GrantCard = () => {
  return (
    <Card>
      <ArgonBox py={3} px={3}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
            <HoverCard>
              <ArgonBox my={1} mx={1}>
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ paddingRight: "10px", paddingLeft: "10px" }}
                  >
                    <ArgonTypography variant="h2">
                      12 <ArgonTypography variant="h3">Apr</ArgonTypography>
                    </ArgonTypography>
                    <ArgonTypography variant="h3">Today</ArgonTypography>
                  </Stack>
                  <Stack
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: "35px" }}
                  >
                    <ArgonTypography variant="body2">Event 1 Started</ArgonTypography>
                    <ArgonTypography variant="body2">Event 2 Tomorrow</ArgonTypography>
                    <ArgonTypography variant="body2">Event 3 Completed</ArgonTypography>
                  </Stack>
                </CardContent>
              </ArgonBox>
            </HoverCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
            <HoverCard>
              <ArgonBox my={1} mx={1}>
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ paddingRight: "10px", paddingLeft: "10px" }}
                  >
                    <ArgonTypography variant="h2">
                      12 <ArgonTypography variant="h3">Apr</ArgonTypography>
                    </ArgonTypography>
                    <ArgonTypography variant="h3">Today</ArgonTypography>
                  </Stack>
                  <Stack
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: "35px" }}
                  >
                    <ArgonTypography variant="body2">Event 1 Started</ArgonTypography>
                    <ArgonTypography variant="body2">Event 2 Tomorrow</ArgonTypography>
                    <ArgonTypography variant="body2">Event 3 Completed</ArgonTypography>
                  </Stack>
                </CardContent>
              </ArgonBox>
            </HoverCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
            <HoverCard>
              <ArgonBox my={1} mx={1}>
                <CardContent>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    style={{ paddingRight: "10px", paddingLeft: "10px" }}
                  >
                    <ArgonTypography variant="h2">
                      12 <ArgonTypography variant="h3">Apr</ArgonTypography>
                    </ArgonTypography>
                    <ArgonTypography variant="h3">Today</ArgonTypography>
                  </Stack>
                  <Stack
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ marginTop: "35px" }}
                  >
                    <ArgonTypography variant="body2">Event 1 Started</ArgonTypography>
                    <ArgonTypography variant="body2">Event 2 Tomorrow</ArgonTypography>
                    <ArgonTypography variant="body2">Event 3 Completed</ArgonTypography>
                  </Stack>
                </CardContent>
              </ArgonBox>
            </HoverCard>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={6}>
            <HoverCard>
              <ArgonBox my={4} mx={4}>
              <CardContent>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    <Grid item>
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> Unlock for More </ArgonButton>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="body2">
                        KEEP UP WITH EVERYTHING GOING ON IN WEB 3.0 AND NEVER MISS ANY UPDATES,
                        CHECK OUT NOW
                      </ArgonTypography>
                    </Grid>
                  </Grid>
              </CardContent>
              </ArgonBox>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
};
