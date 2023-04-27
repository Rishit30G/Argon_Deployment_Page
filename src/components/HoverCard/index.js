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
      ...(isHovering && {
        //Have gradiant 
        //to left 
        background: "linear-gradient(to right, #131313, #7303c0, #ec38bc)",
      }),
    }}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    {...props}
  />  
  );
}

export default HoverCard;
