import React, { useContext } from "react";
import { Form, Field } from "formik";
import * as explosions from "react-explode";
import { Context } from "context/Explosion";

import * as styles from "./styles";

function Select({ field, onChange }) {
  const handleChange = e => {
    e.preventDefault();
    onChange(e.target.value);
    field.onChange(e);
  };

  return (
    <styles.Select
      onChange={handleChange}
      value={field.value}
      name={field.name}
    >
      {Object.keys(explosions).map((name, id) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
    </styles.Select>
  );
}

export default function SingleExplosionForm({ explosion }) {
  const { setExplosion } = useContext(Context);
  const handleExplosionChange = value =>
    setExplosion({ ...explosion, name: value });

  return (
    <Form>
      <styles.FormWrapper>
        <styles.Label htmlFor="type">Explosion</styles.Label>
        <Field
          name="name"
          as="select"
          id="type"
          onChange={handleExplosionChange}
          component={Select}
        />
        <styles.Label htmlFor="size">Size</styles.Label>
        <styles.Input name="size" name="size" id="size" type="number" />
        <styles.Label htmlFor="delay">Delay</styles.Label>
        <styles.Input name="delay" id="delay" type="number" />
        <styles.Label htmlFor="repeatDelay">RepeatDelay</styles.Label>
        <styles.Input id="repeatDelay" type="number" name="repeatDelay" />
        <styles.Label htmlFor="repeat">Repeat</styles.Label>
        <styles.Input name="repeat" id="repeat" type="number" />
        <styles.Submit type="submit" defaultValue="play" />
      </styles.FormWrapper>
    </Form>
  );
}

export const initialValues = {
  name: "Boracay",
  size: 400,
  delay: 0,
  repeatDelay: 0,
  repeat: 500
};
