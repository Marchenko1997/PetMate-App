import { ButtonsAuthContainer, LoginBtn, RegisterBtn } from "./AuthNav.styled";

const AuthNav = ({ setIsShowMobileMenu }) => {
  const handleClick = () => setIsShowMobileMenu(false);
  return (
    <ButtonsAuthContainer>
      <LoginBtn to="/login" onClick={handleClick}>
        Log in
      </LoginBtn>
      <RegisterBtn to="/register" onClick={handleClick}>
        Registration
      </RegisterBtn>
    </ButtonsAuthContainer>
  );
};

export default AuthNav;
