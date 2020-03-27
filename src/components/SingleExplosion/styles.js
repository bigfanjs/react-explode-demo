import styled from "styled-components";
import { Field } from "formik";

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
`;

export const FormWrapper = styled.div``;

export const Label = styled.label`
  color: #fff;
  display: block;
  color: #000;
  font-size: 12px;
`;

export const Input = styled(Field)`
  width: 50px;
  border: none;
  padding: 5px;
  width: 100%;
  margin-bottom: 20px;
  background-color: #ededed;
`;

export const Submit = styled.input`
  border: none;
  padding: 5px 24px;
  cursor: pointer;
  width: 100%;
  background-color: #ededed;
`;

export const Select = styled.select`
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
  color: #db2b3c;
  font-weight: bold;
  border-radius: 0;
  border: none;
  font-size: 14px;
  background-color: #ededed;
`;

export const Menu = styled.div`
  width: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  height: 100%;
  position: relative;
  z-index: 100;

  @media (max-width: 600px) {
    width: 0;
    position: static;
  }
`;

export const MenuContent = styled.div`
  height: 100%;
  width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  transform: translate(${({ isOpen }) => (isOpen ? "0%" : "-100%")});
  transition: transform 0.2s ease-out;

  @media (max-width: 600px) {
    width: 85%;
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  left: 0;
  top: 0;
`;

export const MenuBody = styled.div`
  padding: 10px;
`;

export const BodySection = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 600px) {
    > div {
      width: 100%;
      height: auto;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 100%;
`;
