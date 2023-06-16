import React, { useState } from 'react'; 
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ArgonTypography from 'components/ArgonTypography';
import ArgonBox from 'components/ArgonBox';
import ArgonInput from 'components/ArgonInput';
import { CardContent, Grid, Stack } from '@mui/material';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ArgonButton from 'components/ArgonButton';
import HoverCard from 'components/HoverCard';
import { useDropzone } from 'react-dropzone';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import ArgonTagInput from 'components/ArgonTagInput';

const JobPostingUser = () => {

    const [jobTitle, setJobTitle] = useState('');
    const [aboutJob, setAboutJob] = useState('');
    const [jobApplyMail, setJobApplyMail] = useState('');
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [tags, setTags] = useState(["html", "css", "js"]);
    const updateTags = (newTags) => setTags(newTags);
  
   

   const [selectedImage, setSelectedImage] = useState(null);
    const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      multiple: false,
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0];
        setSelectedImage(URL.createObjectURL(file));
      },
    });

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
           <ArgonTypography variant="h2">Job Posting - User</ArgonTypography>
       </ArgonBox>
       
       <ArgonBox px={50} py={3}> 
       <HoverCard>
          <form>
        <ArgonBox px={7} py={5}>
           <Grid container spacing={3} direction="column">

         <Grid item xs={12} md={12} lg={12} xl={4}>
             <ArgonTypography variant="h4">Upload Image</ArgonTypography>
         </Grid>
        <Grid item xs={12} md={12} lg={12} xl={4}>
               <div {...getRootProps()} style={{ textAlign: 'center' }}>
               <input {...getInputProps()} />
               {selectedImage ? (
                  <img src={selectedImage} alt="Selected Profile" style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} />
               ) : (
                  <div style={{ padding: '50px 0', border: '1px solid grey', borderRadius: '10px', marginBottom: '30px' }}>
                       <ArgonTypography variant="body2" style={{color: 'grey'}}>Drag and drop an image here or click to select an image.</ArgonTypography>
                  </div>
               )}
               </div>
        
        </Grid>
        
      </Grid>
            <Grid container spacing={3} direction="column">
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Position</ArgonTypography>
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
                   <ArgonTypography variant="h4">About Yourself</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  
                   onChange={(e) => setAboutJob(e.target.value)}
                   multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="About yourself"/> 
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
                   <ArgonTypography variant="h4">Skiils and Experience</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  
                    multiline
                    rows={2}
                    inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                    placeholder="Skills and Experience"/> 
                </Grid>
            </Grid>

            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Salary</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                <ArgonInput  
                
                  multiline
                  rows={1}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Salary"/> 
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
               <Stack direction="row" spacing={1}>
              
               <ArgonTypography variant="h4">Web 3.0 Contribution </ArgonTypography>
               <Toggle
                  checked={isSwitchOn}
                  onChange={() => setIsSwitchOn(!isSwitchOn)}
               />
               </Stack> 
               {isSwitchOn && (
                  <div>
                      <Grid container style={{marginTop: '10px'}} spacing={4}>
                         <Grid item xs={12} md={12} lg={12} xl={6}>
                           <ArgonTypography variant="h4"> Position </ArgonTypography>
                           <ArgonInput  
                              multiline
                              rows={1}
                              inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                              placeholder="Position"/> 
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} xl={6}>
                         <ArgonTypography variant="h4"> Company Name </ArgonTypography>
                           <ArgonInput  
                              multiline
                              rows={1}
                              inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                              placeholder="Company Name"/> 
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} xl={6}>
                         <ArgonTypography variant="h4"> Duration </ArgonTypography>
                           <ArgonInput  
                              multiline
                              rows={1}
                              inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                              placeholder="Duration"/> 
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} xl={6}>
                         <ArgonTypography variant="h4"> Location </ArgonTypography>
                           <ArgonInput  
                              multiline
                              rows={1}
                              inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                              placeholder="Location"/> 
                         </Grid>

                         <Grid item xs={12} md={12} lg={12} xl={6}> 
                            <ArgonTypography variant="h4">Skills</ArgonTypography>
                            <ArgonTagInput
                              placeholder="Add new tag."
                              tags={tags}
                              onChange={updateTags}
                           />
                         </Grid>


                         </Grid>
                         


                  </div>
               )}
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

export default JobPostingUser