import React, { useContext } from "react";
import styles from "../styles/sections.module.css";
import { Slider } from "@mui/material";
import PartInfoCard from "./partInfoCard";
import { InfoContext } from "../utils/infoContexts";

const carInfoCard = ({ partSpecs, parts }) => {
  const { modelMake, specs, hp, setHp, setParts } = useContext(InfoContext);

  return (
    <div className={styles.CarInfo}>
      <h1>
        {modelMake[0]} {modelMake[1]} - {specs[0].name}
      </h1>
      <h3>{specs[1].name}</h3>
      <div className={styles.carPartsInfo}>
        <h2 className={styles.hpMeter}>Horse Power: {hp}</h2>
        <Slider
          sx={{
            color: "#a17b28",
            height: "10px",
            padding: "7px",
          }}
          aria-label="Default"
          min={0}
          max={1000}
          defaultValue={150}
          step={5}
          value={hp}
          onChange={(event) => {
            setHp(event.target.value);
          }}
        />
        <div className={styles.partCards}>
          {Object.entries(partSpecs).map((el) => {
            return (
              <PartInfoCard
                part={el}
                key={el[+0]}
                store={false}
                parts={parts}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default carInfoCard;
