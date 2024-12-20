import styled from "styled-components";

export const LogoutButton = styled.button`
  width: 114px;
  height: 42px;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color: var(--accent-color);
  color: var(--white-color);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
  }

  @media screen and (min-width: 1280px) {
    width: 136px;
    height: 50px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
