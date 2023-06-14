import React from "react";
import { Card, CardContent, Divider, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import HoverCard from "components/HoverCard";
import { Clock, Eye } from "@phosphor-icons/react";

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
            <HoverCard>
            <ArgonBox px={4} py={4}>
              <CardContent>
                <Grid container direction="column" spacing={3}>
                  <Grid item> 
                  <Grid container justifyContent="space-between"> 
                  <Grid item>
                     <ArgonTypography variant="h3">Blockchain Developer</ArgonTypography>
                  </Grid>
                  <Grid item> 
                      <Stack direction="row" spacing={4}>
                      <Stack direction="row" justifyContent="center" spacing={1}>
                        <Clock size={28} color="#f5f5f5"/>
                        <ArgonTypography variant="h4">12 Days Left</ArgonTypography>
                        
                      </Stack> 
                      <ArgonBox>
                      <div style={{ width: '1px', height: '100%', backgroundColor: '#a6a6a6' }}></div>
                      </ArgonBox>
                      <Stack direction="row" justifyContent="center" spacing={1}>
                        <Eye size={28} color="#f5f5f5"/>
                        <ArgonTypography variant="h4">234 Impressions</ArgonTypography> 
                      </Stack>
                      </Stack>
                  </Grid>
                  </Grid>
                  </Grid>
                  <Grid item> 
                  <ArgonTypography variant="body2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s
                  </ArgonTypography>
                  </Grid>
                  <Grid item> 
                  <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> Read More </ArgonButton>
                  </Grid>
                </Grid>
              </CardContent>
            </ArgonBox>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>
    </>
  );
};

export default OrganizationJobs;
