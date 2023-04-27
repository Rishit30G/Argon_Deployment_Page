import React from "react";
import { Card, CardActionArea, CardMedia, Grid, CardContent, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArticleCard from "examples/Cards/ArticleCard";
import PressReleaseCard from "examples/Cards/PressReleaseCard";

const ArticleMain = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <ArgonBox mx={3} my={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Article Main</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox> */}

      <ArgonBox mb={3} mx={3} my={6}>
        <ArgonTypography variant="h2" style={{ marginBottom: "30px" }}>
          Latest Stories
        </ArgonTypography>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={4} md={3} lg={3}>
                <ArticleCard></ArticleCard>
              </Grid>
              <Grid item xs={4} md={3} lg={3}>
                <ArticleCard></ArticleCard>
              </Grid>
              <Grid item xs={4} md={3} lg={3}>
                <ArticleCard></ArticleCard>
              </Grid>
              <Grid item xs={4} md={3} lg={3}>
                <ArticleCard></ArticleCard>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ArgonBox>
      <div
        style={{
          borderBottom: "1px solid rgba(128, 128, 128, 0.3)",
          margin: "10px 0",
          padding: "5px 0",
          width: "100%",
        }}
      ></div>
      <ArgonBox mb={3} mx={3} my={6}>
        <ArgonTypography variant="h2" style={{ marginBottom: "30px" }}>
          Press Release
        </ArgonTypography>
        <PressReleaseCard />
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ArticleMain;
