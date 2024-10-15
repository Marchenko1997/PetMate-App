import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import LoaderMain, { LoaderContainer } from "../LoaderMain/LoaderMain";

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
