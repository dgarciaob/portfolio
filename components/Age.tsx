"use client";

import React from "react";

const Age = () => {
  const birthday = new Date("1997-08-20");
  const today = new Date();

  const ageNumber = today.getTime() - birthday.getTime();
  const age = Math.floor(ageNumber / 1000 / 60 / 60 / 24 / 365);

  return <>{age}</>;
};

export default Age;
