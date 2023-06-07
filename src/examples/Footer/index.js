import PropTypes from "prop-types";

// @mui material components
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 PRO MUI base styles
import { Grid } from "@mui/material";
import ArgonButton from "components/ArgonButton";
import { Article, DensityMedium, Telegram, Twitter } from "@mui/icons-material";
import { Discord, Github } from "@web3uikit/icons";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import typography from "assets/theme/base/typography";


function Footer({ company, links }) {


  
  const { href, name } = company;
  const { size } = typography;

  const renderLinks = () =>
    links.map((link) => (
      <ArgonBox key={link.name} component="li" px={2} lineHeight={1}>
        <Link href={link.href} target="_blank">
          <ArgonTypography variant="button" fontWeight="regular" color="text">
            {link.name}
          </ArgonTypography>
        </Link>
      </ArgonBox>
    ));

  return (
    <ArgonBox mx={9} my={2} style={{bottom: 0, left: 0, width: "90%" }}>
      <DashboardLayout>
      <Grid container direction="row" justifyContent="space-between" alignItems="flex-end">
        <Grid item>
          <ArgonTypography variant="body2" >Copyright @{new Date().getFullYear()} | All rights reserved</ArgonTypography>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={2} alignItems="flex-end" >
            <Grid item>
              <ArgonTypography variant="body2">Join the community:</ArgonTypography>
            </Grid>
            <Grid item>
              <ArgonButton size="medium"> <Telegram/>  Telegram</ArgonButton>
            </Grid>
            <Grid item>
              <ArgonButton size="medium"> <Twitter/>  Twitter</ArgonButton>
            </Grid>
            <Grid item>
              <ArgonButton size="medium"> <Discord/>   Discord</ArgonButton>
            </Grid>
            <Grid item>
              <ArgonButton size="medium"> <Article/>   Medium</ArgonButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </DashboardLayout>
    </ArgonBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  company: { href: "https://www.creative-tim.com/", name: "Creative Tim" },
  links: [
    { href: "https://www.creative-tim.com/", name: "Creative Tim" },
    { href: "https://www.creative-tim.com/presentation", name: "About Us" },
    { href: "https://www.creative-tim.com/blog", name: "Blog" },
    { href: "https://www.creative-tim.com/license", name: "License" },
  ],
};

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
  links: PropTypes.arrayOf(PropTypes.object),
};

export default Footer;
