// @ts-nocheck
import { useState, useEffect } from "react";
import { noScroll } from "../../../functions/noScroll";
import MobileMenu from "../../MobileMenu/MobileMenu";
import sprite from "../../../assets/icons/sprite.svg";
import { BurgerBtnContainer, Button } from "./BurgerBtn.styled";


const BurgerBtn = ({ isHomepage }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useEffect(() => {
    noScroll(isShowMobileMenu);
  }, [isShowMobileMenu]);

  return (
    <>
      <BurgerBtnContainer>
        <Button
          type="button"
          onClick={() => setIsShowMobileMenu((prev) => !prev)}
          ishomepage={isHomepage.toString()}
        >
          <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-burger-menu`}></use>
          </svg>
        </Button>
      </BurgerBtnContainer>
      {isShowMobileMenu && (
        <MobileMenu
          setIsShowMobileMenu={setIsShowMobileMenu}
          isHomepage={isHomepage}
        />
      )}
    </>
  );
};

export default BurgerBtn;