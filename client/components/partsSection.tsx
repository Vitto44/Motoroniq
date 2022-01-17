import React, { useEffect, useState } from "react";
import styles from "../styles/sections.module.css";
import PartInfoCard from "./partInfoCard";

const CardComponentCard = ({
  componentSearch,
  setParts,
  partStore,
  setComponentSearch,
  hp,
  parts,
  setbruteForceRender,
  bruteForceRender,
}) => {
  const [currentStore, setCurrentStore] = useState([]);

  useEffect(() => {
    setCurrentStore(partStore[componentSearch]);
  }, [componentSearch]);

  return (
    <div className={styles.componentInfo}>
      <h1 className={styles.h1s}>Parts</h1>
      <div className={styles.partCards}>
        {typeof currentStore === typeof []
          ? currentStore
              .filter((el) => (el.threshold < hp ? null : el))
              .map((el) => {
                return (
                  <div key={el.id}>
                    <PartInfoCard
                      part={[componentSearch, el]}
                      hp={hp}
                      setComponentSearch={setComponentSearch}
                      store={true}
                      parts={parts}
                      setParts={setParts}
                      setbruteForceRender={setbruteForceRender}
                      bruteForceRender={bruteForceRender}
                    />
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default CardComponentCard;
