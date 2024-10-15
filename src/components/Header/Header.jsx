import { useState } from "react";
import { HeaderContainer, BlockBtns, MainHeader } from "./Header.styled";
import Logo from "./Logo/Logo";

const Header = () => {
    const [isHomepage, setIsHomepage] = useState(false);
  return (
      <MainHeader>
          <HeaderContainer>
              <Logo isHomepage={isHomepage}/>
          <BlockBtns>
        
          </BlockBtns>
        </HeaderContainer>
    </MainHeader>
  )
}

export default Header