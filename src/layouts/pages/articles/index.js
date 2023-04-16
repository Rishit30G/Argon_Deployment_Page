import React from "react";
import { Grid , Stack} from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const Articles = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3} px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Article</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox mb={3} px={3} py={3}>
        <Grid container direction="column" spacing={4}>
          <Grid item xs={12} md={4} lg={4}>
            <ArgonTypography variant="h2" fontWeight="bold">
              Staked ETH Withdrawals Were Activated in Major Upgrade
            </ArgonTypography>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Stack spacing={3} direction="row">
            <ArgonTypography variant="h5">
                John Doe
            </ArgonTypography>
            <ArgonTypography variant="subtitle2">
                19 hours ago
            </ArgonTypography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <img
                src="https://picsum.photos/400/400"
                alt="placeholder"
                style={{ marginLeft: '425px'}}
             />
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Grid container sx={{width: '1450px'}}>
            <ArgonTypography variant="body4" style={{marginBottom: '50px'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </ArgonTypography>
            
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default Articles;
