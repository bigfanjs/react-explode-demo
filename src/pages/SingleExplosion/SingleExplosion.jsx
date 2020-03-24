import React, { useContext } from "react";
import * as explosions from "react-explode";
import { Context } from "context/Explosion";
import Menu from "./Menu";
import * as styles from "./styles";

export default function SingleExplosion() {
  const {
    explosion: { name, size, delay, repeat, repeatDelay }
  } = useContext(Context);

  const Explosion = explosions[name];

  return (
    <styles.Container>
      <Menu />
      <styles.BodySection>
        <Explosion
          size={size}
          delay={delay}
          repeatDelay={repeatDelay}
          repeat={repeat}
        />
      </styles.BodySection>
    </styles.Container>
  );
}
