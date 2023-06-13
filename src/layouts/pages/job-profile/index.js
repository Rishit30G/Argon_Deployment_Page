import { ContactMail, Language } from "@mui/icons-material";
import { Grid, Card, Stack, CardContent, Divider } from "@mui/material";
import { Briefcase, MapPin, User } from "@phosphor-icons/react";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";
import DefaultDivider from "components/Divider";
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
              <Grid container spacing={6}>
                <Grid item xl={10}>
                    <Grid container direction="column" spacing={4}>
                    <Grid item>
                      <Grid container alignItems="center">
                        <Grid item>
                          <ArgonTypography variant="h2" fontWeight="bold">
                            About the Job
                          </ArgonTypography>
                        </Grid>
                      </Grid>

                    </Grid>
                
                        <Grid item>
                          <ArgonTypography variant="body2" style={{color: '#a7a7a7'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat
                          </ArgonTypography>
                          <ArgonTypography variant="body2" style={{color: '#a7a7a7'}}>
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
                      <ArgonTypography variant="h3" style={{ marginBottom: "7px"}}>
                        Educational Qualifications
                      </ArgonTypography>
                      <ArgonTypography variant="body2" style={{color: '#a7a7a7'}}>
                        B.Tech, BCA, MCA, M. Tech (Graduated in 2021, 2022).
                      </ArgonTypography>
                    </Grid>
                    <Divider />
                    <Grid item>
                      <ArgonTypography variant="h3" style={{ marginBottom: "7px" }}>
                        What are we looking for ?
                      </ArgonTypography>
                      <ArgonTypography variant="body2" style={{color: '#a7a7a7'}}>
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
                      <ArgonTypography variant="body2" style={{color: '#a7a7a7'}}>
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
                      <Stack direction="row" spacing={2} alignItems="center" >
                        <ContactMail style={{ color: "white" }}></ContactMail>
                        <ArgonTypography variant="body2" fontWeight="bold" style={{color: '#a7a7a7'}}>
                          uniswap@gmail.com
                        </ArgonTypography>
                        <Language style={{ color: "white" }}></Language>
                        <ArgonTypography variant="body2" fontWeight="bold" style={{color: '#a7a7a7'}}>
                          uniswap.com
                        </ArgonTypography>
                      </Stack>
                    </Grid>
                    <Divider />
                    </Grid>
                </Grid>
                <Grid container item xl={2} justifyContent="space-between" direction="column" alignItems="center">
                    <Grid item >
                        <Grid container justifyContent="center" style={{marginBottom: '20px'}}>
                          <Grid item>
                            <ArgonButton variant="outlined" style={{marginBottom: '10px', fontSize: '20px', borderRadius: '20px', height: '60px', width: '240px'}}> Apply Now </ArgonButton>
                          </Grid>
            
                          <Grid item style={{justifyContent: "center"}}> 
                          <Stack spacing={1}>
                            <ArgonTypography variant="h5" fontWeight="bold" style={{ marginTop: "20px", color: '#a7a7a7' }}>
                              <MapPin></MapPin> Location
                              </ArgonTypography>
                              <ArgonTypography variant="h4" fontWeight="bold"> 
                              Bangalore, India
                              </ArgonTypography>
                              <DefaultDivider/>
                      </Stack>
                      <Stack style={{marginTop: '20px'}} spacing={1}> 
                            <ArgonTypography variant="h5" fontWeight="bold" style={{ color: '#a7a7a7' }}>
                              <Briefcase></Briefcase> Job Type
                              </ArgonTypography>
                              <ArgonTypography variant="h4" fontWeight="bold"> 
                              Full Time
                              </ArgonTypography>
                              <DefaultDivider/>
                      </Stack>
                      <Stack style={{marginTop: '20px'}} spacing={1}>
                            <ArgonTypography variant="h5" fontWeight="bold" style={{ color: '#a7a7a7' }}>
                            <User></User> Role
                              </ArgonTypography>
                              <ArgonTypography variant="h4" fontWeight="bold"> 
                              Engineering
                              </ArgonTypography>
                      <DefaultDivider/> 

                      </Stack>
                          </Grid>
                        
                        </Grid>
                    </Grid>
                    <Grid item> 
                       <img src="https://i.postimg.cc/4dkvfGYL/Final-Logo-Concept-Dice-2-Extended.png" height= '100px'  width='100px' /> 
                    </Grid>
              </Grid>
              </Grid>
            </ArgonBox>
          </CardContent>
        </HoverCard>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default JobProfile;
