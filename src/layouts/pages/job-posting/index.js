import React, { useState } from 'react'; 
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import ArgonTypography from 'components/ArgonTypography';
import ArgonBox from 'components/ArgonBox';
import ArgonInput from 'components/ArgonInput';
import { Grid } from '@mui/material';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ArgonButton from 'components/ArgonButton';

const JobPosting = () => {

    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [role, setRole] = useState('');
  
    const handleLocationChange = (selectedOption) => {
      setLocation(selectedOption.value);
    };
  
    const handleTypeChange = (selectedOption) => {
      setType(selectedOption.value);
    };
  
    const handleRoleChange = (selectedOption) => {
      setRole(selectedOption.value);
    };
  
    const locationOptions = [
      { value: 'Delhi', label: 'Delhi' },
      { value: 'Bangalore', label: 'Bangalore' },
      { value: 'Noida', label: 'Noida' },
    ];
  
    const roleOptions = [
      { value: 'Full Time', label: 'Engineering' },
      { value: 'Part Time', label: 'Management' },
      { value: 'Internship', label: 'Sales' },
      { value: 'Marketing', label: 'Marketing' },
    ];
  
    const typeOptions = [
      { value: 'Full Time', label: 'Full Time' },
      { value: 'Part Time', label: 'Part Time' },
      { value: 'Internship', label: 'Internship' },
      { value: 'Freelance', label: 'Freelance' },
      { value: 'Contract', label: 'Contract' },
    ];
  
  
  return (
    <DashboardLayout>
    <DashboardNavbar />
       <ArgonBox px={15} py={3}> 
           <ArgonTypography variant="h2">Job Posting</ArgonTypography>
       </ArgonBox>

       <ArgonBox px={15} py={3}> 
            <Grid container spacing={3} direction="column">
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Job Title</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput placeholder="Job Title" />
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">About the Job</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  multiline
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
                   <ArgonInput  multiline
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
                  placeholder="Educational Qualification"/> 
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Selection Process</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonInput  multiline
                  rows={3}
                  inputProps={{ style: { color: "grey", fontSize: "20px" } }}
                  placeholder="Educational Qualification"/> 
                </Grid>
            </Grid>
            <Grid container spacing={3} direction="column" style={{marginTop: '20px'}}>
                <Grid item xs={12} md={12} lg={12} xl={4}>
                   <ArgonTypography variant="h4">Location</ArgonTypography>
                </Grid> 
                <Grid item xs={12} md={12} lg={12} xl={4}>
                <Dropdown
                    options={locationOptions}
                    value={location}
                    onChange={handleLocationChange}
                    placeholder="Select Location"
                />
                </Grid> 
           </Grid>

           <Grid container spacing={3} direction="column" style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={12} lg={12} xl={4}>
          <ArgonTypography variant="h4">Type of Position</ArgonTypography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={4}>
          <Dropdown
            options={typeOptions}
            value={type}
            onChange={handleTypeChange}
            placeholder="Select Position"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} direction="column" style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={12} lg={12} xl={4}>
          <ArgonTypography variant="h4">Role</ArgonTypography>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={4}>
          <Dropdown
            options={roleOptions}
            value={role}
            onChange={handleRoleChange}
            placeholder="Select Role"
            controlProps={{ style: { backgroundColor: 'black', color: 'white' } }}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" style={{marginTop: '20px'}}> 
         <Grid item> 
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
                 Post Job
              </ArgonButton>
         </Grid>
      </Grid>

       </ArgonBox>
    </DashboardLayout>
  )
}

export default JobPosting