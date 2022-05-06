import React from 'react';
import { HomeIconStyled } from './HomeButton.styled';
import { useNavigate } from 'react-router-dom';

const HomeButton = () => {
  const navigate = useNavigate();

  const handleHomePageClick = () => {
    navigate('/main');
  };

  return (
    <span onClick={handleHomePageClick}>
      <HomeIconStyled />
    </span>
  );
};

export default HomeButton;
