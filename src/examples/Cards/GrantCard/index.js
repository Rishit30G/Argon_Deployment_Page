import React from "react";
import { Card, Grid, Stack, CardContent } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

export const GrantCard = () => {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <ArgonBox py={3} px={3}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={3}>
            <Card style={{ backgroundColor: "#1c2959" }}>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ paddingRight: "10px", paddingLeft: "10px" }}
                >
                  <ArgonTypography variant="h3">
                    12 <ArgonTypography variant="h5">Apr</ArgonTypography>
                  </ArgonTypography>
                  <ArgonTypography variant="h5">Today</ArgonTypography>
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
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card style={{ backgroundColor: "#1c2959" }}>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ paddingRight: "10px", paddingLeft: "10px" }}
                >
                  <ArgonTypography variant="h3">
                    12 <ArgonTypography variant="h5">Apr</ArgonTypography>
                  </ArgonTypography>
                  <ArgonTypography variant="h5">Today</ArgonTypography>
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
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card style={{ backgroundColor: "#1c2959" }}>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  style={{ paddingRight: "10px", paddingLeft: "10px" }}
                >
                  <ArgonTypography variant="h3">
                    12 <ArgonTypography variant="h5">Apr</ArgonTypography>
                  </ArgonTypography>
                  <ArgonTypography variant="h5">Today</ArgonTypography>
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
            </Card>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Card style={{ backgroundColor: "#1c2959", backdropFilter: "blur(10px)",  WebkitBackdropFilter: "blur(10px)"}}>
              <CardContent>
                <Grid container justifyContent="center" alignItems="center" spacing={3} style={{ paddingRight: "10px", paddingLeft: "10px"}}>
                  <Grid item>
                    <ArgonButton>Unlock for More</ArgonButton>
                  </Grid>
                  <Grid item>
                    <ArgonTypography variant="body2">
                      KEEP UP WITH EVERYTHING GOING ON IN WEB 3.0 AND NEVER MISS ANY UPDATES, CHECK
                      OUT NOW
                    </ArgonTypography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
    </Card>
  );
};
