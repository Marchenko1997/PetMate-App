import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LoaderMain, { LoaderContainer } from "../LoaderMain/LoaderMain";
// import MainScreen from "../MainScreen/MainScreen";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <LoaderContainer>
              <LoaderMain />
            </LoaderContainer>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
