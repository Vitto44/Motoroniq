import Head from "next/head";
import React from "react";
import Image from "next/image";
import Header from "../components/header";

const index = () => {
  return (
    <div>
      <Head>
        <title>Motoroniq</title>
        <meta
          name="Build your next car project with motoroniq"
          content="Helper with your car project build"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <h1>
        Bring your build
        <br />
        up a<br />
        Gear!
      </h1>
      <Image src="/mercEngine.png" alt="Vercel Logo" width={250} height={300} />

      {/* <a onClick={() => console.log("yeah buddy")}>
        <Image
          src="https://www.carlogos.org/car-logos/chevrolet-logo.png"
          alt="test"
          width={240}
          height={180}
        />
      </a> */}
    </div>
  );
};

export default index;
