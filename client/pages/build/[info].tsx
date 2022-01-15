import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ApiService from "../api/apiService";
import styles from "../../styles/info.module.css";
import Header from "../../components/header";
import Slider from "@mui/material/Slider";
import PartInfoCard from "../../components/partInfoCard";

const info: React.FC = () => {
  const router = useRouter();
  const [specs, setSpecs] = useState([]);

  //Getting Query Strings and spliting them on _ and &.
  //First one is a name and second is an ID.
  //Then calling the getInfo function which will return info about generation of a car (with some specs saved there) and engine
  useEffect(() => {
    if (typeof router.query.info === "string") {
      const IDs = router.query.info.split(/[\_,&]+/);

      ApiService.getInfo([+IDs[5], +IDs[7]]).then((res) => setSpecs(res));
    } else {
      // router.push(`/list`);
    }
  }, []);

  useEffect(() => {
    console.log(specs);
  }, [specs]);

  // if (specs.length) {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <div className={styles.componentInfo}>
          <h1>Components</h1>
        </div>
        <div className={styles.CarInfo}>
          <h1>Audi A3 - 8P</h1>
          <h3>2.0L TFSI QUATTRO 6MT</h3>
          <div className={styles.carPartsInfo}>
            <h2>Horse Power:</h2>
            <Slider
              sx={{
                color: "#a17b28",
                height: "10px",
                padding: "7px",
              }}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={150}
              max={550}
              marks
              step={10}
            />
            <div className={styles.partCards}>
              <PartInfoCard partInfo={"turbo"} />
              <PartInfoCard partInfo={"turbo"} />
              <PartInfoCard partInfo={"turbo"} />
              <PartInfoCard partInfo={"turbo"} />
              <PartInfoCard partInfo={"turbo"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // }

  //If the user will go straight to the adress, will be redirected to the /list page so no show here

  // else {
  //   return <div></div>;
  // }
};

export default info;
