import { CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import ArgonTypography from "components/ArgonTypography";
import HoverCard from "components/HoverCard";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import ArgonButton from "components/ArgonButton";

const NewDAOUser = () => {
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
              <Grid container spacing={15} style={{ marginBottom: "30px" }}>
                <Grid item xl={6}>
                  <Stack spacing={2}>
                    <ArgonTypography variant="h4">Username</ArgonTypography>
                    <ArgonInput size="large" placeholder="Enter your name" ></ArgonInput>
                  </Stack>
                </Grid>
                <Grid item xl={6}>
                  <Stack spacing={2}>
                    <ArgonTypography variant="h4">Email</ArgonTypography>
                    <ArgonInput size="large" placeholder="Enter your email"></ArgonInput>
                  </Stack>
                </Grid>
              </Grid>
              <Grid container spacing={15}>
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
                              color: 'lightgrey',
                              border: '1px solid grey',
                              '&:focus': {
                                borderColor: 'grey',
                              },
                            },
                            placeholderStyle: {
                              color: 'white',
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
                            <ArgonInput size="large" placeholder="Enter your password" ></ArgonInput>
                        </Stack>
                </Grid>
              </Grid>
              <Grid container dir="rtl" style={{marginTop: '30px'}}> 
              <Grid item xl={12}> 
                    <ArgonButton style={{ height: "58px", width: "180px", fontSize: '17px', fontWeight: '400', backgroundColor: "black", border: "1px solid #8d8d8d", color: 'white', boxShadow: '5px 5px 10px  #B721BE'}}> Submit </ArgonButton>
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