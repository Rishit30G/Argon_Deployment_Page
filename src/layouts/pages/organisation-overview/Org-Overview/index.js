import { Card, CardContent, Grid } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import HoverCard from "components/HoverCard";
import React from "react";

const OrgOverview = (props) => {

  const {desc} = props;

  return (
    <>
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Overview</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <HoverCard>
          <ArgonBox px={3} py={3}>
            <CardContent>
              <Grid container>
                <Grid item>
                  <ArgonTypography variant="body2">
                    {desc}
                  </ArgonTypography>
                </Grid>
              </Grid>
            </CardContent>
          </ArgonBox>
        </HoverCard>
      </ArgonBox>
    </>
  );
};

export default OrgOverview;
