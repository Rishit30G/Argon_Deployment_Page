import { Grid } from '@mui/material'
import ArgonBox from 'components/ArgonBox'
import ArgonTypography from 'components/ArgonTypography'
import DefaultDivider from 'components/Divider'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'

const DefiAnalysis = () => {
  return (
    <DashboardLayout>
        <DashboardNavbar/>
        <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Defi Analysis</ArgonTypography>
          </Grid>
        </Grid>
        <DefaultDivider/>
      </ArgonBox>
    </DashboardLayout>
  )
}

export default DefiAnalysis