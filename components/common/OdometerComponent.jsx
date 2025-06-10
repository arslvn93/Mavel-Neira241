"use client";

import React, { useEffect, useRef, useState } from "react";

const OdometerComponent = ({ max }) => {
  const odometerRef = useRef(null);
  const [value, setValue] = useState(0);
  const odometerInitRef = useRef();

  useEffect(() => {
    import("odometer").then((Odometer) => {
      // Initialize Odometer or do something with it

      // Example usage of Odometer
      if (Odometer && odometerRef.current) {
        odometerInitRef.current = new Odometer.default({
          el: odometerRef.current,
          value,
        });
      }
    });
  }, []);
  useEffect(() => {
    if (odometerRef.current && odometerInitRef.current) {
      odometerInitRef.current.update(value); // Update odometer when value changes
    }
  }, [value]);

  const startCountup = () => {
    setValue(max);
  };

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCountup();
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    if (odometerRef.current) {
      observer.observe(odometerRef.current);
    }

    return () => {
      if (odometerRef.current) {
        observer.unobserve(odometerRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={odometerRef} className="odometer">
        0
      </div>
    </>
  );
};

export default OdometerComponent;
