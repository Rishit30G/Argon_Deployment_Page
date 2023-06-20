import { Avatar, Card, CardContent, Grid, Stack, TextField } from "@mui/material";
import { ArrowDown, Heart } from "@web3uikit/icons";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import ArgonAvatar from "components/ArgonAvatar";
import DefaultDivider from "components/Divider";
import HoverCard from "components/HoverCard";
import { LanguageOutlined, Share } from "@mui/icons-material";
import axios from "axios";



const markdownIt = require("markdown-it");

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/article/?format=json";

const ProposalDiscussion = () => {
  React.useEffect(() => {
    AOS.init();
  },[]);

  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        // console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, []);

  if (!post) return null;

  const md = new markdownIt();
  const html = md.render(post[0].article_desc);

  const handleButtonClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Proposal Discussion</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox> */}

      <ArgonBox mb={3} px={20} py={3}>
        <Card style={{boxShadow: '0px 0px 80px purple', backgroundColor: "#222122"}}> 
          <CardContent>
            <ArgonBox px={3} py={3}>
          <Grid container spacing={3} direction="column">
          <Grid item>
            <ArgonTypography variant="h1" style={{ fontSize: "50px"}}>
              Growth Experiment: Bored Town NFT Art Community
            </ArgonTypography>
            <DefaultDivider/>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item> 
                  <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar></Avatar>
                    <ArgonTypography variant="h4">Author Name</ArgonTypography>
                  </Stack>
              </Grid>
              <Grid item> 
                  <Stack direction="row" spacing={3} alignItems="center">
                        <ArgonButton variant="outlined" style={{marginRight: '10px', marginTop: '10px'}} onClick={handleButtonClick}>  
                            <LanguageOutlined style={{marginRight: '10px'}}/> 
                            <ArgonTypography variant="h4">  Forum Discussion  </ArgonTypography> 
                         </ArgonButton>
                       <Share style={{color: 'white', fontSize: '40px', marginRight: '10px'}}/>
                  </Stack>
              </Grid>


            </Grid>

          </Grid>
          <Card style={{ marginTop: "30px", backgroundColor: "#3E3D3E", marginLeft: '20px' }}>
            <ArgonBox px={17} py={5}>
            <CardContent>
                      <Grid container direction="column" justifyContainer="center"  alignItems="center" spacing={2} >
                          <Grid item xs={12} md={12} lg={12}>
                            <div data-aos="fade-up" data-aos-duration="5000">
                              <img src="https://picsum.photos/1300/700" 
                              alt="article"
                              style={{ width: "100%", height: "auto", borderRadius: '14px' }}/>
                            </div>
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                            <div data-aos="fade-up" data-aos-duration="5000">
                            <ArgonTypography style={{ marginBottom: "50px" }}>
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                              </ArgonTypography>
                            </div> 
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                             <div data-aos="fade-up" data-aos-duration="5000">
                              <img src="https://picsum.photos/700/400" 
                              alt="article"
                              style={{ width: "100%", height: "auto", borderRadius: '14px' }}/>
                            </div>
                          </Grid>
                          <Grid item xs={12} md={12} lg={12}>
                            <div data-aos="fade-up" data-aos-duration="5000">
                            <ArgonTypography style={{ marginBottom: "50px" }}>
                                <div dangerouslySetInnerHTML={{ __html: html }} />
                              </ArgonTypography>
                            </div> 
                          </Grid>
                        </Grid>
              </CardContent>
              </ArgonBox>
          </Card>
        </Grid>
        </ArgonBox>
          </CardContent>
        </Card>
        
      </ArgonBox>
        
      <ArgonBox px={15} py={2}>
      <DefaultDivider/>
        <ArgonTypography variant="h2" fontWeight="bold" style={{marginTop: '20px'}}>
          Discussion Section
        </ArgonTypography>

        <Stack direction="column" spacing={2} style={{ marginTop: "15px", marginBottom: "40px" }}>
          <ArgonInput
            placeholder="Your opinion matters"
            multiline
            rows={3}
            inputProps={{ style: { color: "grey", fontSize: "20px" } }}
          />
           <ArgonButton style={{ height: "58px", width: "220px", fontSize: '20px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> Submit </ArgonButton>
        </Stack>
</ArgonBox>

<ArgonBox mb={5} px={15} py={3}>

        <Grid container spacing={2}>
          <Grid item>
            <ArgonTypography variant="h3" fontWeight="bold">
              Replies and Comments
            </ArgonTypography>
          </Grid>
          <Grid item>
            <HoverCard>
          <ArgonBox px={3} py={3}>
              <CardContent>
                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Avatar></Avatar>
                      </Grid>
                      <Grid item>
                        <ArgonTypography>Author Name</ArgonTypography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <ArgonTypography variant="h4">12th April</ArgonTypography>
                  </Grid>
                  <Grid item>
                    <ArgonTypography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl
                      eget aliquam tincidunt, nisl nisl aliquam tortor, eget aliquam nisl nisl sit
                      amet nisl. Sed tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam
                      tortor, eget aliquam nisl nisl sit amet nisl.
                    </ArgonTypography>
                  </Grid>
                </Grid>
                <Grid container justifyContent="space-between" sx={{ marginTop: "20px" }}>
                  <Grid item>
                    <ArgonTypography variant="body2">
                      {" "}
                      <ArrowDown></ArrowDown>Replies
                    </ArgonTypography>
                  </Grid>
                  <Grid item>
                    <ArgonTypography variant="h3">
                      {" "}
                      <Heart></Heart>
                      12
                    </ArgonTypography>
                  </Grid>
                </Grid>
              </CardContent>
          </ArgonBox>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox mb={3} px={15} py={3}>
        <ArgonTypography variant="h2" fontWeight="bold" style={{ marginBottom: "20px" }}>
          Related Proposals
        </ArgonTypography>
        <Grid container direction="column">
          <Grid item>
            <Grid container justifyContent="space-between" style={{ marginBottom: "20px" }}>
              <Grid item>
                <ArgonTypography variant="h5">Topic</ArgonTypography>
              </Grid>
              <Grid item style={{ marginRight: "30px" }}>
                <Stack direction="row" spacing={3}>
                  <ArgonTypography variant="h5">Replies</ArgonTypography>
                  <ArgonTypography variant="h5">Views</ArgonTypography>
                  <ArgonTypography variant="h5">Activity</ArgonTypography>
                </Stack>
              </Grid>
              <DefaultDivider/>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <HoverCard>
              <CardContent>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <ArgonTypography variant="h3" style={{marginTop: '10px'}}>
                      Opt x PathoMap - Optimistic Healthcare
                    </ArgonTypography>
                  </Grid>
                  <Grid item>
                    <Stack direction="row" spacing={3} style={{marginTop: '12px'}}>
                      <ArgonTypography variant="h4">9</ArgonTypography>
                      <ArgonTypography variant="h4">885</ArgonTypography>
                      <ArgonTypography variant="h4">15th Feb</ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ProposalDiscussion;
