// @ts-nocheck
// import { useState } from "react";
import AvatarData from "./UserData/AvatarData/AvatarData";
import MyInformation from "./UserData/MyInformation/MyInformation";



const UserInformation = ({ setshowEditForm }) => {
    
     
  return (
      <div>
          <AvatarData setShowEditForm={setshowEditForm} />
          <MyInformation />
    </div>
  )
}

export default UserInformation
