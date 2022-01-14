import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import Button from "@mui/material/Button";

const header = () => {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/build" className="test">
          <Button
            href="#text-buttons"
            color="secondary"
            className={styles.links}
          >
            <p className={styles.links}>Build</p>
          </Button>
        </Link>
        <Link href="/">
          <img
            src="/motoroniq-logo.svg"
            alt="motoroniq Logo"
            width={72}
            height={72}
            className={styles.logo}
          />
        </Link>

        <Link href="/build" className="test">
          <Button
            href="#text-buttons"
            color="secondary"
            className={styles.links}
          >
            <p className={styles.links}>My Builds</p>
          </Button>
        </Link>
      </div>
      {/* <button className="login">Login</button> */}
    </div>
  );
};

export default header;
