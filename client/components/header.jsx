import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <div>
      <div>
        <ul>
          <Link href="/build">Build</Link>
          <Link href="/">Motoroniq</Link>
          <Link href="/myBuilds">My Builds</Link>
        </ul>
      </div>
      {/* <button className="login">Login</button> */}
    </div>
  );
};

export default header;
