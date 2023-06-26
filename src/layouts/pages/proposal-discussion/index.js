import { Avatar, Card, CardContent, Grid, Stack, TextField } from "@mui/material";
import { ArrowDown } from "@web3uikit/icons";
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
import { Lightning,ShareNetwork, Globe, Heart} from "@phosphor-icons/react";
import { useLocation } from "react-router-dom";



const markdownIt = require("markdown-it");

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/proposals/?tag_name=demo";


 
const ProposalDiscussion = () => {

   const location = useLocation();
   const searchParams = new URLSearchParams(location.search);
    const hashId = searchParams.get('id');

    const [posts1, setPosts1] = useState([]);
    const [isLiked, setIsLiked] = useState(false);
    const [count, setCount] = useState(0);


    useEffect(() => {
      axios
        .get(baseURL)
        .then((response) => {
          const selectedPost = response.data.find((item) => item.id === Number(hashId));
          setPosts1(selectedPost);
        })
        .catch((error) => {
          // console.error(error);
        });
    }, [hashId]);


  React.useEffect(() => {
    AOS.init();
  },[]);


  const md = new markdownIt();
const html = md.render(posts1.description ?? "");

  const handleButtonClick = () => {
    window.open('https://www.google.com', '_blank');
  };

  const handleLike = () => {
    if (isLiked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
    setIsLiked(!isLiked);
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
              {posts1.title}
            </ArgonTypography>
            <DefaultDivider/>
          </Grid>
          <Grid item>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item> 
                  <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar></Avatar>
                    <ArgonTypography variant="h4">{posts1.creator_name}</ArgonTypography>
                  </Stack>
              </Grid>
              <Grid item> 
                  <Stack direction="row" spacing={3} alignItems="center">
                        <ArgonTypography variant="h4">  3 Days Left to Vote <Lightning size={30} color="#ffe01a" weight="fill"/> </ArgonTypography>
                        <ArgonButton variant="outlined" style={{marginRight: '10px', marginTop: '10px'}} onClick={handleButtonClick}>  
                             <Globe size={30} color="#e2dfca" style={{marginRight: '10px'}}/>
                             <a href={posts1.proposal_category}>
                            <ArgonTypography variant="h4">  Forum Discussion  </ArgonTypography> 
                            </a>
                         </ArgonButton>
                         <a href="https://google.com"> <ShareNetwork size={30} color="#e2dfca" style={{marginTop: '15px'}}/> </a> 
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
                              <img src={posts1.potential_benefits}
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
                    <ArgonTypography variant="h3" onClick={handleLike}>
                      {isLiked ? (
                        <>
                          <Heart size={28} color="#e2dfca" weight="fill" style={{marginRight: '10px'}}/>
                          {count}
                        </>
                      ) : (
                        <>
                          <Heart size={28} color="#e2dfca" style={{marginRight: '10px'}}/>
                          {count}
                        </>
                      )}
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
