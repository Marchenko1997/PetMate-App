// @ts-nocheck
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../redux/news/operations";
import { useNews } from "../../hooks/useNews";
import LoaderMain, {
  LoaderNewsBox,
} from "../../components/Common/LoaderMain/LoaderMain";
import SearchBar from "../../components/ForNewsPage/SearchBar/SearchBar";
import NewsList from "../../components/ForNewsPage/NewsList/NewsList";
import { HomePageSection } from "../Home/HomePage.styled";
import { TitleOfPage } from "../../components/Common/TitlePage/TitlePage";
import { BoxTitle } from "./News.styled";

const News = () => {
  const { isLoadingNews } = useNews();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!searchValue || searchValue === "") {
      dispatch(fetchNews({ page: currentPage, searchQuery: null }));
    } else {
      dispatch(fetchNews({ page: currentPage, searchQuery: searchValue }));
    }
  }, [currentPage, dispatch, searchValue]);

  return (
    <HomePageSection>
      <BoxTitle>
        <TitleOfPage>News</TitleOfPage>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
      </BoxTitle>
      {isLoadingNews ? (
        <LoaderNewsBox>
          <LoaderMain />
        </LoaderNewsBox>
      ) : (
        <NewsList setCurrentPage={setCurrentPage} currentPage={currentPage} />
      )}
    </HomePageSection>
  );
};

export default News;
