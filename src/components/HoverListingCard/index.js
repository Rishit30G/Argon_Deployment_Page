import { Card } from "@mui/material";
import { useState } from "react";

function HoverListingCard({
  hoverBackground = "linear-gradient(to right,#403B4A, #b3b594)",
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
            background: hoverBackground,
            border: '2px solid gold ', 
            boxShadow: "0 0 10px gold"
        }),
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    />
  );
}

export default HoverListingCard;