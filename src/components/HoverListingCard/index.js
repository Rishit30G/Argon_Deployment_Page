import { Card } from "@mui/material";
import { useState } from "react";

function HoverListingCard({
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
            border: '2px solid gold ', 
            boxShadow: "0 0 30px gold"
        }),
        border: '1px solid #5A5A5A',
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    />
  );
}

export default HoverListingCard;
