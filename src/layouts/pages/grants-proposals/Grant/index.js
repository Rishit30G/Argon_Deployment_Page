import React from "react";
import { Avatar, Card, CardContent, Grid, Icon, Stack } from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { OutlinedFlag } from "@material-ui/icons";
import ArgonButton from "components/ArgonButton";
import { ArrowUpward } from "@mui/icons-material";
import { Heart } from "@web3uikit/icons";
import HoverCard from "components/HoverCard";
import axios from "axios";
const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/grant/?format=json";


const Grants = () => {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Grants</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <Grid container spacing={3} direction="column">
        <Grid item>
          <HoverCard>
            <CardContent>
            <ArgonBox my={3} mx={3}>
              <Grid container xs={12} sm={12} md={12}>
                <ArgonBox style={{ marginTop: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png" sx={{ width: 56, height: 56 }}></Avatar>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h2">{post[0].title}</ArgonTypography>
                    </Grid>
                  </Grid>
                  <Grid container style={{marginTop: '15px'}}>
                    <Grid item>
                      <ArgonTypography variant="body1" style={{ marginBottom: "15px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi convallis mi ut quam dictum, eget rutrum ipsum ultrices.Text goes
                        here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                        convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="space-between" style={{marginTop:'10px'}}>
                    <Grid item>
                      <Card style={{ backgroundColor: "#080808"}}>
                        <CardContent>
                          <ArgonTypography variant="h5" fontWeight="medium" style={{marginTop: '12px', color: '#32CD32'}}>Amount Requested: ${post[0].amount_required}</ArgonTypography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" spacing={2} style={{marginTop: '13px'}}>
                        <ArgonTypography>
                          <Heart></Heart> 15 Likes
                        </ArgonTypography>
                        <ArgonButton>
                          <ArrowUpward></ArrowUpward> {post[0].upvotes} Upvotes
                        </ArgonButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </Grid>
            </ArgonBox>
            </CardContent>
          </HoverCard>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Grants;
