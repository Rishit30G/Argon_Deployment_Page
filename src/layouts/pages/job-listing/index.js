import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Grid from "@material-ui/core/Grid";
import { CardContent, CardHeader, Card } from "@mui/material";
import { Avatar } from "@mui/material";

const JobListing = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3} px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Job Listing Page</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <Card style={{ height: "300px", width: "300px", position: "relative", overflow: "visible" }}>
        <CardContent>
          <ArgonTypography variant="h3">Uniswap</ArgonTypography>
          <ArgonTypography variant="h4">Etherium Tracker</ArgonTypography>
          <Avatar
            alt="John Doe"
            src="https://picsum.photos/200/200"
            style={{
              width: "150px",
              height: "150px",
              position: "absolute",
              top: "-75",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "1",
              marginTop: '15px'
            }}
          />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default JobListing;
