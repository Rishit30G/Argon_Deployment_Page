import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { Box, Card, CardContent, Grid, Stack, Tab } from "@mui/material";
import { ContactMail, People, Star } from "@mui/icons-material";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import { Language } from "@material-ui/icons";
import HoverCard from "components/HoverCard";
import { TabContext, TabList, TabPanel} from "@material-ui/lab";
import Hackathon from "layouts/pages/organisation-overview/Hackathon";
import OrganizationJobs from "layouts/pages/organisation-overview/Organisation-Jobs";
import OrgOverview from "layouts/pages/organisation-overview/Org-Overview";


const bgImage = "https://picsum.photos/2500/500?grayscale";

const OrganizationOverview = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <ArgonBox px={3} py={3} sx={{ marginTop: "170px" }}>
        <HoverCard>
          <CardContent style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={2}
                lg={2}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
                  alt="placeholder"
                  style={{
                    marginRight: "20px",
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                  }}
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
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
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
          </CardContent>
        </HoverCard>

        <ArgonBox px={3} py={7}>
          <Card>
            <CardContent>
              <Grid container direction="column" spacing={3}>
                <Grid item>
                  <ArgonTypography variant="h2" fontWeight="bold">
                    Job Description
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body2">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                    of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from repetition, injected
                    humour, or non-characteristic words etc.
                  </ArgonTypography>
                </Grid>
                <Grid item>
                  <ArgonTypography variant="body2">
                    There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words
                    which don't look even slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                    middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on the
                    Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                    of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum is therefore always free from repetition, injected
                    humour, or non-characteristic words etc.
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
                    <ArgonButton style={{ height: "52px", width: "200px" }}>Apply Now</ArgonButton>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </ArgonBox>
        <ArgonBox mt={3}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="Overview" value="1" />
                <Tab label="Jobs" value="2" />
                <Tab label="Hackathon" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <OrgOverview />
            </TabPanel>
            <TabPanel value="2">
              <OrganizationJobs/>
            </TabPanel>
            <TabPanel value="3">
              <Hackathon />
            </TabPanel>
          </TabContext>
        </ArgonBox>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default OrganizationOverview;
