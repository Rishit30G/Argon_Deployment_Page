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
import { useDropzone } from "react-dropzone";


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
  
   const [selectedImage, setSelectedImage] = useState(null);
    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      multiple: false,
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedImage(URL.createObjectURL(file));
      },
    });


  const classes = useStyles();

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
              <Grid container spacing={4}>
                <Grid container item xl={2} justifyContent="center" alignItems="center">
                <div {...getRootProps()} style={{ textAlign: 'center' }}>
               <input {...getInputProps()} />
               {selectedImage ? (
                 <img src={selectedImage} alt="Selected Profile" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
               ) : (
                 <div style={{ padding: '70px 0', border: '1px solid grey', borderRadius: '10px', marginBottom: '30px'}}>
                       <ArgonTypography variant="body2" style={{color: 'grey', fontSize: '13px'}} >Drag and drop an image here or click to select an image.</ArgonTypography>
                  </div>
               )}
               </div>
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
