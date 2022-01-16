import React from "react";
import Header from "../components/header";
import apiService from "./api/apiService";
import { useState, useEffect } from "react";
import CardComponent from "../components/cardComponent";
import TextField from "@mui/material/TextField";
import styles from "../styles/list.module.css";
import { useRouter } from "next/router";

const build = ({ makes }) => {
  //For user input, hooked up to the TextField component
  const [search, setSearch] = useState("");
  //For the cards, this is reused at every new level (make -> mode...)
  const [cards, setCards] = useState(makes);
  //Click on a card will add ID in here until there are 4 total
  const [IDs, setIDs] = useState([]);
  //Keeping track of names (Audi, A4, First_gen...,Build page uses names from params for info and for SEO purposes, ...I think)
  const [names, setNames] = useState([]);

  const router = useRouter();

  // Adds the names and IDs to the states and then calls the next function
  useEffect(() => {
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
    }
    //If the IDs length is 4, all of the information has been added and it reroutes the user to the /build page with the params of make&makeID_model$modeID_ ...
    else if (IDs.length === 4) {
      router.push(
        `/build/${names[0]}&${IDs[0]}_${names[1]}&${IDs[1]}_${names[2]}&${IDs[2]}_${names[3]}&${IDs[3]}`
      );
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
                    setNames([...names, el.name]);
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
