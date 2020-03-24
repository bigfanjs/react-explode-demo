import React, { useState, createContext } from "react";

export const Context = createContext({});

export default function Explosion({ children }) {
  const [explosion, setExplosion] = useState({});

  return (
    <Context.Provider value={{ explosion, setExplosion }}>
      {children}
    </Context.Provider>
  );
}
