import React from 'react';
import { CardContent, Grid, Avatar } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { Heart, ArrowDown } from "@web3uikit/icons";
import HoverCard from "components/HoverCard";
import ArgonButton from 'components/ArgonButton';

const ReplyCard = () => {
  return (
    <div style={{marginLeft: '160px'}}>
     <div data-aos="fade-up" data-aos-duration="5000">
    <HoverCard>
        <ArgonBox px={2} py={2}>
        <CardContent>
            <Grid
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
            >
            <Grid item>
                <Grid
                container
                spacing={2}
                direction="row"
                style={{ marginTop: "10px" }}
                >
                <Avatar style={{ marginRight: "10px" }}></Avatar>
                <ArgonTypography>Author Name</ArgonTypography>
                </Grid>
            </Grid>
            <Grid item>
                <ArgonTypography variant="h4">12th April</ArgonTypography>
            </Grid>
            <Grid item>
                <ArgonTypography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam tortor, eget
                aliquam nisl  nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
                tincidunt, nisl nisl aliquam tortor, eget aliquam nisl nisl sit amet
                nisl.
                </ArgonTypography>
            </Grid>
            </Grid>
            <Grid
            container
            justifyContent="space-between"
            sx={{ marginTop: "20px" }}
            alignItems="center"
            >
            <Grid item>
                <ArgonButton variant="text">
                <ArgonTypography variant="body2">
                {" "}
                <ArrowDown style={{ marginRight: "10px" }}></ArrowDown>Replies
                </ArgonTypography>
                </ArgonButton>
            </Grid>
            <Grid item>
                <ArgonTypography variant="body2" style={{ fontSize: "30px" }}>
                {" "}
                <Heart style={{ marginRight: "10px" }}></Heart>
                12
                </ArgonTypography>
            </Grid>
            </Grid>
        </CardContent>
        </ArgonBox>
    </HoverCard>
    </div>
    </div>
  )
}

export default ReplyCard