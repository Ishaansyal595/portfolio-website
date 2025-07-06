import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

const utils = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default utils;
