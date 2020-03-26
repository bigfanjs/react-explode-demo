import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 1200px; */
  padding-left: 25px;
  padding-right: 25px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 2%;
  grid-template-columns: repeat(6, 200px);
`;

export const GridItem = styled.div`
  border: 0.5px solid #1b1b1b;
  height: 200px;
  width: 200px;
  position: relative;

  > div {
    width: 100%;
    height: 100%;
  }
`;
