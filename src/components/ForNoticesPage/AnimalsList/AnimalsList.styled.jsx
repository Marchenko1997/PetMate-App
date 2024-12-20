import styled from "styled-components";

export const ListOfNotices = styled.ul`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  animation: appearDown 1000ms ease 1;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 32px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    column-gap: 32px;
    row-gap: 40px;
    justify-content: center;
  }
`;
