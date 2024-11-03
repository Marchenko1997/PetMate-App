// @ts-nocheck
import { useState } from "react";
import AvatarData from "./UserData/AvatarData/AvatarData";
import MyInformation from "./UserData/MyInformation/MyInformation";
import MyPetsTitle from "./MyPetsTitle/MyPetsTitle";
import Logout from "./Logout/Logout";
import ModalLogout from "./ModalLogout/ModalLogout";
import PetsList from "./PetsList/PetsList";

const UserInformation = ({ setshowEditForm }) => {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div>
      <AvatarData setShowEditForm={setshowEditForm} />
      <MyInformation />
      <MyPetsTitle />
      <PetsList />
      <Logout setShowLogout={setShowLogout} />
      {setShowLogout && (
        <ModalLogout setShowLogout={setShowLogout} showLogout={showLogout} />
      )}
    </div>
  );
};

export default UserInformation;
