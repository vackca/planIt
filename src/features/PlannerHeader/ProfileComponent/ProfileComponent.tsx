import React from 'react';
import {AccountCircleIconStyled, ProfileComponentStyled} from "./ProfileComponent.styled";

const ProfileComponent = () => {

  const handleHomePageClick = () => {
  }

  return (
      <ProfileComponentStyled onClick={handleHomePageClick}><AccountCircleIconStyled /></ProfileComponentStyled>
  );
}

export default ProfileComponent;
