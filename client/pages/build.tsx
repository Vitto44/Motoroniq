import React from "react";
import Header from "../components/header";
import apiService from "./api/apiService";
import { useState, useEffect } from "react";
import CardComponent from "../components/cardComponent";
import TextField from "@mui/material/TextField";
import styles from "../styles/build.module.css";

const build = ({ makes }) => {
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState(makes);
  const [IDs, setIDs] = useState([]);

  useEffect(() => {
    console.log(IDs.length);

    if (IDs.length === 1) {
      apiService.getModels(IDs[0]).then((res) => {
        setCards(res), setSearch("");
      });
    } else if (IDs.length === 2) {
      apiService.getGens(IDs[1]).then((res) => {
        setCards(res), setSearch("");
      });
    } else if (IDs.length === 3) {
      apiService.getEngines(IDs[2]).then((res) => {
        setCards(res), setSearch("");
      });
    } else if (IDs.length === 4) {
      apiService.getMakes().then((res) => setCards(res));
      console.log(
        "redirect user on a new page with the id and request data by id"
      );
      setIDs([]);
    }
  }, [IDs]);

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <TextField
          label="Serch Here..."
          variant="filled"
          className={styles.inputField}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          value={search}
        />
        <div className={styles.grid}>
          {cards
            .filter((el) => {
              if (search === "") {
                return el;
              } else if (el.name.toLowerCase().includes(search.toLowerCase())) {
                return el;
              }
            })
            .map((el) => {
              return (
                <div
                  key={el.id}
                  onClick={() => {
                    setIDs([...IDs, el.id]);
                  }}
                >
                  <CardComponent info={el} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

//Getting All Car Brands at a Innitial Load
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
