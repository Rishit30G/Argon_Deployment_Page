import React from 'react';
import { Card, Grid, Stack } from '@mui/material';
import ArgonBox from 'components/ArgonBox';
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ArgonTypography from 'components/ArgonTypography';
import ArgonButton from 'components/ArgonButton';
import HoverCard from 'components/HoverCard';

const Jobs = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <ArgonTypography variant="h2">Uniswap</ArgonTypography>
      </ArgonBox>
      <HoverCard sx={{ height: "40%", overflow: "hidden" }}>
        <ArgonBox px={3} py={3}>
          <Grid container>
            <Grid item xs={12} md={3} lg={2} style={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                alt="placeholder"
                style={{ marginRight: "20px", height: '200px', weight: '200px' }}
              />
            </Grid>
            <Grid item xs={12} md={9} lg={10}>
              <Stack spacing={3}>
                <ArgonTypography variant="h2">Algorithm Trader</ArgonTypography>
                <ArgonTypography variant="subtitle2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </ArgonTypography>
                <Stack spacing={2} direction="row">
                <ArgonButton style={{ height: "40px", width: "180px" }}>Salary</ArgonButton>
                <ArgonButton style={{ height: "40px", width: "180px" }}>Views</ArgonButton>
                <ArgonButton style={{ height: "40px", width: "180px" }}>Connect</ArgonButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </ArgonBox>
      </HoverCard>
    </DashboardLayout>
  )
}

export default Jobs