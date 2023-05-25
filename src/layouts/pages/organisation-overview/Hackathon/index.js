import React from "react";
import { Card, Grid, CardContent, Stack, Divider } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import { Calendar } from "@web3uikit/icons";
import { Language } from "@material-ui/icons";
import { People } from "@mui/icons-material";

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
        <Card>
            <CardContent>
          <ArgonBox px={3} py={3}>
              <Grid container spacing={3} alignItems="center" justifyContent="space-between" style={{ marginBottom: "20px" }}>
                <Grid item>
                  <ArgonTypography variant="h2">Hackathon 1</ArgonTypography>
                </Grid>
                <Grid item> 
                  <ArgonButton style={{ height: "58px", width: "220px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> Register Here</ArgonButton>
                </Grid>
              </Grid>

              <Divider />
              <Grid container direction="row" spacing={7} style={{ marginBottom: "20px" }}>
                <Grid item>
                  <ArgonTypography variant="h5" style={{color: 'grey'}}><Calendar/> Start Date</ArgonTypography>
                  <ArgonTypography variant="h4">12th March 2023</ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="h5" style={{color: 'grey'}}><Language/> Mode</ArgonTypography>
                  <ArgonTypography variant="h4">Online</ArgonTypography>
                </Grid>
              </Grid>

              <Grid container direction="row" spacing={7} style={{ marginBottom: "30px" }}>
                <Grid item>
                <ArgonTypography variant="h5" style={{color: 'grey'}}><Calendar/> End Date</ArgonTypography>
                  <ArgonTypography variant="h4">15th March 2023</ArgonTypography>
                  
                </Grid>
                <Grid item>
                  <ArgonTypography variant="h5" style={{color: 'grey'}}> <People/> Allowed Team Size</ArgonTypography>
                  <ArgonTypography variant="h4">1-5 people</ArgonTypography>
                </Grid>
              </Grid>
              <Divider />
             

              <Grid container style={{ marginBottom: "30px" }}>
                <Grid item>
                  <ArgonTypography variant="h3" style={{ marginBottom: "10px" }}>
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

             <Divider/>
              <Grid container direction="column">
                <Grid item>
                  <ArgonTypography variant="h3" style={{ marginBottom: "10px" }}>
                    Prizes
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="h5" style={{ marginBottom: "3px" }}>
                    1st Prize
                  </ArgonTypography>
                  <ArgonTypography variant="h2" style={{ marginBottom: "3px" }}>
                     $10000
                  </ArgonTypography>
                  <ArgonTypography variant="body2" style={{ marginBottom: "15px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s Lorem
                  </ArgonTypography>
                </Grid>
                <Grid item style={{marginTop: '10px'}}>
                <ArgonTypography variant="h5" style={{ marginBottom: "3px" }}>
                    2nd Prize
                  </ArgonTypography>
                  <ArgonTypography variant="h3" style={{ marginBottom: "3px" }}>
                     $7500
                  </ArgonTypography>
                  <ArgonTypography variant="body2" style={{ marginBottom: "15px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s Lorem
                  </ArgonTypography>
                </Grid>
                <Grid item style={{marginTop: '10px'}}>
                <ArgonTypography variant="h5" style={{ marginBottom: "3px" }}>
                    3rd Prize
                  </ArgonTypography>
                  <ArgonTypography variant="h4" style={{ marginBottom: "3px" }}>
                     $5000
                  </ArgonTypography>
                  <ArgonTypography variant="body2" style={{ marginBottom: "15px" }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s Lorem
                  </ArgonTypography>
                </Grid>
              </Grid>
          </ArgonBox>
        </CardContent>
        </Card>
      </ArgonBox>
    </>
  );
};

export default Hackathon;
