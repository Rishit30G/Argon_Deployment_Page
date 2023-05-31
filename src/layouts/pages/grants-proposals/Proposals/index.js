import React, { useEffect } from "react";
import { Card, Grid, Icon, Avatar, Stack, CardContent, FormControl, InputLabel, Select, MenuItem, TextField, Box } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { Heart } from "@web3uikit/icons";
import { Reply, Share } from "@mui/icons-material";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";
import { Fireplace } from "@material-ui/icons";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect";


const Proposals = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>

      <ArgonBox px={4} py={3}> 
          <Grid container justifyContent="space-between"> 
              <Grid item xs={12} md={12} xl={4} lg={8}>
              <ArgonInput
                  placeholder="Type here..."
                  startAdornment={<ArgonBox component="i" className="ni ni-search" mr={1} />}
                />
              </Grid> 
              <Grid item xs={12} md={12} xl={4} lg={4}>
                <Grid container spacing={3} justifyContent="space-around">
                  <Grid item xl={4}>
                    <ArgonSelect
                      placeholder="Select year"
                      options={[
                        { value: "march", label: "March" },
                        { value: "april", label: "April" },
                      ]}  
                    />
              </Grid>
                <Grid item xl={4}>
                        <ArgonSelect
                          placeholder="Select year"
                          options={[
                            { value: "march", label: "March" },
                            { value: "april", label: "April" },
                          ]}  
                        />
                </Grid>
                <Grid item xl={4}>
                        <ArgonSelect
                          placeholder="Select year"
                          options={[
                            { value: "march", label: "March" },
                            { value: "april", label: "April" },
                          ]}  
                        />
                </Grid>
              </Grid> 
              </Grid>

          </Grid>
      </ArgonBox>



      <ArgonBox px={4} py={3}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={12} xl={8} lg={8}>
            <ArgonTypography variant="h4">Proposals</ArgonTypography>
            <DefaultDivider />
          </Grid>
          <Grid item xs={12} md={12} xl={4} lg={4} >
             <Grid container spacing={3} justifyContent="space-around">
              <Grid item>
              <ArgonTypography variant="h4">Status</ArgonTypography>
              </Grid>
              <Grid item>
              <ArgonTypography variant="h4">Category</ArgonTypography>
              </Grid>
              <Grid item>
              <ArgonTypography variant="h4">Importance</ArgonTypography>
              </Grid>
            </Grid>
            <DefaultDivider />
        </Grid>
        </Grid> 
      </ArgonBox>

      <ArgonBox px={4} py={2}>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={8} lg={8} style={{ display: 'flex' }}>
            <HoverCard>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ArgonTypography variant="h2">Title</ArgonTypography>
                    <ArgonTypography variant="h4">10th Jan 2023</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item>
                      <ArgonTypography
                        variant="body2"
                        style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi convallis mi ut quam dictum,
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={4} lg={4}  style={{ display: 'flex'}}>
            <HoverCard>
              <CardContent style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Grid container spacing={4} justifyContent="space-between">
                       <Grid container item xl={4} justifyContent="center">  
                           <ArgonTypography variant="h6">Prelimniary Discussion</ArgonTypography>
                       </Grid>
                       <Grid container item xl={4} justifyContent="center"> 
                           <ArgonTypography variant="h6">Parameter Changed </ArgonTypography>
                       </Grid>
                       <Grid container item xl={4} justifyContent="center"> 
                          <ArgonButton variant="contained" color="dark">
                            
                            <Stack direction="row" spacing={1} alignItems="center"> 
                              <ion-icon name="flame-outline" style={{color: 'lightblue', fontSize: '20px'}}></ion-icon>
                              <ArgonTypography variant="h5">Low</ArgonTypography>
                            </Stack>
                          </ArgonButton>
                       </Grid>
                    </Grid>
                </CardContent>
            </HoverCard>
          </Grid>
        </Grid>

        <Grid container spacing={4} alignItems="stretch" style={{marginTop: '10px'}}>
          <Grid item xs={12} md={8} lg={8} style={{ display: 'flex' }}>
            <HoverCard>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ArgonTypography variant="h2">Title</ArgonTypography>
                    <ArgonTypography variant="h4">10th Jan 2023</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item>
                      <ArgonTypography
                        variant="body2"
                        style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi convallis mi ut quam dictum,
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
          <Grid item xs={12} md={4} lg={4}  style={{ display: 'flex'}}>
            <HoverCard>
              <CardContent style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <Grid container spacing={4} justifyContent="space-between">
                       <Grid container item xl={4} justifyContent="center">  
                           <ArgonTypography variant="h6">Prelimniary Discussion</ArgonTypography>
                       </Grid>
                       <Grid container item xl={4} justifyContent="center"> 
                           <ArgonTypography variant="h6">Parameter Changed </ArgonTypography>
                       </Grid>
                       <Grid container item xl={4} justifyContent="center"> 
                          <ArgonButton variant="contained" color="dark">
                            
                            <Stack direction="row" spacing={1} alignItems="center"> 
                              <ion-icon name="flame-outline" style={{color: 'lightblue', fontSize: '20px'}}></ion-icon>
                              <ArgonTypography variant="h5">Medium</ArgonTypography>
                            </Stack>
                          </ArgonButton>
                       </Grid>
                    </Grid>
                </CardContent>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>
    </>   
  );
};

export default Proposals;
