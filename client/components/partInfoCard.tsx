import React from "react";
import Card from "@mui/material/Card";
import styles from "../styles/partInfoCard.module.css";
import { maxWidth } from "@mui/system";

const partInfo = ({ part, hp, setComponentSearch }) => {
  return (
    <div onClick={() => setComponentSearch(part[0])}>
      <Card
        sx={{ minWidth: 225, maxWidth: 225, backgroundColor: "#e6e6e6" }}
        variant="outlined"
        className={hp >= part[1].threshold ? styles.out : null}
      >
        <h4 className={styles.h4s}>{part[1].partName}</h4>
        <h2 className={styles.h2s}>{part[1].name}</h2>
        <h4 className={styles.h4s}>Threshold</h4>
        <h2 className={(styles.h2s, styles.thr)}>{part[1].threshold}</h2>
      </Card>
    </div>
  );
};

export default partInfo;
