import { Avatar, Card, CardContent, Grid, Stack, TextField } from "@mui/material";
import { ArrowDown, Heart } from "@web3uikit/icons";
import ArgonBox from "components/ArgonBox";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import ArgonAvatar from "components/ArgonAvatar";
import DefaultDivider from "components/Divider";
import HoverCard from "components/HoverCard";
import { LanguageOutlined, Share } from "@mui/icons-material";

const ProposalDiscussion = () => {
  React.useEffect(() => {
    AOS.init();
  },[]);

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
        <Card style={{boxShadow: '0px 0px 80px purple', backgroundColor: ' #212529'}}> 
          <CardContent>
            <ArgonBox px={3} py={3}>
          <Grid container spacing={3} direction="column">
          <Grid item>
            <ArgonTypography style={{ fontFamily: "Lora", fontSize: "50px"}}>
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
          <Card style={{ marginTop: "30px", backgroundColor: '#2A2F34', marginLeft: '20px' }}>
            <ArgonBox px={2} py={3}>
            <CardContent>
              <Grid item>
                  <ArgonTypography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, nisl
                    eget aliquam tincidunt, nisl nisl aliquam tortor, eget aliquam nisl nisl sit
                    amet nisl. Sed tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam tortor,
                    eget aliquam nisl nisl sit amet nisl.
                  </ArgonTypography>
              </Grid>
              <Grid container item justifyContent="center" alignItems="center" style={{marginTop: '60px', marginBottom: '60px'}}>
                <img src="https://picsum.photos/900/500" style={{borderRadius: '20px'}}alt="Proposal Image" />
              </Grid>
              <Grid item>
                <ArgonTypography variant="h3">Bored Town X Optimism Art Contest</ArgonTypography>
              </Grid>
              <Grid item>
                <ArgonTypography variant="body2">
                  Artists are invited to create Bored Town-inspired art featuring the OP logo. The
                  contest will engage established members of the Optimism NFT community and attract
                  new collectors to vote for their favorite artworks via Snapshot in multiple
                  stages. The top vote-getting pieces will be showcased in a new NFT collection on
                  Optimism. Additionally, a 1/1 art piece from each of the top 25 artists and
                  exclusive NFT artwork from Bored Town will be presented in the collection, further
                  enhancing the marketing prospects for both the artists and Optimism.
                </ArgonTypography>
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
            <Card>
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
            </Card>
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
