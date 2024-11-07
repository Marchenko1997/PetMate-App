// @ts-nocheck
import  { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBarNotices from "../../components/ForNoticesPage/SearchBarNotices/SearchBarNotices";
import {
  fetchCategories,
  fetchGenders,
  fetchCities,
} from "../../redux/notices/operations";
import AnimalsList from "../../components/ForNoticesPage/AnimalsList/AnimalsList";
import LoaderMain, {
  LoaderNewsBox,
} from "../../components/Common/LoaderMain/LoaderMain";
import PaginationGeneral from "../../components/Pagination/Pagination";
import { useNotices } from "../../hooks/useNotices";
import { HomePageSection } from "../Home/HomePage.styled";
import { TitleOfPage } from "../../components/Common/TitlePage/TitlePage";

const Notices = () => {
  const [currentPage, setCurrentPage] = useState(1);
    const [cityKeyword, setCityKeyword] = useState("rek");
  const { totalPagesNotices, isLoadNotices } = useNotices();
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchCategories());
  dispatch(fetchGenders());


  if (cityKeyword && cityKeyword.length >= 3) {
    dispatch(fetchCities({ keyword: cityKeyword }));
  } else {
    dispatch(fetchCities()); 
  }
}, [dispatch, cityKeyword]);

  const handleKeywordChange = (newKeyword) => {
    setCityKeyword(newKeyword);
  };

  return (
    <HomePageSection>
      <TitleOfPage>Find your favorite pet</TitleOfPage>
      <SearchBarNotices
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cityKeyword={cityKeyword}
        onKeywordChange={handleKeywordChange}
      />
      {isLoadNotices ? (
        <LoaderNewsBox>
          <LoaderMain />
        </LoaderNewsBox>
      ) : (
        <>
          <AnimalsList />
          <PaginationGeneral
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPagesNotices}
          />
        </>
      )}
    </HomePageSection>
  );
};

export default Notices;
