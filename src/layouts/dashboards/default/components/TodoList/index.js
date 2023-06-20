import { Fragment, useState } from "react";

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
import HoverCard from "components/HoverCard";
import { CardContent, Stack } from "@mui/material";
import { UserCircle } from "@phosphor-icons/react";

// Data
const data = [
  {
    img: team1,
    name: "Etherium",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "JK Rowling",
    backgroundImg: "https://i.postimg.cc/Y2Nkxtsx/adobestock-vladimir-kazak-media-library-original-1033-581.jpg",
  },
  {
    img: team2,
    name: "Uniswap",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "Kevin Pet",
    backgroundImg: "https://i.postimg.cc/DwkMpG4J/maple-media-library-original-1920-1280.jpg",
  },
  {
    img: team3,
    name: "Bitcoin",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "James Clear",
    backgroundImg: "https://i.postimg.cc/QCqJ6F25/adobestock-sashkin-1-media-library-original-1284-778-media-library-original-1284-778-media-library.jpg",
  },
  {
    img: team4,
    name: "PancakeSwap",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "Lorem Ipsum",
    backgroundImg: "https://i.postimg.cc/HxzrRbLp/meta-image-2-media-library-original-1041-630.jpg",
  },
];

function TodoList() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };  


  return (
    <Card style={{ backgroundColor: "#212529", border: "1px solid #7B848D" }}>
    <CardContent>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map(({ img, name, status, author, backgroundImg}, index) => (
          <Fragment key={index}>
            <li style={{ marginTop: "30px" }}>
              <Card
                style={{
                  backgroundImage:  `url(${backgroundImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center calc(50% - 40px)",
                  boxShadow:
                    index === hoveredIndex
                      ? "7px 7px 16px #4e4e4e"
                      : "none",
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <CardContent
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                  <Card
                    style={{
                      background:
                          "linear-gradient(rgba(22, 24, 26, 0.7), rgba( 22, 24, 26, 0.7))",
                        boxShadow: "7px 7px 16px rgba(17, 18, 18, 0.8)",
                        borderRadius: "10px",
                        marginTop: "100px",
                    }}
                  >
                    <CardContent>
                      <Grid container spacing={3} alignItems="center">
                        <Grid item>
                          <ArgonAvatar src={img} alt={name} />
                        </Grid>
                        <Grid item ml="auto">
                          <Stack direction="row" alignItems="center"  spacing={2}>
                          <UserCircle size={33} weight="bold" color="#f5f5f5" />
                          <ArgonTypography
                            variant="h3"
                            style={{ opacity: 1, color: "white" }}
                          >
                            {author}
                          </ArgonTypography>
                          </Stack> 
                        </Grid>
                        <Grid item lineHeight={1.4}>
                          <ArgonTypography
                            variant="h3"
                            style={{ opacity: 1, color: "white" }}
                          >
                            {name}
                          </ArgonTypography>
                          <ArgonTypography
                            variant="body2"
                            style={{ opacity: 1, color: "white" }}
                          >
                            {status}
                          </ArgonTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </li>
          </Fragment>
        ))}
      </ul>
    </CardContent>
  </Card>
  );
}

export default TodoList;
