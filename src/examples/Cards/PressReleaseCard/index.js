import React, { useState } from "react";
import { Card, CardMedia, CardActionArea, CardContent, Grid, Stack } from "@mui/material";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "Happy Customer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/420/250",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Satisfied Customer",
    quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://picsum.photos/420/240",
  },
  {
    id: 3,
    name: "Bob Johnson",
    title: "Loyal Customer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://picsum.photos/420/260",
  },
];

const PressReleaseCard = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Stack direction="row" spacing={2}>
            <CardMedia component="img" image={`${testimonials[current].image}`} />
            <ArgonTypography variant="h2" style={{ marginTop: "30px", marginBottom: "20px" }}>
              {testimonials[current].quote}
            </ArgonTypography>
          </Stack>
        </CardContent>
      </CardActionArea>

      <Stack direction="row" justifyContent="center" alignItems="center" spacing={5}>
        <ArgonButton onClick={handlePrev} style={{ height: "52px", width: "92px" }}>
          Prev
        </ArgonButton>
        <ArgonButton onClick={handleNext} style={{ height: "52px", width: "92px" }}>
          Next
        </ArgonButton>
      </Stack>
    </Card>
  );
};

export default PressReleaseCard;
