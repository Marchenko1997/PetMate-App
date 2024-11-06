// @ts-nocheck
import { useEffect, useState } from "react";
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
  return (
    <div>Notices</div>
  )
}

export default Notices