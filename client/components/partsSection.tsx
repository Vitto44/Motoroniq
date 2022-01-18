import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/sections.module.css";
import PartInfoCard from "./partInfoCard";
import { InfoContext } from "../utils/infoContexts";
import { Button } from "@mui/material";

const CardComponentCard = ({
  partStore,
  parts,
  componentSearch,
  specs,
  hp,
  setParts,
  setbruteForceRender,
  bruteForceRender,
  setComponentSearch,
  total,
  setTotal,
}) => {
  const [currentStore, setCurrentStore] = useState([]);

  useEffect(() => {
    let i = 0;
    Object.values(parts).forEach((element) => {
      if (element.price) i += element.price;
    });
    setTotal(i);
  }, [bruteForceRender]);

  useEffect(() => {
    setCurrentStore(partStore[componentSearch]);
  }, [componentSearch]);

  return (
    <div className={styles.componentInfo}>
      <h1 className={styles.h1s}>Parts</h1>
      {componentSearch === 0 ? null : (
        <Button
          variant="contained"
          sx={{
            marginTop: "10px",
            backgroundColor: "#1eafd3",
            padding: "7px",
            width: "150px",
          }}
          onClick={() => {
            setParts(
              parts,
              (parts[componentSearch] = {
                id: 1,
                name: "Stock",
                partName: parts[componentSearch].partName,
                threshold: specs[1][partStore[componentSearch][0].partName],
              })
            );
            setbruteForceRender(!bruteForceRender);
          }}
        >
          Add Stock Part
        </Button>
      )}
      <div className={styles.partCards}>
        {typeof currentStore === typeof []
          ? currentStore
              .filter((el) => (el.threshold < hp ? null : el))
              .map((el) => {
                return (
                  <div key={el.id}>
                    <PartInfoCard
                      part={[componentSearch, el]}
                      store={true}
                      parts={parts}
                      specs={specs}
                      hp={hp}
                      setComponentSearch={setComponentSearch}
                      setParts={setParts}
                      setbruteForceRender={setbruteForceRender}
                      bruteForceRender={bruteForceRender}
                    />
                  </div>
                );
              })
          : null}
      </div>
      <h4 className={styles.price}>
        TOTAL: {hp > specs[1].base_power ? total + 250 : total} EUR
      </h4>
    </div>
  );
};

export default CardComponentCard;
