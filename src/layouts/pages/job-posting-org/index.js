import React, { useState } from 'react'; 
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ArgonTypography from 'components/ArgonTypography';
import ArgonBox from 'components/ArgonBox';
import ArgonInput from 'components/ArgonInput';
import { CardContent, Grid } from '@mui/material';
import 'react-dropdown/style.css';
import ArgonButton from 'components/ArgonButton';
import HoverCard from 'components/HoverCard';
import ArgonDropzone from 'components/ArgonDropzone';


const JobPostingOrg = () => {

    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [role, setRole] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [aboutJob, setAboutJob] = useState('');
    const [jobApplyMail, setJobApplyMail] = useState('');
  
  

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
          job_title: jobTitle,
          job_description: aboutJob,
          location: location, 
          type_of_position: type, 
          role: role, 
          job_apply_mail: jobApplyMail,
          
        }

    try {
      const response = await fetch( 'https://dolphin-app-qq7rr.ondigitalocean.app/joblisting/', {
         method: 'POST', 
         headers: {
          'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData)
      });

      if(response.ok) {
         //  console.log('Success!')
      } 
      else{
          throw new Error('Request failed!');
      }
    }
    catch(error) {
      // console.log(error);
    }
};


  return (
    <DashboardLayout>
    <DashboardNavbar />
       <ArgonBox px={15} py={3}> 
           <ArgonTypography variant="h2">Job Posting - Organization</ArgonTypography>
       </ArgonBox>
       
       <ArgonBox px={50} py={3}> 
       <HoverCard>
          <form>
        <ArgonBox px={7} py={5}>


            <Grid container spacing={3} direction="column">
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Job Title</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput 
                   onChange={(e) => setJobTitle(e.target.value)}
                   multiline
                   row={1}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                   placeholder="Job Title" />
                </Grid>
            </Grid>
           
            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">About the Job</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  
                   onChange={(e) => setAboutJob(e.target.value)}
                   multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="About the Job"/> 
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Educational Qualification</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  
                    multiline
                    rows={2}
                    inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                    placeholder="Educational Qualification"/> 
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Looking for ?</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Looking for ?"/> 
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Selection Process</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  
                   
                   multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Selection Process"/> 
                </Grid>
            </Grid>

     

      <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Contact Email</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                <ArgonInput 
                  onChange={(e) => setJobApplyMail(e.target.value)}
                  multiline
                  rows={1}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Email"/> 
                </Grid>
            </Grid>

            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Contact Website</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                <ArgonInput  
                
                  multiline
                  rows={1}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Website"/> 
                </Grid>
            </Grid>


            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Select Location</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                <ArgonInput  
                  onChange={(e) => setLocation(e.target.value)}
                  multiline
                  rows={1}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Select Location"/> 
                </Grid>
            </Grid>

       <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Select Position</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                <ArgonInput  
                  onChange={(e) => setType(e.target.value)}
                  multiline
                  rows={1}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Select Position"/> 
                </Grid>
            </Grid>

            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Role</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                <ArgonInput  
                  onChange={(e) => setRole(e.target.value)}
                  multiline
                  rows={1}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Role"/> 
                </Grid>
            </Grid>

        <Grid container justifyContent="center" style={{marginTop: '60px'}}> 
         <Grid item> 
         <ArgonButton
                onClick={handleSubmit}
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
                 Post Job
              </ArgonButton>
         </Grid>
      </Grid>
      </ArgonBox>
      </form> 
</HoverCard>
       </ArgonBox>
    </DashboardLayout>
  )
}

export default JobPostingOrg