import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ApiService from "../api/apiService";
import styles from "../../styles/info.module.css";

const info = () => {
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
      router.push(`/list`);
    }
  }, []);

  useEffect(() => {
    console.log(specs);
  }, [specs]);

  if (specs.length) {
    return (
      <div>
        <div>yo</div>
        <div>whatup</div>
      </div>
    );
  }
  //If the user will go straight to the adress, will be redirected to the /list page so no show here
  else {
    return <div></div>;
  }
};

export default info;
