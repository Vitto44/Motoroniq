import Head from "next/head";
import React from "react";
import Image from "next/image";
import Header from "../components/header";
import style from "../styles/index.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";

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
      {/* <Header /> */}
      <div className={style.box}>
        <div className={style.hero}>
          <div>
            <h1>
              <span className={style.hFirstPart}>Bring your build</span>
              <br />
              up a<br />
              <span className={style.hLastPart}>Gear!</span>
            </h1>
            <Link href="/list">
              <Button
                color="secondary"
                variant="contained"
                className={style.btn}
              >
                Get To Bulding!
              </Button>
            </Link>
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
        <div>
          <div>
            <h2 className={style.showBox}>Pick your car</h2>
          </div>
          <Image
            src="/190e.png"
            height={220}
            width={400}
            // layout="responsive"
            objectFit="cover"
          />
          <div>
            <h2 className={style.showBoxParts}>Pick your Parts</h2>
          </div>
          <Image
            src="/parts.png"
            height={160}
            width={200}
            // layout="responsive"
            objectFit="cover"
          />
          <h3 className={style.easyAsThat}>Easy As That!</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
