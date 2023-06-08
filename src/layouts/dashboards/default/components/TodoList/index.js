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
import { CardContent } from "@mui/material";

// Data
const data = [
  {
    img: team1,
    name: "Etherium",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "JK Rowling",
  },
  {
    img: team2,
    name: "Uniswap",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "Kevin Pet",
  },
  {
    img: team3,
    name: "Bitcoin",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "James Clear",
  },
  {
    img: team4,
    name: "PancakeSwap",
    status:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo",
    author: "Lorem Ipsum",
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
        {data.map(({ img, name, status, author}, index) => (
          <Fragment key={index}>
            <li style={{ marginTop: "30px" }}>
              <Card
                style={{
                  backgroundImage: "url('https://picsum.photos/1000/400')",
                  boxShadow:
                    index === hoveredIndex
                      ? "3px 3px 20px #a7a7a7"
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
                        "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6))",
                      boxShadow: "0 0 20px 10px rgba(255, 255, 255, 0.6)",
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
                          <ArgonTypography
                            variant="h2"
                            style={{ opacity: 1, color: "black" }}
                          >
                            {author}
                          </ArgonTypography>
                        </Grid>
                        <Grid item lineHeight={1.4}>
                          <ArgonTypography
                            variant="h3"
                            style={{ opacity: 1, color: "black" }}
                          >
                            {name}
                          </ArgonTypography>
                          <ArgonTypography
                            variant="body2"
                            style={{ opacity: 1, color: "black" }}
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
