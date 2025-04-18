import styled from "styled-components";

export const ListOfPets = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  animation: appearRight 1000ms ease 1;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 14px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 40px;
  }
`;
