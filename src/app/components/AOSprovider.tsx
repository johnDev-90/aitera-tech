"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AOSprovider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return <>{children}</>;
};

export default AOSprovider;
