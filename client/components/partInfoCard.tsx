import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import styles from "../styles/partInfoCard.module.css";
import Image from "next/image";
import { InfoContext } from "../utils/infoContexts";

const partInfo = ({
  part,
  parts,
  store,
  specs,
  hp,
  setComponentSearch,
  setParts,
  setbruteForceRender,
  bruteForceRender,
}) => {
  // const {} = useContext(InfoContext);

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
        sx={{ minWidth: 215, maxWidth: 215, cursor: "pointer" }}
        className={hp > part[1].threshold ? styles.out : null}
      >
        <h4 className={styles.h4s}>
          {part[1].partName.split("_").join(" ").toUpperCase()}
        </h4>
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
            objectFit="contain"
          />
        </div>
        <h2 className={part[1].name === "Stock" ? styles.stock : styles.h2s}>
          {part[1].name}
        </h2>
        <h4 className={styles.h4s}>Threshold HP</h4>
        <h2 className={styles.thr}>{part[1].threshold}</h2>
        <h4 className={styles.h4s}>Price in EUR</h4>
        <h2 className={styles.thr}>
          {part[1].price ? part[1].price : "Already In"}
        </h2>
      </Card>
    </div>
  );
};

export default partInfo;
