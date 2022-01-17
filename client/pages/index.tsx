import Head from "next/head";
import React from "react";
import Image from "next/image";
import Header from "../components/header";
import style from "../styles/index.module.css";
import Button from "@mui/material/Button";

const index: React.FC = () => {
  return (
    <div className={style.mainBox}>
      <Head>
        <title>Motoroniq</title>
        <meta
          name="Build your next car project with motoroniq"
          content="Helper with your car project build"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={style.box}>
        <div className={style.hero}>
          <div>
            <h1>
              <span className={style.hFirstPart}>Bring your build</span>
              <br />
              up a<br />
              <span className={style.hLastPart}>Gear!</span>
            </h1>
            <Button color="secondary" variant="contained" className={style.btn}>
              Get to building!
            </Button>
          </div>
          <div className={style.engineIMG}>
            <Image
              src="/mercEngine.png"
              alt="Engine"
              width={270}
              height={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
