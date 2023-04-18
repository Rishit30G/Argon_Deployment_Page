import React from "react";
import { Grid, Stack, Card } from "@mui/material";
import ArgonTypography from "components/ArgonTypography";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonButton from "components/ArgonButton";

const NewDAOProtocol = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
            <ArgonTypography variant="h2">New DAO Protocols</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            <ArgonButton style={{ height: "57px", width: "220px" }}>Partners</ArgonButton>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={3}>
              <ArgonButton style={{ height: "57px", width: "220px" }}>+ New Project</ArgonButton>
              <ArgonButton style={{ height: "57px", width: "220px" }}>+ New Proposal</ArgonButton>
            </Stack>
          </Grid>
        </Grid>

        <Grid container style={{marginTop: '20px'}} spacing={3}>
          <Grid item>
            <Card>
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    xl={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      style={{ marginRight: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9} xl={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Title</ArgonTypography>
                      <ArgonTypography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat 
                      </ArgonTypography>
                      <ArgonButton style={{ height: "40px", width: "180px" }}>Check Proposal</ArgonButton>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
          <Grid item>
             <Card>
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    xl={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      style={{ marginRight: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9} xl={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Title</ArgonTypography>
                      <ArgonTypography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat 
                      </ArgonTypography>
                      <ArgonButton style={{ height: "40px", width: "180px" }}>Check Proposal</ArgonButton>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default NewDAOProtocol;
