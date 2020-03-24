import React, { useState, useContext } from "react";
import * as explosions from "react-explode";
import { Context } from "context/Explosion";
import { initialValues } from "./SingleExplosionForm";
import Menu from "./Menu";
import * as styles from "./styles";

export default function SingleExplosion() {
  const {
    explosion: {
      name = initialValues.name,
      size = initialValues.size,
      repeat = initialValues.repeat,
      delay = initialValues.delay,
      repeatDelay = initialValues.repeatDelay
    }
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
          onComplete={[() => {}, () => {}, () => {}]}
        />
      </styles.BodySection>
    </styles.Container>
  );
}
