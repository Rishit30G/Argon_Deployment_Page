import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { CardActionArea, CardContent, Stack } from "@mui/material";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonTypography from "components/ArgonTypography";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Eye } from "@web3uikit/icons";
import { ThumbsUp } from "@phosphor-icons/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseURL = "https://dolphin-app-qq7rr.ondigitalocean.app/proposals/?tag_name=demo";

function TeamMembers() {
  const [posts, setPosts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        // console.error(error);
      });
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };


  const handleCardClick = (id) => {
    navigate(`/pages/proposal-disucssion/?id=${id}`);
  }


  return (
    <>
    {posts.map((post) => (
      post.top_proposal === true && (
    <Card style={{ backgroundColor: "#212529", border: "1px solid #7B848D" }}
      onClick={() => handleCardClick(post.id)}
    >
      <CardContent>
        <CardActionArea>
        <ul style={{ listStyle: "none", padding: 0 }}>
          
            <li  style={{ marginTop: "30px" }}>
              <Card
                style={{
                  backgroundImage: `url(${post.original_link})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center calc(50% - 110px)",
                  // boxShadow:
                  //   index === hoveredIndex ? "7px 7px 16px #4e4e4e" : "none",
                }}
                // onMouseEnter={() => handleMouseEnter(index)}
                // onMouseLeave={handleMouseLeave}
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
                          <ArgonAvatar src={team1} alt={name} />
                        </Grid>
                        <Grid item ml="auto">
                          <Stack direction="row" spacing={1}>
                            <ThumbsUp
                              size={28}
                              color="#f0f0f0"
                              weight="bold"
                              style={{ marginRight: "7px", marginTop: "10px" }}
                            />
                            <ArgonTypography
                              variant="h2"
                              style={{ opacity: 1, color: "white" }}
                            >
                              {post.impact}
                            </ArgonTypography>
                          </Stack>
                        </Grid>
                        <Grid item lineHeight={1.4}>
                          <ArgonTypography
                            variant="h3"
                            style={{ opacity: 1, color: "white" }}
                          >
                            {post.title}
                          </ArgonTypography>
                          <ArgonTypography
                            variant="body2"
                            style={{ opacity: 1, color: "white" }}
                          >
                            {post.objectives}
                          </ArgonTypography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </li>
        </ul>
          </CardActionArea>
      </CardContent>
    </Card>
      )
          ))}
  </>
  );
}

export default TeamMembers;
