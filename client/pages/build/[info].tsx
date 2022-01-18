import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ApiService from "../api/apiService";
import styles from "../../styles/info.module.css";
import Header from "../../components/header";
import CardInfoCard from "../../components/carSection";
import Components from "../../components/partsSection";
import { InfoContext } from "../../utils/infoContexts";

const info: React.FC = () => {
  const router = useRouter();

  const [modelMake, setModelMake] = useState(["Make", "Model"]);
  const [componentSearch, setComponentSearch] = useState(0);
  const [hp, setHp] = useState(0);
  const [bruteForceRender, setbruteForceRender] = useState(false);
  //////////////////////////////////////////////////////////////////
  const [specs, setSpecs] = useState([
    {
      id: 12345,
      name: "Generation",
    },
    {
      id: 12345,
      name: "engine model",
      brakes: 0,
      exhaust: 0,
      differential: 0,
      base_power: 0,
      airFilter: 0,
      forced_induction: 0,
      fuel_pump: 0,
      injectors: 0,
      clutch: 0,
      intake_manifold: 0,
      head: 0,
    },
  ]);
  /////////////////////////////////////////////////////////////
  const [parts, setParts] = useState({
    1: {
      id: 1,
      partName: "forced_induction",
      name: "Stock",
      threshold: specs[1].forced_induction,
    },
    2: {
      id: 2,
      partName: "air_filter",
      name: "Stock",
      threshold: specs[1].airFilter,
    },
    3: {
      id: 3,
      partName: "fuel_pump",
      name: "Stock",
      threshold: specs[1].fuel_pump,
    },
    4: {
      id: 4,
      partName: "injectors",
      name: "Stock",
      threshold: specs[1].injectors,
    },
    5: { id: 5, partName: "clutch", name: "Stock", threshold: specs[1].clutch },
    6: {
      id: 6,
      partName: "exhaust",
      name: "Stock",
      threshold: specs[0].exhaust,
    },
    7: {
      id: 7,
      partName: "intake_manifold",
      name: "Stock",
      threshold: specs[1].intake_manifold,
    },
    8: { id: 8, partName: "brakes", name: "Stock", threshold: specs[0].brakes },
    9: {
      id: 9,
      partName: "differential",
      name: "Stock",
      threshold: specs[0].differential,
    },
  });

  const [partStore, setPartStore] = useState({});

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
      ApiService.getParts().then((res) => {
        setPartStore(res);
      });
    }
  }, [router.isReady]);

  return (
    <div className={styles.layout}>
      {/* <Header /> */}
      <div className={styles.container}>
        {/* Oh boy, Am I glad I decided not to use Redux */}
        <InfoContext.Provider
          value={{
            specs,
            parts,
            componentSearch,
            setParts,
            partStore,
            setComponentSearch,
            hp,
            setbruteForceRender,
            bruteForceRender,
            modelMake,
            setHp,
          }}
        >
          <Components
            parts={parts}
            partStore={partStore}
            hp={hp}
            componentSearch={componentSearch}
            specs={specs}
            setParts={setParts}
            setbruteForceRender={setbruteForceRender}
            bruteForceRender={bruteForceRender}
            setComponentSearch={setComponentSearch}
          />
          <CardInfoCard
            parts={parts}
            partSpecs={parts}
            modelMake={modelMake}
            specs={specs}
            hp={hp}
            setHp={setHp}
            setParts={setParts}
            bruteForceRender={bruteForceRender}
            setBruteForceRender={setbruteForceRender}
            setComponentSearch={setComponentSearch}
          />
        </InfoContext.Provider>
      </div>
    </div>
  );
};

export default info;
