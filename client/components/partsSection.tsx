import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/sections.module.css";
import PartInfoCard from "./partInfoCard";
import { InfoContext } from "../utils/infoContexts";

const CardComponentCard = ({ componentSearch, partStore, hp, parts }) => {
  const {} = useContext(InfoContext);

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
                      store={true}
                      parts={parts}
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
