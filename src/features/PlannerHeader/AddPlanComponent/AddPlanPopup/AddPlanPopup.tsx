import React, { FC } from 'react';
import { AddPopupStyled } from './AddPlanPopup.styled';

interface AddPlanComponentProps {
  isPopupOpen: boolean;
  closePopup: VoidFunction;
}

const AddPlanComponent: FC<AddPlanComponentProps> = ({ isPopupOpen, closePopup }) => {
  return isPopupOpen ? <AddPopupStyled>Add plan popup</AddPopupStyled> : null;
};

export default AddPlanComponent;
