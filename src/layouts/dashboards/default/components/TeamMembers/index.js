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
import { CardContent } from "@mui/material";
import HoverCard from "components/HoverCard";

// Data
const data = [
  {
    img: team1,
    name: "Etherium",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    count: "44",
  },
  {
    img: team2,
    name: "Uniswap",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    count: "34",
  },
  {
    img: team3,
    name: "Bitcoin",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    count: "54",
  },
  {
    img: team4,
    name: "PancakeSwap",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    count: "65",
  },
];

function TeamMembers() {
  return (
    <HoverCard>
      <CardContent>
        <ArgonBox pb={3} px={1} py={1}>
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
                    <Card
                      style={{
                        position: "relative",
                        backgroundImage: "url('https://picsum.photos/1000/200')",
                        borderRadius: "12px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: "100%",
                          height: "100%",
                          backgroundColor: "rgba(0,0,0,0.35)",
                          backdropFilter: "blur(5px)",
                        }}
                      ></div>
                      <CardContent style={{ position: "relative", zIndex: 1 }}>
                        <Grid container spacing={3} alignItems="center">
                          <Grid item alignItems="center">
                            <ArgonAvatar src={img} alt={name} />
                          </Grid>
                          <Grid item ml="auto">
                            <ArgonTypography variant="h3" style={{ opacity: 1 }}>
                              {count}
                            </ArgonTypography>
                          </Grid>
                          <Grid item lineHeight={1.4}>
                            <ArgonTypography variant="h4" style={{ opacity: 1 }}>
                              {name}
                            </ArgonTypography>
                            <ArgonTypography variant="h6" style={{ opacity: 1 }}>
                              {status}
                            </ArgonTypography>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
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
      </CardContent>
    </HoverCard>
  );
}

export default TeamMembers;
