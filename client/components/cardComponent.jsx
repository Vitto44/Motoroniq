import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const card = ({ name }) => {
  return (
    <Card
      sx={{ maxWidth: 300, minWidth: 300 }}
      style={{
        backgroundColor: "#303052",
        padding: ".4rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={`https://www.carlogos.org/car-logos/${name.toLowerCase()}-logo.png`}
          alt={`${name} logo`}
          style={{ backgroundColor: "#f0f0f0" }}
        />
        <CardContent
          style={{
            textAlign: "center",
            color: "#cccbcb",
          }}
        >
          <Typography variant="h4" component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default card;
