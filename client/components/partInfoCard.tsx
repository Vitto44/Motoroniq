import React, { useState } from "react";
import Card from "@mui/material/Card";
import styles from "../styles/partInfoCard.module.css";
import Image from "next/image";

const partInfo = ({
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

  return (
    <div onClick={() => swapper()}>
      <Card
        sx={{ minWidth: 225, maxWidth: 225 }}
        variant="outlined"
        className={hp >= part[1].threshold ? styles.out : null}
      >
        <h4 className={styles.h4s}>{part[1].partName}</h4>
        <div className={styles.img}>
          <Image
            src="https://www.med-engineering.co.uk/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/m/e/med-5031-fg.jpg"
            alt="Engine"
            width="225"
            height="160"
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
