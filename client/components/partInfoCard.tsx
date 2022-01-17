import React, { useState } from "react";
import Card from "@mui/material/Card";
import styles from "../styles/partInfoCard.module.css";
import Image from "next/image";

const partInfo = ({
  specs,
  part,
  hp,
  setComponentSearch,
  store,
  parts,
  setParts,
  setbruteForceRender,
  bruteForceRender,
}) => {
  const swapper = () => {
    setComponentSearch(part[0]);

    if (store) {
      setParts(parts, (parts[part[0]] = part[1]));
      setbruteForceRender(!bruteForceRender);
    }
  };

  if (part[1].name === "Stock") {
    part[1].threshold = specs[1][part[1].partName];
  }

  return (
    <div onClick={() => swapper()}>
      <Card
        sx={{ minWidth: 215, maxWidth: 215 }}
        variant="outlined"
        className={hp >= part[1].threshold ? styles.out : null}
      >
        <h4 className={styles.h4s}>{part[1].partName}</h4>
        <div className={styles.img}>
          <Image
            src={
              !part[1].image || part[1].image === null
                ? "https://i.pinimg.com/736x/d1/b5/6e/d1b56ed7ac62b7fb5c6906fbeafd9396--gear-wheels-vector-icons.jpg"
                : part[1].image
            }
            alt="Engine"
            width="215"
            height="140"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <h2 className={styles.h2s}>{part[1].name}</h2>
        <h4 className={styles.h4s}>Threshold HP</h4>
        <h2 className={(styles.h2s, styles.thr)}>{part[1].threshold}</h2>
        <h4 className={styles.h4s}>Price in €</h4>
        <h2 className={(styles.h2s, styles.thr)}>160</h2>
      </Card>
    </div>
  );
};

export default partInfo;
