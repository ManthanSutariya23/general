import React from "react";
import Typewriter from "typewriter-effect";

function Type({ string }) {
  return (
    <Typewriter
      options={{
        strings: string,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
