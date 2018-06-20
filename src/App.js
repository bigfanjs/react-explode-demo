import React, { Component } from "react";
import * as explosions from "react-explode";
import styled from "styled-components";

const Form = styled.form`
  background-color: #0000007d;
  height: 50px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
`;

const Label = styled.label`
  color: #fff;
  margin: 0 10px;
  color: #989898;
`;

const Input = styled.input`
    width: 50px;
    border: none;
    padding: 5px;
    background-color: #171717;
    color: #989898;
`;

const Submit = styled.input`
  background-color: #171717;
  border: none;
  color: #fff;
  padding: 5px 24px;
  margin-left: 20px;
  color: #989898;
  cursor: pointer;
`;

const Select = styled.select`
    padding: 5px;
    border: none;
    background-color: #171717;
    color: #989898;
`;

class App extends Component {
  state = { explosion: "Explosion1", size: 400, delay: 0, repeatDelay: 0, repeat: 5 };

  explosion = null;
  size = null;
  delay = null;
  repeatDelay = null;
  repeat = null;

  handleSubmit = (e) => {
    e.preventDefault();

    const size = parseInt(this.size.value, 10);
    const delay = parseInt(this.delay.value, 10);
    const repeatDelay = parseInt(this.repeatDelay.value, 10);
    const repeat = parseInt(this.repeat.value, 10);

    this.setState({ size, delay, repeatDelay, repeat });
  }

  handleExplosionChange = (e) => {
    this.setState({ explosion: e.target.value });
  }

  render() {
    const { explosion, size, delay, repeatDelay, repeat } = this.state;
    const Explosion = explosions[explosion];

    return (
      <div className="react-explode">
        <Explosion
          size={size}
          delay={delay}
          repeatDelay={repeatDelay}
          repeat={repeat}
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="type">Explosion</Label>
          <Select id="type" value={explosion} onChange={this.handleExplosionChange}>
            {Object.keys(explosions).map((name, id) => (
              <option key={id} value={name}>{name}</option>
            ))}
          </Select>
          <Label htmlFor="size">Size</Label>
          <Input id="size" type="number" defaultValue={size} innerRef={(el) => this.size = el} />
          <Label htmlFor="delay">Delay</Label>
          <Input id="delay" type="number" defaultValue={delay} innerRef={(el) => this.delay = el} />
          <Label htmlFor="repeatDelay">RepeatDelay</Label>
          <Input id="repeatDelay" type="number" defaultValue={repeatDelay} innerRef={(el) => this.repeatDelay = el} />
          <Label htmlFor="repeat">Repeat</Label>
          <Input id="repeat" type="number" defaultValue={repeat} innerRef={(el) => this.repeat = el} />
          <Submit type="submit" defaultValue="PLAY" />
        </Form>
      </div>
    );
  }
}

export default App;
