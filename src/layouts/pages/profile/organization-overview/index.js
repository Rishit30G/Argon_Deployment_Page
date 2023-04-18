import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { Card, Grid, Stack } from "@mui/material";
import { ContactMail, People, Star } from "@mui/icons-material";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import { Language } from "@material-ui/icons";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

const OrganizationOverview = () => {
  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <ArgonBox px={3} py={3} sx={{ height: "40%", overflow: "hidden", marginTop: "270px" }}>
        <Grid container>
          <Grid item xs={12} md={2} lg={2} style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://via.placeholder.com/200"
              alt="placeholder"
              style={{ marginRight: "20px", borderRadius: "50%" }}
            />
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Stack spacing={3}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <ArgonTypography variant="h2">Uniswap</ArgonTypography>
              </Grid>
              <ArgonTypography variant="subtitle2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat
              </ArgonTypography>
              <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                <ArgonButton style={{ height: "40px", width: "180px", marginRight: "15px" }}>
                  <Star></Star> 4 Star Rating
                </ArgonButton>
                <ArgonButton style={{ height: "40px", width: "180px", marginRight: "15px" }}>
                  <People></People> 50-100 Size
                </ArgonButton>
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        <ArgonBox px={3} py={7}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <ArgonTypography variant="h2" fontWeight="bold">
                Job Description
              </ArgonTypography>
            </Grid>
            <Grid item>
              <ArgonTypography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat
              </ArgonTypography>
            </Grid>
            <Grid item>
              <ArgonTypography variant="body2">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </ArgonTypography>
            </Grid>
            <Grid item>
              <ArgonTypography variant="body2">
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which
                don't look even slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks as necessary, making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                Ipsum is therefore always free from repetition, injected humour, or
                non-characteristic words etc.
              </ArgonTypography>
            </Grid>
            <Grid item>
                <Stack direction="row" spacing={2}>
              <ContactMail></ContactMail>
              <ArgonTypography variant="body2" fontWeight="bold">
                Contact: uniswap@gmail.com
              </ArgonTypography>
              </Stack>
            </Grid>
            <Grid item>
                <Stack direction="row" spacing={2}>
              <Language></Language>
              <ArgonTypography variant="body2" fontWeight="bold">
                Visit Us: uniswap.com
              </ArgonTypography>
              </Stack>
            </Grid>
            <Grid item>
                <Grid container justifyContent="center">
                    <ArgonButton style={{height: '52px', width: '200px'}}>Apply Now</ArgonButton>
                </Grid>
            </Grid>
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default OrganizationOverview;
