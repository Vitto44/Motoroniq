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
        backgroundColor: "#303052",
        padding: ".4rem",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={info.picture}
          alt={`${info.name} picture`}
          style={{ backgroundColor: "#f0f0f0" }}
        />
        <CardContent
          style={{
            textAlign: "center",
            color: "#cccbcb",
          }}
        >
          <Typography variant="h4" component="div">
            {info.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default card;
