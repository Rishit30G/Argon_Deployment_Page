import { Avatar, Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect } from "react";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import { ArrowDown, Heart } from "@web3uikit/icons";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";

const ProtocolDiscussion = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={15} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12} xl={12} >
                <ArgonTypography variant="h2">Protocol Discussion</ArgonTypography>
              
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

            <Card style={{ boxShadow: "0px 0px 40px purple" }}>
              <CardContent>
                <div data-aos="fade-up" data-aos-duration="5000">
                  <Grid container>
                    <ArgonBox mx={3} my={3}>
                      <ArgonTypography variant="body2">
                        There are many variations of passages of Lorem Ipsum available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. If you are going
                        to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                        embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                        the Internet tend to repeat predefined chunks as necessary, making this the
                        first true generator on the Internet. It uses a dictionary of over 200 Latin
                        words, combined with a handful of model sentence structures, to generate
                        Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
                        always free from repetition, injected humour, or non-characteristic words
                        etc. Contrary to popular belief, Lorem Ipsum is not simply random text. It
                        has roots in a piece of classical Latin literature from 45 BC, making it
                        over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the
                        word in classical literature, discovered the undoubtable source. Lorem Ipsum
                        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
                        treatise on the theory of ethics, very popular during the Renaissance. The
                        first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                        in section 1.10.32.
                      </ArgonTypography>
                    </ArgonBox>
                  </Grid>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={15} py={3}>
        <Grid container direction="column">
          <DefaultDivider/>
          <Grid item xs={12} md={6} style={{ marginTop: "30px" }}>
            
            <ArgonTypography variant="h3">Discussion Section</ArgonTypography>
            <div data-aos="fade-up" data-aos-duration="5000">
              <Stack
                direction="column"
                spacing={2}
                style={{ marginTop: "15px", marginBottom: "40px" }}
              >
                <ArgonInput
                  multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                />
                <ArgonButton
                  style={{
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
                </ArgonButton>
              </Stack>
            </div>

            <Grid container spacing={2} style={{ marginTop: "30px" }}>
              <Grid item>
                <ArgonTypography variant="h3" fontWeight="bold">
                  Replies and Comments
                </ArgonTypography>
              </Grid>
              <Grid item>
                <div data-aos="fade-up" data-aos-duration="5000">
                  <Card>
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
                              <ArgonTypography>Author Name</ArgonTypography>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <ArgonTypography variant="h4">12th April</ArgonTypography>
                          </Grid>
                          <Grid item>
                            <ArgonTypography variant="body2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                              tincidunt, nisl eget aliquam tincidunt, nisl nisl aliquam tortor, eget
                              aliquam nisl nisl sit amet nisl. Sed tincidunt, nisl eget aliquam
                              tincidunt, nisl nisl aliquam tortor, eget aliquam nisl nisl sit amet
                              nisl.
                            </ArgonTypography>
                          </Grid>
                        </Grid>
                        <Grid
                          container
                          justifyContent="space-between"
                          sx={{ marginTop: "20px" }}
                          alignItems="center"
                        >
                          <Grid item>
                            <ArgonTypography variant="body1">
                              {" "}
                              <ArrowDown style={{ marginRight: "10px" }}></ArrowDown>Replies
                            </ArgonTypography>
                          </Grid>
                          <Grid item>
                            <ArgonTypography variant="body2" style={{ fontSize: "30px" }}>
                              {" "}
                              <Heart style={{ marginRight: "10px" }}></Heart>
                              12
                            </ArgonTypography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </ArgonBox>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ProtocolDiscussion;
