import React from "react";
import Header from "../components/header";
import apiService from "./api/apiService";
import styles from "../styles/Header.module.css";

const build: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Ima build page LMAO</h1>
      <button onClick={async () => console.log(await apiService.getMakes())}>
        Makes
      </button>
      <button onClick={async () => console.log(await apiService.getModels(1))}>
        Models
      </button>
      <button onClick={async () => console.log(await apiService.getGens(1))}>
        Generations
      </button>
      <button onClick={async () => console.log(await apiService.getEngines(1))}>
        Engines
      </button>
    </div>
  );
};

export default build;
