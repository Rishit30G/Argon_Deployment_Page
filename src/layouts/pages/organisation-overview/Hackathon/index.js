import React from "react";
import { Card, Grid, CardContent, Stack, Divider } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonBadgeDot from "components/ArgonBadgeDot";

const Hackathon = () => {
  return (
    <>
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Hackathon</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <Card sx={{ overflow: "hidden", height: "100%" }}>
          <ArgonBox px={3} py={3}>
            <CardContent>
              <Grid container spacing={3} direction="column" style={{ marginBottom: "20px" }}>
                <Grid item>
                  <ArgonTypography variant="h2">Hackathon 1</ArgonTypography>
                </Grid>
              </Grid>

              <Divider />
              <Grid container direction="row" spacing={4} style={{ marginBottom: "20px" }}>
                <Grid item>
                  <ArgonTypography variant="h5"> Start Date: 12th March 2023 </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="h5">Mode: Online</ArgonTypography>
                </Grid>
              </Grid>

              <Grid container direction="row" spacing={7} style={{ marginBottom: "20px" }}>
                <Grid item>
                  <ArgonTypography variant="h5"> End Date: 15th April 2023 </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="h5">Allowed Team Size: 1-5 people</ArgonTypography>
                </Grid>
              </Grid>
              <Divider />

              <Grid container style={{ marginBottom: "20px" }}>
                <Grid item>
                  <ArgonTypography variant="h4" style={{ marginBottom: "10px" }}>
                    Description
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s Lorem
                    Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s
                  </ArgonTypography>
                </Grid>
              </Grid>

              <Grid container direction="column">
                <Grid item>
                  <ArgonTypography variant="h4" style={{ marginBottom: "10px" }}>
                    Prizes
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="h5" style={{ marginBottom: "3px" }}>
                    1st Prize - $10000
                  </ArgonTypography>
                  <ArgonTypography variant="body2" style={{ marginBottom: "15px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s Lorem
                  </ArgonTypography>
                </Grid>
                <Grid item style={{marginTop: '10px'}}>
                  <ArgonTypography variant="h5" style={{ marginBottom: "3px" }}>
                    2nd Prize - $7500
                  </ArgonTypography>
                  <ArgonTypography variant="body2" style={{ marginBottom: "15px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s Lorem
                  </ArgonTypography>
                </Grid>
                <Grid item style={{marginTop: '10px'}}>
                  <ArgonTypography variant="h5" style={{ marginBottom: "3px" }}>
                    3rd Prize - $5000
                  </ArgonTypography>
                  <ArgonTypography variant="body2" style={{ marginBottom: "15px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s Lorem
                  </ArgonTypography>
                </Grid>
              </Grid>

              <Grid container style={{marginTop: '30px'}}> 
                <Grid item>
                  <ArgonButton style={{ height: "50px", width: "220px" }}>Register Now</ArgonButton>
                </Grid>
              </Grid>
            </CardContent>
          </ArgonBox>
        </Card>
      </ArgonBox>
    </>
  );
};

export default Hackathon;
