import React from 'react';
import { HeaderLogoContainerStyled, PlannerHeaderStyled } from './PlannerHeader.styled';
import HomeButton from './HomeButton/HomeButton';
import SearchComponent from './SearchComponent/SearchComponent';
import NotificationsComponent from './NotificationsComponent/NotificationsComponent';
import AddPlanComponent from './AddPlanComponent/AddPlanComponent';
import ProfileComponent from './ProfileComponent/ProfileComponent';

const PlannerHeader = () => (
  <PlannerHeaderStyled>
    <HomeButton />
    <SearchComponent />
    <NotificationsComponent />
    <AddPlanComponent />
    <HeaderLogoContainerStyled>PlanIt</HeaderLogoContainerStyled>
    <ProfileComponent />
  </PlannerHeaderStyled>
);

export default PlannerHeader;
