import  { useState, useEffect } from "react";
import sprite from "../../assets/icons/sprite.svg";
import Loader from "../Loader/Loader";
import { MainScreenContainer } from "./MainScreen.styled";


const MainScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(true), 2000);
  }, []);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 3300);
    }
  }, [isLoading]);

  return (
    <MainScreenContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <svg width={190} height={50}>
          <use xlinkHref={`${sprite}#icon-logo-main`}></use>
        </svg>
      )}
    </MainScreenContainer>
  );
};

export default MainScreen;
