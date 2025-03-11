import React, { useContext } from "react";
import UserContext from "./UserContext";
import UserInfo from './UserInfo';

function ProfilePage() {
  
  return <UserInfo userData={userData} />;
}

export default ProfilePage;