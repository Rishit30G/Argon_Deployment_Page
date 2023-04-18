import { Avatar, Card, CardContent, Grid, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React from "react";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import { ArrowDown, Heart } from "@web3uikit/icons";

const ProtocolDiscussion = () => {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox px={3} py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} sx={{ lineHeight: 0 }}>
            <ArgonTypography variant="h2">Protocol Discission</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={3} py={3}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%", overflow: "hidden" }}>
              <ArgonBox px={3} py={3}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={3}
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <img
                      src="https://via.placeholder.com/200"
                      alt="placeholder"
                      style={{ marginRight: "20px" }}
                    />
                  </Grid>
                  <Grid item xs={12} md={9} lg={9}>
                    <Stack spacing={3}>
                      <ArgonTypography variant="h2">Protocol</ArgonTypography>
                      <ArgonTypography variant="subtitle2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat
                      </ArgonTypography>
                    </Stack>
                  </Grid>
                </Grid>
              </ArgonBox>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="space-between" style={{marginBottom: '20px'}}>
              <ArgonTypography variant="h2">
                Disucssion
              </ArgonTypography>
              <ArgonButton style={{height: '50px', width: '200px'}}>
                <Avatar style={{marginRight: '10px'}}></Avatar> Author
              </ArgonButton>
            </Grid>
            <ArgonTypography variant="body1">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the middle of text. All
              the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet. It uses a dictionary
              of over 200 Latin words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or non-characteristic words etc.
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
              McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going
              through the cites of the word in classical literature, discovered the undoubtable
              source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the Renaissance. The first line
              of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </ArgonTypography>
          </Grid>

          <Grid item xs={12} md={6} style={{ marginTop: "20px" }}>
            <ArgonTypography variant="h3">Discussion Section</ArgonTypography>

            <Stack
              direction="column"
              spacing={2}
              style={{ marginTop: "15px", marginBottom: "40px" }}
            >
              <ArgonInput
                placeholder="Your opinion matters"
                multiline
                rows={3}
                inputProps={{ style: { color: "grey", fontSize: "20px" } }}
              />
              <ArgonButton style={{ height: "42px", width: "102px" }}>Submit</ArgonButton>
            </Stack>

            <Grid container spacing={2}>
              <Grid item>
                <ArgonTypography variant="h5" fontWeight="bold">
                  Replies and Comments
                </ArgonTypography>
              </Grid>
              <Grid item>
                <Card>
                  <CardContent>
                    <Grid container spacing={3} justifyContent="space-between">
                      <Grid item>
                        <Avatar></Avatar>
                        <ArgonTypography>Author Name</ArgonTypography>
                      </Grid>
                      <Grid item>
                        <ArgonTypography variant="h3">12th April</ArgonTypography>
                      </Grid>
                      <Grid item>
                        <ArgonTypography variant="body1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt,
                          nisl eget aliquam tincidunt, nisl nisl aliquam tortor, eget aliquam nisl
                          nisl sit amet nisl. Sed tincidunt, nisl eget aliquam tincidunt, nisl nisl
                          aliquam tortor, eget aliquam nisl nisl sit amet nisl.
                        </ArgonTypography>
                      </Grid>
                    </Grid>
                    <Grid container justifyContent="space-between" sx={{ marginTop: "20px" }}>
                      <Grid item>
                        <ArgonTypography variant="body1">
                          {" "}
                          <ArrowDown></ArrowDown>Replies
                        </ArgonTypography>
                      </Grid>
                      <Grid item>
                        <ArgonTypography variant="body1">
                          {" "}
                          <Heart></Heart>12 Likes
                        </ArgonTypography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
};

export default ProtocolDiscussion;
