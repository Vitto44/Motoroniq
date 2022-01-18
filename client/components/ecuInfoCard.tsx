import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import styles from "../styles/partInfoCard.module.css";
import Image from "next/image";
import { InfoContext } from "../utils/infoContexts";

//Every time the power is changed cars ECU will need to know abut it, this willl change automatically when power is moved

const EcuInfoCard = ({ hp, specs }) => {
  // const {  } = useContext(InfoContext);
  return (
    <div>
      <Card
        sx={{ minWidth: 215, maxWidth: 215, cursor: "not-allowed" }}
        variant="outlined"
      >
        <h4 className={styles.h4s}>ECU Tune</h4>
        <div className={styles.img}>
          <Image
            src={
              hp <= specs[1].base_power
                ? "https://i.pinimg.com/736x/d1/b5/6e/d1b56ed7ac62b7fb5c6906fbeafd9396--gear-wheels-vector-icons.jpg"
                : "/test.jpg"
            }
            alt="Cogs"
            width="215"
            height="140"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <h2 className={hp <= specs[1].base_power ? styles.stock : styles.h2s}>
          ECU Tune
        </h2>
        <h4 className={styles.h4s}>Threshold HP</h4>
        <h2 className={(styles.h2s, styles.thr)}>{hp}</h2>
      </Card>
    </div>
  );
};

export default EcuInfoCard;
