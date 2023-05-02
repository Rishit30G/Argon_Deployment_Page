import React from "react";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

const OrganizationJobs = () => {
  return (
    <>
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Jobs</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <Grid container>
          <Grid item>
            <Card sx={{ overflow: "hidden", height: "100%" }}>
            <ArgonBox px={4} py={4}>
              <CardContent>
                <Stack spacing={3}>
                  <ArgonTypography variant="h3">Blockchain Developer</ArgonTypography>
                  <ArgonTypography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s
                  </ArgonTypography>
                  <ArgonButton style={{height: '30px', width: '180px'}}>
                    Read More
                  </ArgonButton>
                </Stack>
              </CardContent>
            </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
    </>
  );
};

export default OrganizationJobs;
