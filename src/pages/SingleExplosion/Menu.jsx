import React, { useState, useContext, useCallback } from "react";
import { Formik } from "formik";
import { Context } from "context/Explosion";
import HamburgerIcon from "components/Icons/Hamburger";
import SingleExplosionForm from "./SingleExplosionForm";
import * as styles from "./styles";

export default function Menu() {
  const { setExplosion, explosion } = useContext(Context);

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  const handleSubmit = useCallback(
    data => setExplosion({ ...explosion, ...data }),
    [setExplosion]
  );

  return (
    <styles.Menu isOpen={isOpen}>
      <styles.MenuContent isOpen={isOpen}>
        <styles.Button onClick={handleToggleMenu}>
          <HamburgerIcon />
        </styles.Button>
        <styles.MenuBody>
          <Formik
            onSubmit={handleSubmit}
            initialValues={explosion}
            component={SingleExplosionForm}
          />
        </styles.MenuBody>
      </styles.MenuContent>
    </styles.Menu>
  );
}
