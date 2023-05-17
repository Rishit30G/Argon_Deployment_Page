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
import 'aos/dist/aos.css';
import AOS from 'aos';
const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/grant/?format=json";


const Grants = () => {

  React.useEffect(() => {
    AOS.init();
  },[]);

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
      <ArgonBox mx={3} my={3} mb={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ArgonTypography variant="h2">Grants</ArgonTypography>
          </Grid>
        </Grid>
      </ArgonBox>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
              <Grid container xs={12} sm={12} md={12}>
                <ArgonBox style={{ marginTop: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png" sx={{ width: 60, height: 60 }}></Avatar>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h1">{post[0].title}</ArgonTypography>
                    </Grid>
                  </Grid>
                  <Grid container style={{marginTop: '35px'}}>
                    <Grid item>
                      <ArgonTypography variant="body2" style={{ marginBottom: "15px" , fontSize: '20px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi convallis mi ut quam dictum, eget rutrum ipsum ultrices.Text goes
                        here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                        convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                        convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="space-between" style={{marginTop:'20px'}}>
                    <Grid item>
                      <ArgonButton style={{backgroundColor: "#080808", border: "1px solid grey"}}> 
                        <ArgonTypography variant="h1" fontWeight="medium" style={{color: '#32CD32'}}>$1000</ArgonTypography>
                      </ArgonButton>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" spacing={2} style={{marginTop: '13px'}}>
                        <ArgonButton variant="text" style={{fontSize: '30px'}}> 
                          <Heart style={{marginRight: '10px'}}></Heart> 15
                        </ArgonButton>
                        <ArgonButton variant="text" style={{fontSize: '30px'}}>
                          <ArrowUpward style={{marginRight: '10px'}}></ArrowUpward> 240
                        </ArgonButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </Grid>
            </CardContent>
          </HoverCard>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div data-aos="fade-up" data-aos-duration="5000">
          <HoverCard>
            <CardContent>
              <Grid container xs={12} sm={12} md={12}>
                <ArgonBox style={{ marginTop: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar src="https://i.postimg.cc/CL0H2938/1026px-Uniswap-Logo-svg-1.png" sx={{ width: 60, height: 60 }}></Avatar>
                    </Grid>
                    <Grid item>
                      <ArgonTypography variant="h1">{post[0].title}</ArgonTypography>
                    </Grid>
                  </Grid>
                  <Grid container style={{marginTop: '35px'}}>
                    <Grid item>
                      <ArgonTypography variant="body2" style={{ marginBottom: "15px" , fontSize: '20px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi convallis mi ut quam dictum, eget rutrum ipsum ultrices.Text goes
                        here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                        convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                        convallis mi ut quam dictum, eget rutrum ipsum ultrices.
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                  <Grid container direction="row" justifyContent="space-between" style={{marginTop:'20px'}}>
                    <Grid item>
                      <ArgonButton style={{backgroundColor: "#080808", border: "1px solid grey"}}> 
                        <ArgonTypography variant="h1" fontWeight="medium" style={{color: '#32CD32'}}>$1200</ArgonTypography>
                      </ArgonButton>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" spacing={2} style={{marginTop: '13px'}}>
                        <ArgonButton variant="text" style={{fontSize: '30px'}}> 
                          <Heart style={{marginRight: '10px'}}></Heart> 15
                        </ArgonButton>
                        <ArgonButton variant="text" style={{fontSize: '30px'}}>
                          <ArrowUpward style={{marginRight: '10px'}}></ArrowUpward> 240
                        </ArgonButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </ArgonBox>
              </Grid>
            </CardContent>
          </HoverCard>
          </div>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default Grants;
