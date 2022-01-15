import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const partInfo = ({ partInfo }) => {
  return (
    <Card sx={{ minWidth: 145, marginBottom: 1 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 17, backgroundColor: "black", color: "white" }}
          c
        >
          Current Turbo
        </Typography>
        <Typography variant="h5" color="text.secondary">
          K03 KKK
        </Typography>
        <Typography
          sx={{ fontSize: 17, backgroundColor: "black", color: "white" }}
        >
          Threshold
        </Typography>
        <Typography variant="h5" color="text.secondary">
          220HP
        </Typography>
      </CardContent>
    </Card>
  );
};

export default partInfo;
