import React, { useEffect, useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout2";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";
import { Box, Card, CardContent, Grid, Stack, Tab, Tabs } from "@mui/material";
import { ContactMail, People, Star } from "@mui/icons-material";
import ArgonBadgeDot from "components/ArgonBadgeDot";
import { Language } from "@material-ui/icons";
import HoverCard from "components/HoverCard";
import { TabContext, TabList, TabPanel, } from "@material-ui/lab";
import Hackathon from "layouts/pages/organisation-overview/Hackathon";
import OrganizationJobs from "layouts/pages/organisation-overview/Organisation-Jobs";
import OrgOverview from "layouts/pages/organisation-overview/Org-Overview";
import { TwitterLogo, Globe } from "@phosphor-icons/react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/joblisting/?format=json";
const bgImage = "https://i.postimg.cc/x8jqtTDb/Untitled-design-9.png";


const OrganizationOverview = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const [value, setValue] = useState('1');
  const [post, setPost] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      const selectedPost = response.data.find((item) => item.id === Number(id));
      setPost(selectedPost);
    })
    .catch((error) => {
      //console.log(error)
    });
  }, [id]); 

  if(!post) return null;



  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.6),
            rgba(gradients.dark.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "100%",
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
                xl={1.5}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src={post.organisations.image}
                  alt="placeholder"
                  style={{
                    marginRight: "20px",
                    borderRadius: "50%",
                    height: "170px",
                    width: "170px",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={10} lg={10} xl={10.5}>
                 <Stack direction="row" spacing={3} alignItems="center"> 
                   <ArgonTypography variant="h2">{post.organisations.name}</ArgonTypography>
                    <ArgonBox>
                    <Stack direction="row" alignItems="center" style={{marginTop: '10px'}}> 
                      <a href={post.organisations.twitter_link} target="_blank">
                        <TwitterLogo size={25} color="#1DA1F2" weight="fill" style={{marginRight: '5px'}}/>
                        
                      </a>
                        <div style={{ width: '1px', height: '22px', backgroundColor: '#a6a6a6', marginBottom: '10px', marginRight: '5px'}}></div>
                      <a href={post.organisations.link} target="_blank">
                        <Globe size={25} color="#8c8c8c" style={{marginRight: '5px'}}/>
                      </a>
                      <div style={{ width: '1px', height: '22px', backgroundColor: '#a6a6a6', marginBottom: '10px', marginRight: '5px' }}></div>
                      <a href={post.organisations.defilama_link} target="_blank">
                          <img src="https://i.postimg.cc/hPXgrGBb/defi-lama-logo-freelogovectors-net.png" style={{width: '21px', height: '24px'}}/>
                      </a>
                    </Stack>
                    </ArgonBox>
                 </Stack>
                 <Stack direction="row" spacing={3} alignItems="center" style={{marginTop: '20px'}}>
                 <ArgonTypography variant="h5" style={{fontStyle: 'italic'}}>
                    {post.job_description}
                  </ArgonTypography>
                  </Stack>
                  <Stack direction="row" spacing={2} style={{marginTop: '40px'}}>
                  <ArgonButton variant="outlined" size="medium" style={{fontSize: '15px'}}> <People style={{marginRight: '10px'}}/> {post.organisations.team_size} Size</ArgonButton>
                  </Stack>
              </Grid> 
            </Grid>
          </CardContent>
        </HoverCard>

        <ArgonBox mt={3}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} TabIndicatorProps={{ style: { backgroundColor: "#222122"} }} style={{padding: '20px'}}>
                <Tab label="Overview" value="1" />
                <Tab label="Jobs" value="2" />
                <Tab label="Hackathon" value="3" />
              </Tabs>
            </Box>
            <TabPanel value="1">
              <OrgOverview desc={post.organisations.description}/>
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
