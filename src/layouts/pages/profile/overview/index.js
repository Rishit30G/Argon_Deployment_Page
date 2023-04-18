import React from "react";
import { Card, Grid, Icon, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { OutlinedFlag, Person, Work } from "@material-ui/icons";
import UserInfo from "layouts/pages/users/new-user/components/UserInfo";
import { ContentPaste, PersonOffOutlined } from "@mui/icons-material";

const Overview2 = () => {
  return (
    <>
      <ArgonBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Overview</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <ArgonBox my={3} mx={3}>
          <Grid container>
            <Card sx={{ overflow: "hidden", height: "100%" }}>
              <ArgonBox my={3} mx={3}>
                <Grid item>
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                      <Person style={{ fontSize: "33px", color: "white" }}></Person>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h4">Name</ArgonTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="h3">John Doe</ArgonTypography>
                </Grid>
              </ArgonBox>
              <ArgonBox my={3} mx={3}>
                <Grid item>
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                      <Work style={{ fontSize: "33px", color: "white" }}></Work>
                    </Grid>
                    <Grid item>
                      
                        <ArgonTypography variant="h4">Skills and Experience</ArgonTypography>
                      
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                <Stack>
                    <ArgonTypography variant="h5">HTML</ArgonTypography>
                    <ArgonTypography variant="h5">CSS</ArgonTypography>
                    <ArgonTypography variant="h5">JavaScript</ArgonTypography>
                    <ArgonTypography variant="h5">4+ Years Experience</ArgonTypography>
                  </Stack>
                </Grid>
              </ArgonBox>
              <ArgonBox my={3} mx={3}>
                <Grid item>
                  <Grid container direction="row" spacing={2}>
                    <Grid item>
                    <ContentPaste style={{ fontSize: "33px", color: "white" }}></ContentPaste>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h4">Miscellaneous Information</ArgonTypography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate, leo at pharetra finibus, nisi nibh commodo turpis, quis tincidunt elit elit ut magna. Sed ut ipsum enim. Sed fermentum magna quis turpis varius, ac aliquet ipsum auctor. Sed lacinia purus id nisl pharetra, nec congue sapien pulvinar</ArgonTypography>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
        </ArgonBox>
      </Grid>
    </>
  );
};

export default Overview2;
