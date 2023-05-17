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
        background: isHovering
          ? "linear-gradient(to right, #131313, #7303c0, #ec38bc)"
          : "rgba(0, 0, 0, 0.3)",
        border: isHovering ? "1px solid #8d8d8d" : "1px solid #414141",
        backdropFilter: isHovering ? "blur(20px)" : "blur(10px)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    />
  );
}

export default HoverCard;
