import React, { useEffect, useState } from "react";

const Timer = () => {
  useEffect(() => {
    let id = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  return <>"Timer"</>;
};

export default Timer;
