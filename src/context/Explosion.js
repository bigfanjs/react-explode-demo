import React, { useState, createContext } from "react";

export const Context = createContext({});

export default function Explosion({ children }) {
  const [explosion, setExplosion] = useState({
    name: "Boracay",
    size: 400,
    delay: 0,
    repeatDelay: 0,
    repeat: 500
  });

  return (
    <Context.Provider value={{ explosion, setExplosion }}>
      {children}
    </Context.Provider>
  );
}
