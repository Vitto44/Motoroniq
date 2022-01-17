import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const card = ({ info }) => {
  return (
    <Card
      sx={{ maxWidth: 290, minWidth: 290 }}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={info.picture}
          alt={`${info.name} picture`}
        />
        <CardContent
          style={{
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div">
            {info.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default card;
