import React from "react";
import * as explosions from "react-explode";
import * as styles from "./styles";

const Explosions = Object.keys(explosions).map(key => ({
  name: key,
  Explosion: explosions[key]
}));

export default function All() {
  return (
    <styles.Container>
      <styles.Grid>
        {Explosions.map(({ name, Explosion }) => (
          <styles.GridItem key={name}>
            <Explosion size="200" delay={0} repeatDelay={0} repeat={500} />
          </styles.GridItem>
        ))}
      </styles.Grid>
    </styles.Container>
  );
}
