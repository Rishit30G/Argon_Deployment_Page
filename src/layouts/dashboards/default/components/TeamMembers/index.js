import { Fragment } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 PRO MUI components
import ArgonBox from "components/ArgonBox";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonBadge from "components/ArgonBadge";
import ArgonButton from "components/ArgonButton";
import ArgonTypography from "components/ArgonTypography";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

// Data
const data = [
  { img: team1, name: "Etherium", status: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo", count: '44'},
  { img: team2, name: "Uniswap", status: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo", count: '34'},
  { img: team3, name: "Bitcoin", status: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo", count: '54'},
  { img: team4, name: "PancakeSwap", status: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo", count: '65'},
];

function TeamMembers() {
  return (
    <Card sx={{ height: "100%", overflow: "hidden" }}>
      <ArgonBox pb={3} px={3} py={3}>
        <ArgonBox
          component="ul"
          display="flex"
          flexDirection="column"
          m={0}
          p={0}
          sx={{ listStyle: "none" }}
        >
          {data.map(({ img, name, status, count }, key) => (
            <Fragment key={key}>
              <ArgonBox component="li" py={1}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item alignItems="center">
                    <ArgonAvatar src={img} alt={name} variant="rounded" />
                  </Grid>
                  <Grid item ml="auto">
                    <ArgonTypography variant="h3">
                      {count}
                    </ArgonTypography>
                  </Grid>
                  <Grid item lineHeight={1.4}>
                    <ArgonTypography variant="h4">{name}</ArgonTypography>
                    <ArgonTypography variant="h6">{status}</ArgonTypography>
                  </Grid>
                </Grid>
              </ArgonBox>
              {key !== data.length - 1 && (
                <ArgonBox
                  component="hr"
                  sx={({ palette: { grey } }) => ({
                    borderTop: `1px solid ${grey[300]}`,
                    borderBottom: 0,
                  })}
                />
              )}
            </Fragment>
          ))}
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default TeamMembers;
