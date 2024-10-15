import { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import AuthNav from "../AuthNav/AuthNav";
import NavMenu from "./NavMenu/NavMenu";
import {useLocation} from 'react-router-dom';
import { HeaderContainer, BlockBtns, MainHeader } from "./Header.styled";
import UserProfileBtn from "../UserProfileBtn/UserProfileBtn";
import Logo from "./Logo/Logo";

const Header = () => {
 const tablet = useMediaQuery({ minWidth: 768 });
 const tabletEnd = useMediaQuery({ maxWidth: 1279.98 });
  const desktop = useMediaQuery({ minWidth: 1280 });
  const location = useLocation();
  const [isHomepage, setIsHomepage] = useState(false);
  
  useEffect(() => {
    if (location.pathname === "/home" || location.pathname === "/") {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
 }, [location.pathname]);


  return (
      <MainHeader>
          <HeaderContainer isHomepage={isHomepage.toString()}>
        <Logo isHomepage={isHomepage} />
        {desktop && <NavMenu isHomepage={isHomepage} />}
          <BlockBtns>
          <AuthNav />
          </BlockBtns >
        </HeaderContainer>
    </MainHeader>
  )
}

export default Header