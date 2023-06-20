import { Avatar, Button, Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect, useState } from "react";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import { ArrowDown, Heart } from "@web3uikit/icons";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";
import ReplyCard from "examples/Cards/ReplyCard";
import axios from "axios";

const ProtocolDiscussion = () => {
  
  // Get data from the APIs - ID for Grant 
  useEffect(() => {
    AOS.init();
  }, []);
  const [posts, setPosts] = useState([]);
  const[threads, setThreads] = useState([]);
  const[comments, setComments] = useState('');
  const[secondaryComments, setSecondaryComments] = useState([]);
  // var data1 = null;
    useEffect(() => {
      axios
        .get('https://dolphin-app-qq7rr.ondigitalocean.app/protocol/?format=json')
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          // console.error(error);
        });
    }, []);
  

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://dolphin-app-qq7rr.ondigitalocean.app/discussionthread/?format=json');
         
            setThreads(response.data);
        } catch (error) {
          //console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://dolphin-app-qq7rr.ondigitalocean.app/secondarycomment/?format=json');
         
            setSecondaryComments(response.data);
        } catch (error) {
          //console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  

  // Post a comment ( User to backend )


  const handleSubmit2 = async(e) => {
    e.preventDefault();

    const formData = {
         comment: secondaryComments,
         username: 'abhijit100'
    }

      try {
          const response = await fetch('https://dolphin-app-qq7rr.ondigitalocean.app/secondarycomment/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }, 
            body: JSON.stringify(formData),

          })

            if(response.ok){
              const responseData = await response.json();
              const id = responseData.id;
              // console.log('Secondary comment posted! ID:', id);
            }
          else{
            // console.log('Secondary comment not posted!');
          }
      }
      catch (error){
        //Console.log("Error occurred:", error);
      }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      comment: comments,
      username: "abhijit99",
      secondary_buffer: secondaryComments.length > 0 ? secondaryComments[secondaryComments.length - 1].id : null
    };
  
    try {
      const response = await fetch("https://dolphin-app-qq7rr.ondigitalocean.app/primarycomment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
  
      //  console.log("Comment posted! ID:", data.id);
      //  console.log("Protocol ID:",posts[0].id);
        
        // Update threads state
        setThreads(prevThreads => [...prevThreads, {
          id: data.id,
          primary_comments: [{...data}]
        }]);
  
        //! Make a POST Request here by pushing data.id and post.id to the discussion thread
        const response2 = await fetch(`https://dolphin-app-qq7rr.ondigitalocean.app/discussionthread/?pro=${posts[0].id}`, {
  
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Thread 57",
            primary_comment_buffer: `${data.id}`,
          })
      })
      
      if(response2){
      //  console.log("Thread created!");
      }
      else{
      //  console.log("Thread not created!");
      }
    
    }
      else {
        // Error occurred while posting the comment
        //console.error("Failed to post comment");
      }
    } catch (error) {
      //console.error("Error occurred:", error);
    }
  
    if(posts.length === 0) {return null;}
  };

 



  

const [showReplies, setShowReplies] = useState(false);

  const handleRepliesClick = () => {
    setShowReplies(!showReplies);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12} xl={12} >
                <ArgonTypography variant="h2">Protocol Discussion</ArgonTypography>
              
          </Grid>
          <Grid item xs={12} md={12} lg={12} xl={12} >
          <ArgonTypography variant="h5" style={{color: '#ced4da', fontStyle: 'italic'}}>
            <q>Using this protocol? Analyze the effects of these proposals on your usability and profitability.</q>
          </ArgonTypography>
        </Grid>
        </Grid>
       <DefaultDivider/>
      </ArgonBox>
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12} md={6}>
            <div data-aos="fade-up" data-aos-duration="5000">
              <HoverCard>
                <ArgonBox px={3} py={3}>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      md={2}
                      lg={2}
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <img
                        src="https://picsum.photos/200/200"
                        alt="placeholder"
                        style={{ marginRight: "20px", borderRadius: "50%" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={10} lg={10}>
                      <Stack spacing={3}>
                        <ArgonTypography variant="h2">Protocol</ArgonTypography>
                        <ArgonTypography variant="body2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat nostrud exercitation ullamco laboris nisi ut aliquip ex
                          ea commodo consequat
                        </ArgonTypography>
                      </Stack>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </HoverCard>
            </div>
          </Grid>
        </Grid>
      </ArgonBox>

{posts.map((post) => (
      <ArgonBox px={15} py={3}>
        <Grid container direction="column">
          <Grid item xs={12} md={6} style={{ marginTop: "30px" }}>
            <Grid container justifyContent="space-between" style={{ marginBottom: "20px" }}>
              <ArgonTypography variant="h2">Disucssion</ArgonTypography>
              <ArgonButton
                variant="white"
                style={{ height: "50px", width: "200px", color: "white", fontSize: "30px" }}
              >
                <Avatar style={{ marginRight: "10px" }}></Avatar> Author
              </ArgonButton>
            </Grid>

            <Card style={{ boxShadow: "0px 0px 40px purple", backgroundColor: "#222122"}}>
              <CardContent>
                <div data-aos="fade-up" data-aos-duration="5000">
                  <Grid container>
                    <ArgonBox mx={3} my={3}>
                      <ArgonTypography variant="body2">
                        {post.desc}
                      </ArgonTypography>
                    </ArgonBox>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>
      ))}

      <ArgonBox px={15} py={3}>
        <Grid container direction="column">
          <DefaultDivider/>
          <Grid item xs={12} md={6} style={{ marginTop: "30px" }}>
            
            <ArgonTypography variant="h3">Discussion Section</ArgonTypography>
            <div data-aos="fade-up" data-aos-duration="5000">
              <form onSubmit={handleSubmit}>
              <Stack
                direction="column"
                spacing={2}
                
                style={{ marginTop: "15px", marginBottom: "40px" }}
              >
                <ArgonInput
                  multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  onChange={(e) => setComments(e.target.value)}
                />
                <button
                  style={{
                    type: "submit",
                    cursor: "pointer",
                    fontFamily: "Montserrat",
                    height: "58px",
                    width: "220px",
                    fontSize: "20px",
                    fontWeight: "400",
                    backgroundColor: "black",
                    border: "1px solid #8d8d8d",
                    color: "white",
                    boxShadow: "5px 5px 10px  #B721BE",
                  }}
                >
                  {" "}
                  Reply{" "}
                </button>
              </Stack>
              </form>
            </div>
            <Grid container spacing={2} direction="column" style={{ marginTop: "30px" }}>
              <Grid item>
                <ArgonTypography variant="h3" fontWeight="bold">
                  Replies and Comments
                </ArgonTypography>
              </Grid>
              <Grid item>
             {[...threads].reverse().map((thread) => (
                 <>
                  <HoverCard key={thread.id}>
                    <ArgonBox px={2} py={2}>
                      <CardContent>
                        <Grid
                          container
                          spacing={3}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <Grid
                              container
                              spacing={2}
                              direction="row"
                              style={{ marginTop: "10px" }}
                            >
                              <Avatar style={{ marginRight: "10px" }}></Avatar>
                              <ArgonTypography>{thread.primary_comments[thread.primary_comments.length - 1].username}</ArgonTypography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <ArgonTypography variant="h4">12th April</ArgonTypography>
                          </Grid>
                        </Grid>
                        <Grid container style={{ marginTop: '20px', marginLeft: '35px' }}>
                          <ArgonTypography variant="body2">
                            {thread.primary_comments[thread.primary_comments.length - 1].comment}
                          </ArgonTypography>
                        </Grid>
                        <Grid
                          container
                          justifyContent="space-between"
                          sx={{ marginTop: "20px" }}
                          alignItems="center"
                        >
                          <Grid item>
                            <ArgonButton variant="text" onClick={handleRepliesClick}>
                              <ArgonTypography variant="body2">
                                {" "}
                                <ArrowDown style={{ marginRight: "10px" }}></ArrowDown>Replies
                              </ArgonTypography>
                            </ArgonButton>
                          </Grid>
                          <Grid item>
                            <ArgonTypography variant="body2" style={{ fontSize: "30px" }}>
                              {" "}
                              <Heart style={{ marginRight: "10px" }}></Heart>
                              {thread.primary_comments[thread.primary_comments.length - 1].likes}
                            </ArgonTypography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </ArgonBox>
                  </HoverCard>
                 
               
              {showReplies && 
                  thread.primary_comments[thread.primary_comments.length - 1].secondary_comments?.map((secondaryComment) => (
                    <div style={{marginLeft: '160px'}}>
                    <div data-aos="fade-up" data-aos-duration="5000">
                    <form onSubmit={handleSubmit2}>
                      <Grid container spacing={4}  direction="column" style={{marginTop: '10px'}}> 
                        <Grid item> 
                        <ArgonInput
                                  multiline
                                  rows={3}
                                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}      
                                  onChange={(e) =>  setSecondaryComments(e.target.value)} 
                          />
                      </Grid>
                      <Grid container item direction="row-reverse" style={{marginBottom: '20px'}}> 
                                    <button
                                          style={{
                                            type: "submit",
                                            cursor: "pointer",
                                            fontFamily: "Montserrat",
                                            height: "38px",
                                            width: "150px",
                                            fontSize: "15px",
                                            fontWeight: "400",
                                            backgroundColor: "black",
                                            border: "1px solid #8d8d8d",
                                            color: "white",
                                            boxShadow: "5px 5px 10px  #B721BE",
                                          }}
                                        >
                                          {" "}
                                          Reply{" "}
                                        </button>
                          </Grid>
                        </Grid> 
                        </form>
                    </div>
                      <HoverCard key={secondaryComment.id}>
                        <ArgonBox px={2} py={2}>
                          <CardContent>
                            <Grid
                              container
                              spacing={3}
                              justifyContent="space-between"
                              alignItems="center"
                            >
                              <Grid item>
                                <Grid
                                  container
                                  spacing={2}
                                  direction="row"
                                  style={{ marginTop: "10px" }}
                                >
                                  <Avatar style={{ marginRight: "10px" }}></Avatar>
                                  <ArgonTypography>{secondaryComment.username}  </ArgonTypography>
                                </Grid>
                              </Grid>
                              <Grid item>
                                <ArgonTypography variant="h4">12th April</ArgonTypography>
                              </Grid>
                            </Grid>
                            <Grid container style={{marginTop: '20px', marginLeft: '35px'}}> 
                               <ArgonTypography variant="body2">
                                {secondaryComment.comment}
                               </ArgonTypography>
                            </Grid>
                            <Grid
                              container
                              justifyContent="space-between"
                              sx={{ marginTop: "20px" }}
                              alignItems="center"
                            >
                              <Grid item>
                                <ArgonButton variant="text">
                                  <ArgonTypography variant="body2">
                                    {" "}
                                    <ArrowDown style={{ marginRight: "10px" }}></ArrowDown>Replies
                                  </ArgonTypography>
                                </ArgonButton>
                              </Grid>
                              <Grid item>
                                <ArgonTypography variant="body2" style={{ fontSize: "30px" }}>
                                  {" "}
                                  <Heart style={{ marginRight: "10px" }}></Heart>
                                  {secondaryComment.likes}
                                </ArgonTypography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </ArgonBox>
                      </HoverCard>
                    </div>
                  ))}
                </>
  ))}
              </Grid>
              <Grid item> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};



export default ProtocolDiscussion;
