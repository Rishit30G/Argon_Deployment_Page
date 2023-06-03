import { Card, CardContent, CardMedia, Grid, IconButton, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useState } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import ArgonButton from "components/ArgonButton";
import { makeStyles } from "@mui/styles";
import { AddPhotoAlternate, Delete } from "@mui/icons-material";
import HoverCard from "components/HoverCard";



const useStyles = makeStyles({
  card: {
    height: 200,
    width: 200,
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#212529',
    border: '1px solid #8d8d8d',
  },
  media: {
    width: '80%',
    height: '80%', // 1:1 aspect ratio
  },
  placeholder: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const NewDAOUser = () => {
  
  const classes = useStyles();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <ArgonTypography variant="h2">New User</ArgonTypography>
      </ArgonBox>

      <ArgonBox px={15} py={3}>
        <HoverCard>
          <CardContent>
            <ArgonBox px={4} py={4}>
              <Grid container>
                <Grid item xl={2}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                    id="image-uploader"
                  />
                  <label htmlFor="image-uploader">
                    {!selectedImage && (
                      <Card className={classes.card}>
                        <CardMedia className={classes.media} />
                        <CardContent className={classes.controls}>
                          <IconButton component="span">
                            <AddPhotoAlternate style={{color: 'white'}}/>
                          </IconButton>
                        </CardContent>
                      </Card>
                    )}
                  </label>

                  {selectedImage && (
                    <Card className={classes.card}>
                      <CardMedia className={classes.media} image={selectedImage} />
                      <CardContent className={classes.controls}>
                        <IconButton component="span" className={classes.button} onClick={handleImageRemove}>
                          <Delete style={{color: 'white'}}/>
                        </IconButton>
                      </CardContent>
                    </Card>
                  )}
                </Grid>
                <Grid item xl={10}>
                  <Grid container spacing={8} style={{ marginBottom: "30px" }}>
                    <Grid item xl={6}>
                      <Stack spacing={2}>
                        <ArgonTypography variant="h4">Username</ArgonTypography>
                        <ArgonInput size="large" placeholder="Enter your name"></ArgonInput>
                      </Stack>
                    </Grid>
                    <Grid item xl={6}>
                      <Stack spacing={2}>
                        <ArgonTypography variant="h4">Email</ArgonTypography>
                        <ArgonInput size="large" placeholder="Enter your email"></ArgonInput>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid container spacing={8}>
                    <Grid item xl={6}>
                      <Stack spacing={2}>
                        <ArgonTypography variant="h4"> Interests </ArgonTypography>
                        <Autocomplete
                          multiple
                          options={["DeFi", "GameFi", "NFT", "AI", "Metaverse"]}
                          renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                              <div
                                key={index}
                                style={{
                                  display: "inline-flex",
                                  alignItems: "center",
                                  padding: "2px 8px",
                                  borderRadius: "8px",
                                  margin: "2px",
                                }}
                              >
                                <span>{option}</span>
                              </div>
                            ))
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Select tags"
                              variant="outlined"
                              InputProps={{
                                ...params.InputProps,
                                style: {
                                  color: "lightgrey",
                                  border: "1px solid grey",
                                  "&:focus": {
                                    borderColor: "grey",
                                  },
                                },
                                placeholderStyle: {
                                  color: "white",
                                },
                              }}
                            />
                          )}
                        />
                      </Stack>
                    </Grid>
                    <Grid item xl={6}>
                      <Stack spacing={2}>
                        <ArgonTypography variant="h4"> Password </ArgonTypography>
                        <ArgonInput size="large" placeholder="Enter your password"></ArgonInput>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Grid container dir="rtl" style={{ marginTop: "30px" }}>
                    <Grid item xl={12}>
                      <ArgonButton
                        style={{
                          height: "58px",
                          width: "180px",
                          fontSize: "17px",
                          fontWeight: "400",
                          backgroundColor: "black",
                          border: "1px solid #8d8d8d",
                          color: "white",
                          boxShadow: "5px 5px 10px  #B721BE",
                        }}
                      >
                        {" "}
                        Submit{" "}
                      </ArgonButton>
                    </Grid>
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
export default NewDAOUser;
