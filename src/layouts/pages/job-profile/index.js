import { ContactMail, Language } from "@mui/icons-material";
import { Grid, Card, Stack, CardContent, Divider } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";
import HoverCard from "components/HoverCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";

const JobProfile = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar/>
      <ArgonBox px={15} py={3}>
        <Stack direction="row" spacing={3} alignItems="center">
          <img
            src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png"
            alt="placeholder"
            style={{ borderRadius: "50%", height: "130px", width: "130px" }}
          />
          <ArgonTypography variant="h2">Uniswap</ArgonTypography>
        </Stack>
      </ArgonBox>

      <ArgonBox px={15} py={3}>
        <HoverCard>
          <CardContent>
            <ArgonBox px={3} py={3}>
              <Grid container direction="column" spacing={4}>
                <Grid item>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                      <ArgonTypography variant="h2" fontWeight="bold">
                        About the Job
                      </ArgonTypography>
                    </Grid>
                    <Grid item>
                      <ArgonButton style={{ height: "68px", width: "280px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Apply Now</ArgonButton>
                    </Grid>
                   </Grid>

                </Grid>
             
                    <Grid item>
                      <ArgonTypography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat
                      </ArgonTypography>
                      <ArgonTypography variant="body2">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                        the Internet tend to repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a dictionary of over 200 Latin
                        words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                        always free from repetition, injected humour, or non-characteristic words
                        etc.
                      </ArgonTypography>
                    </Grid>
                    <Divider />
                <Grid item>
                  <ArgonTypography variant="h3" style={{ marginBottom: "7px" }}>
                    Educational Qualifications
                  </ArgonTypography>
                  <ArgonTypography variant="body2">
                    B.Tech, BCA, MCA, M. Tech (Graduated in 2021, 2022).
                  </ArgonTypography>
                </Grid>
<Divider />
                <Grid item>
                  <ArgonTypography variant="h3" style={{ marginBottom: "7px" }}>
                    What are we looking for ?
                  </ArgonTypography>
                  <ArgonTypography variant="body2">
                    The primary attribute we are looking for is ATTITUDE, a willingness to learn, a
                    hunger to experiment and not be afraid to fail, be a team player and do whatever
                    is needed to make our customers use our solutions effectively. In addition to
                    the above you must possess the following competency & attributes: • Demonstrates
                    knowledge of software development techniques and fluency in software languages
                    and application programming interfaces. • Demonstrates in-depth understanding of
                    hardware/software platforms including but not limited to operating systems,
                    databases, application servers, web servers and integration technologies. •
                    Plans and executes system implementations that ensure success and minimize risk
                    of system outages or other negative production impacts.
                  </ArgonTypography>
                </Grid>
                <Divider />
                <Grid item>
                  <ArgonTypography variant="h3" style={{ marginBottom: "7px" }}>
                    How are we going to select you ?
                  </ArgonTypography>
                  <ArgonTypography variant="body2">
                    The recruitment process would include online tests and interviews. The final
                    announcement on choosing the candidates will be made at the end of the
                    recruitment process.
                  </ArgonTypography>
                </Grid>
                <Divider />
                <Grid item>
                  <Stack direction="row" style={{ marginBottom: "10px" }}>
                    <ArgonTypography variant="h3" fontWeight="bold">
                      Contact Details
                    </ArgonTypography>
                  </Stack>
                  <Stack direction="row" spacing={2}>
                    <ContactMail style={{ color: "white" }}></ContactMail>
                    <ArgonTypography variant="body2" fontWeight="bold">
                      uniswap@gmail.com
                    </ArgonTypography>
                    <Language style={{ color: "white" }}></Language>
                    <ArgonTypography variant="body2" fontWeight="bold">
                      uniswap.com
                    </ArgonTypography>
                  </Stack>
                </Grid>
                <Divider />
              </Grid>
            </ArgonBox>
          </CardContent>
        </HoverCard>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default JobProfile;
