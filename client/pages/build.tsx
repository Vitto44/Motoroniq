import React from "react";
import Header from "../components/header";
import apiService from "./api/apiService";
import CardComponent from "../components/cardComponent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import styles from "../styles/build.module.css";

const build = ({ makes }) => {
  return (
    <div>
      <Header />
      {/* <button onClick={async () => console.log(await apiService.getMakes())}>
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
      </button> */}
      <Container className={styles.container}>
        <TextField
          label="Serch Here..."
          variant="filled"
          className={styles.inputField}
        />
        <Grid container spacing={12}>
          {makes.map((make) => {
            return (
              <Grid item>
                <CardComponent key={make.id} name={make.name} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:4444/getMakes");
  const makesData = await res.json();

  return {
    props: {
      makes: makesData,
    },
  };
};

export default build;
