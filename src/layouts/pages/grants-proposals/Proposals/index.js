import React, { useEffect } from "react";
import {
  Card,
  Grid,
  Icon,
  Avatar,
  Stack,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
} from "@mui/material";
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import { Heart } from "@web3uikit/icons";
import { Reply, Share } from "@mui/icons-material";
import HoverCard from "components/HoverCard";
import "aos/dist/aos.css";
import AOS from "aos";
import DefaultDivider from "components/Divider";
import { Fireplace } from "@material-ui/icons";
import ArgonButton from "components/ArgonButton";
import ArgonInput from "components/ArgonInput";
import ArgonSelect from "components/ArgonSelect";

const Proposals = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [proposalSearch, setProposalSearch] = React.useState("");
  const [statusSearch, setStatusSearch] = React.useState("");
  const [categorySearch, setCategorySearch] = React.useState("");
  const [importanceSearch, setImportanceSearch] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const proposals = [
    {
      id: 1,
      title: "Proposal 1",
      description: "Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis mi ut quam dictum.",
      date: "10th Jan 2023",
      status: "Preliminary Discussion",
      category: "Parameter Changed",
      importance: "Low",
    },
    {
      id: 2,
      title: "Proposal 2",
      description: "Text goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis mi ut quam dictum.",
      date: "12th Jan 2023",
      status: "Primary Discussion",
      category: "Modified Changed",
      importance: "High",
    },
    // Add more proposal objects as needed
  ];

  const filteredProposals = proposals.filter((proposal) => {
    const matchesProposal = proposal.title.toLowerCase().includes(proposalSearch.toLowerCase());
    const matchesStatus = proposal.status.toLowerCase().includes(statusSearch.toLowerCase());
    const matchesCategory = proposal.category.toLowerCase().includes(categorySearch.toLowerCase());
    const matchesImportance = proposal.importance.toLowerCase().includes(importanceSearch.toLowerCase());

    return matchesProposal && matchesStatus && matchesCategory && matchesImportance;
  });

  return (
    <>
      <ArgonBox px={4} py={3}>
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={12} xl={4} lg={8}>
            <ArgonInput
              placeholder="Search Proposal"
              value={proposalSearch}
              onChange={(e) => setProposalSearch(e.target.value)}
              startAdornment={<ArgonBox component="i" className="ni ni-search" mr={1} />}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={4} lg={4}>
            <Grid container spacing={3} justifyContent="space-around">
              <Grid item xl={4}>
                <ArgonInput placeholder="Search Status" value={statusSearch} onChange={(e) => setStatusSearch(e.target.value)} />
              </Grid>
              <Grid item xl={4}>
                <ArgonInput placeholder="Search Category" value={categorySearch} onChange={(e) => setCategorySearch(e.target.value)} />
              </Grid>
              <Grid item xl={4}>
                <ArgonInput placeholder="Search Importance" value={importanceSearch} onChange={(e) => setImportanceSearch(e.target.value)} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={4} py={3}>
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} md={12} xl={8} lg={8}>
            <ArgonTypography variant="h4">Proposals</ArgonTypography>
            <DefaultDivider />
          </Grid>
          <Grid item xs={12} md={12} xl={4} lg={4}>
            <Grid container spacing={3} justifyContent="space-around">
              <Grid item>
                <ArgonTypography variant="h4">Status</ArgonTypography>
              </Grid>
              <Grid item>
                <ArgonTypography variant="h4">Category</ArgonTypography>
              </Grid>
              <Grid item>
                <ArgonTypography variant="h4">Importance</ArgonTypography>
              </Grid>
            </Grid>
            <DefaultDivider />
          </Grid>
        </Grid>
      </ArgonBox>

      <ArgonBox px={4} py={2}>
  <Grid container spacing={4}>
    {filteredProposals.map((proposal, index) => (
      <Grid item xs={12} key={proposal.id}>
        <Grid container spacing={4}>
          {/* Main Card */}
          <Grid item xs={12} md={8} lg={8} style={{ display: "flex", justifyContent: "center" }}>
            <HoverCard style={{ backgroundColor: "#3E3D3E", marginTop: '10px' }}>
              <CardContent>
                <Grid container spacing={4}>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <ArgonTypography variant="h2">{proposal.title}</ArgonTypography>
                    <ArgonTypography variant="h4">{proposal.date}</ArgonTypography>
                  </Grid>
                  <Grid container item xs={12} sm={12} md={12} justifyContent="space-between">
                    <Grid item>
                      <ArgonTypography
                        variant="body2"
                        style={{ fontSize: "20px", color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        {proposal.description}
                      </ArgonTypography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
          {/* Side Card */}
          <Grid item xs={12} md={4} lg={4}>
            <HoverCard style={{ backgroundColor: "#3E3D3E", marginTop: '10px' }}>
              <CardContent style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Grid container spacing={4} justifyContent="space-between">
                  <Grid container item xl={4} justifyContent="center">
                    <ArgonTypography variant="h6">{proposal.status}</ArgonTypography>
                  </Grid>
                  <Grid container item xl={4} justifyContent="center">
                    <ArgonTypography variant="h6">{proposal.category}</ArgonTypography>
                  </Grid>
                  <Grid container item xl={4} justifyContent="center">
                    <ArgonButton variant="contained" color="dark">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <ion-icon name="flame-outline" style={{ color: "lightblue", fontSize: "20px" }}></ion-icon>
                        <ArgonTypography variant="h5">{proposal.importance}</ArgonTypography>
                      </Stack>
                    </ArgonButton>
                  </Grid>
                </Grid>
              </CardContent>
            </HoverCard>
          </Grid>
        </Grid>
      </Grid>
    ))}
  </Grid>
</ArgonBox>



    </>
  );
};

export default Proposals;
