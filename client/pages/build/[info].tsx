import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ApiService from "../api/apiService";
import styles from "../../styles/info.module.css";
import Header from "../../components/header";
import CardInfoCard from "../../components/carInfoCard";
import CardComponentCard from "../../components/CardComponentCard";

const info: React.FC = () => {
  const router = useRouter();
  const [modelMake, setModelMake] = useState(["Make", "Model"]);
  const [componentSearch, setComponentSearch] = useState("Components");
  const [hp, setHp] = useState(0);
  const [specs, setSpecs] = useState([
    {
      id: 12345,
      name: "Generation",
    },
    {
      id: 12345,
      name: "engine model",
      base_power: 0,
      base_torque: "",
      forced_induction: "Natural",
    },
  ]);
  const [parts, setParts] = useState({
    1: { id: 1, partName: "turbo", name: "K03 KKK", threshold: "240" },
    2: { id: 2, partName: "fuelPump", name: "AEM", threshold: "275" },
    3: { id: 3, partName: "Injectors", name: "Stock", threshold: "280" },
    4: { id: 4, partName: "Gasket", name: "Stock", threshold: "300" },
    5: { id: 5, partName: "Clutch", name: "Stock", threshold: "270" },
    6: { id: 6, partName: "Tune", name: "Stock", threshold: "200" },
  });
  const [partStore, setPartStore] = useState({
    1: [
      { id: 1, partName: "turbo", name: "K03 KKK", threshold: "240" },
      { id: 2, partName: "turbo", name: "K04 K29", threshold: "280" },
      { id: 3, partName: "turbo", name: "Garreth Mk2", threshold: "350" },
      { id: 4, partName: "turbo", name: "Tiurba A", threshold: "550" },
    ],
    2: [
      { id: 1, partName: "Injectors", name: "ComoR 1", threshold: "340" },
      { id: 2, partName: "Injectors", name: "I-J51", threshold: "480" },
      { id: 3, partName: "Injectors", name: "Gareth-9", threshold: "310" },
      { id: 4, partName: "Injectors", name: "InJ-20", threshold: "710" },
    ],
    3: [
      { id: 1, partName: "fuelPump", name: "Perfor 12", threshold: "290" },
      { id: 2, partName: "fuelPump", name: "Commonrl", threshold: "280" },
      { id: 3, partName: "fuelPump", name: "AEM", threshold: "405" },
      { id: 4, partName: "fuelPump", name: "Perfc EL4", threshold: "590" },
    ],
  });

  //Getting Query Strings and spliting them on _ and &.
  //First one is a name and second is an ID.
  //Then calling the getInfo function which will return info about generation of a car (with some specs saved there) and engine
  useEffect(() => {
    if (typeof router.query.info === "string" && router.isReady) {
      const IDs = router.query.info.split(/[\_,&]+/);
      setModelMake([IDs[0], IDs[2]]);

      ApiService.getInfo([+IDs[5], +IDs[7]]).then((res) => {
        setSpecs(res);
        setHp(res[1].base_power);
      });
    }
  }, [router.isReady]);

  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <CardComponentCard
          componentSearch={componentSearch}
          setParts={setParts}
          partStore={partStore}
          setPartStore={setPartStore}
          setComponentSearch={setComponentSearch}
          hp={hp}
        />
        <CardInfoCard
          setComponentSearch={setComponentSearch}
          setParts={setParts}
          modelMake={modelMake}
          specs={specs}
          hp={hp}
          setHp={setHp}
          partSpecs={parts}
        />
      </div>
    </div>
  );
};

export default info;
