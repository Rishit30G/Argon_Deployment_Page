import { Card } from "@mui/material";
import { useState } from "react";

function HoverCard({
  hoverBackground = "linear-gradient(to left,#0575E6, #182848)",
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
        }),
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    />
  );
}

export default HoverCard;
