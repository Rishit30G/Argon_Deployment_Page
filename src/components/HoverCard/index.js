import { Card } from "@mui/material";
import { useState } from "react";

function HoverCard({
  ...props
}) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setTimeout(() => {
        setIsHovering(true);
    }, 200);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
        setIsHovering(false);
    }, 200);
  };

  return (
    <Card
      style={{
         backgroundColor: "#212529", 
         boxShadow: isHovering ? "0px 0px 10px #545454" : "0px 0px 50px #303030",

          // linear-gradient(to right, #131313, #7303c0, #ec38bc)
        border: isHovering ? "1px solid #7B848D" : "1px solid #495057",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    />
  );
}

export default HoverCard;
