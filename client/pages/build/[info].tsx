import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ApiService from "../api/apiService";
import styles from "../../styles/info.module.css";
import Header from "../../components/header";
import CardInfoCard from "../../components/carSection";
import CardComponentCard from "../../components/partsSection";

const info: React.FC = () => {
  const router = useRouter();
  const [specs, setSpecs] = useState([
    {
      id: 12345,
      name: "Generation",
    },
    {
      id: 12345,
      name: "engine model",
      base_power: 0,
      forced_induction: "Natural",
    },
  ]);
  const [modelMake, setModelMake] = useState(["Make", "Model"]);
  const [componentSearch, setComponentSearch] = useState("Components");
  const [hp, setHp] = useState(0);
  const [bruteForceRender, setbruteForceRender] = useState(false);

  const [parts, setParts] = useState({
    1: { id: 1, partName: "turbo", name: "K03 KKK", threshold: "240" },
    3: { id: 2, partName: "fuelPump", name: "AEM", threshold: "275" },
    2: { id: 3, partName: "Injectors", name: "Stock", threshold: "280" },
  });
  const [partStore, setPartStore] = useState({
    1: [{ id: 2, partName: "turbo", name: "K04 K29", threshold: "320" }],
    2: [
      { id: 1, partName: "Injectors", name: "ComoR 1", threshold: "340" },
      { id: 2, partName: "Injectors", name: "I-J51", threshold: "480" },
    ],
    3: [{ id: 1, partName: "fuelPump", name: "Perfor 12", threshold: "290" }],
  });

  //Getting Query Strings and spliting them on _ and &.
  //First one is a name and second is an ID.
  //Then calling the getInfo function which will return info about generation of a car (with some specs saved there) and engine
  useEffect(() => {
    if (typeof router.query.info === "string" && router.isReady) {
      const IDs = router.query.info.split(/[\_,&]+/);
      setModelMake([IDs[0], IDs[2]]);
      console.log(IDs);
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
          parts={parts}
          componentSearch={componentSearch}
          setParts={setParts}
          partStore={partStore}
          setComponentSearch={setComponentSearch}
          hp={hp}
          setbruteForceRender={setbruteForceRender}
          bruteForceRender={bruteForceRender}
        />
        <CardInfoCard
          setComponentSearch={setComponentSearch}
          modelMake={modelMake}
          specs={specs}
          hp={hp}
          setParts={setParts}
          setHp={setHp}
          partSpecs={parts}
          partStore={partStore}
          parts={parts}
          setbruteForceRender={setbruteForceRender}
          bruteForceRender={bruteForceRender}
        />
      </div>
    </div>
  );
};

export default info;
