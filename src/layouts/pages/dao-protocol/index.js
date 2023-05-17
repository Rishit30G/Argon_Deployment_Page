import React, { useEffect } from "react";
import { Grid, Stack, Card } from "@mui/material";
import ArgonTypography from "components/ArgonTypography";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonButton from "components/ArgonButton";
import HoverCard from "components/HoverCard";
import 'aos/dist/aos.css';
import AOS from 'aos';

const NewDAOProtocol = () => {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
            <ArgonTypography variant="h2">New DAO Protocols</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item>
            <div data-aos="fade-up" data-aos-duration="5000">
          <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}>Partners</ArgonButton>
            </div> 
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={3}>
              <div data-aos="fade-up" data-aos-duration="5000">
            <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> + New Project</ArgonButton>
              </div>
              <div data-aos="fade-up" data-aos-duration="5000">
            <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> + New Proposals</ArgonButton>
              </div>
            </Stack>
          </Grid>
        </Grid>

<ArgonBox px={3} py={3}>
        <Grid container style={{marginTop: '20px'}} spacing={3}>
          <Grid item xs={12} xl={6} lg={12} md={12} sm={12}>
            <HoverCard>
            <div data-aos="fade-up" data-aos-duration="5000">
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    xl={3}
                    style={{justifyContent: "center" }}
                  >
                    <img
                      src="https://picsum.photos/200/200"
                      alt="placeholder"
                      style={{ marginRight: "20px",  borderRadius: '50%'}}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9} xl={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h1">Title</ArgonTypography>
                      <ArgonTypography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat 
                      </ArgonTypography>
                      <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> Check Proposal </ArgonButton>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </div>
            </HoverCard>
          </Grid>
          <Grid item xs={12} xl={6} lg={12} md={12} sm={12}>
            <HoverCard>
            <div data-aos="fade-up" data-aos-duration="5000">
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    xl={3}
                    style={{ justifyContent: "center" }}
                  >
                    <img
                      src="https://picsum.photos/200/200"
                      alt="placeholder"
                      style={{ marginRight: "20px", borderRadius: '50%' }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9} xl={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h1">Title</ArgonTypography>
                      <ArgonTypography variant="body2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat 
                      </ArgonTypography>
                      <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> Check Proposal </ArgonButton>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </div>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default NewDAOProtocol;


