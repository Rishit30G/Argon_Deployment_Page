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
        boxShadow: "7px 7px 10px 0px rgba(255, 165, 0, 0.8)",
      }),
    }}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    {...props}
  />  
  );
}

export default HoverCard;
