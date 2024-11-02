// @ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../../hooks/useAuth";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../../../../redux/notices/operations";
import sprite from "../../../../assets/icons/sprite.svg";
import { AddRemoveBtn, ButtonsContainer, ContactBtn } from "./Buttons.styled";



const Buttons = () => {
  return (
    <div>Buttons</div>
  )
}

export default Buttons