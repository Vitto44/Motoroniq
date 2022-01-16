import React, { useEffect, useState } from "react";
import styles from "../styles/componentStoreList.module.css";
import PartInfoCard from "./partInfoCard";

const CardComponentCard = ({
  componentSearch,
  setParts,
  partStore,
  setPartStore,
  setComponentSearch,
  hp,
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
                  <PartInfoCard
                    part={[componentSearch, el]}
                    key={el.id}
                    hp={hp}
                    setComponentSearch={setComponentSearch}
                  />
                );
              })
          : null}
      </div>
    </div>
  );
};

export default CardComponentCard;
