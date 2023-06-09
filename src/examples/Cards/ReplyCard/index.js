import React from 'react';
import { CardContent, Grid, Avatar } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import { Heart, ArrowDown } from "@web3uikit/icons";
import HoverCard from "components/HoverCard";
import ArgonButton from 'components/ArgonButton';
import ArgonInput from 'components/ArgonInput';

const ReplyCard = ({username, comment, like}) => {
  return (
    <div style={{marginLeft: '160px'}}>
     <div data-aos="fade-up" data-aos-duration="5000">
      <Grid container spacing={4}  direction="column" style={{marginTop: '10px'}}> 
        <Grid item> 
        <ArgonInput
                  multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}       
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
     <HoverCard>
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
                              <ArgonTypography>{username}</ArgonTypography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <ArgonTypography variant="h4">12th April</ArgonTypography>
                          </Grid> 
                        </Grid>
                        <Grid container style={{marginTop: '20px', marginLeft: '35px'}}> 
                           <ArgonTypography variant="body2" >
                              {comment}
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
                              {like}
                            </ArgonTypography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </ArgonBox>
    </HoverCard>
    </div>
    </div>
  )
}

export default ReplyCard