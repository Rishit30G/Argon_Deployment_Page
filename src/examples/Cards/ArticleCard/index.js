import React from "react";

import { Card, CardActionArea, CardMedia, Grid, CardContent, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

const ArticleCard = () => {
  return (
    <Card sx={{ maxWidth: 455, maxHeight: 600 }}>
      <CardActionArea>
        <CardMedia component="img" image="https://picsum.photos/420/260"/>
        <CardContent>
          <ArgonTypography variant="h4" style={{ marginTop: "30px", marginBottom: "20px" }}>
            ETH Stakers are Withdrawing Rewards, Not Principal
          </ArgonTypography>
          <Stack direction="row" spacing={2}>
            <ArgonTypography variant="body1">Aleksandar Gilbert</ArgonTypography>
            <ArgonTypography variant="body1">4 hrs ago</ArgonTypography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ArticleCard;
