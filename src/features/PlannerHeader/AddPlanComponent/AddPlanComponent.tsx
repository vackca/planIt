import React, {FC} from 'react';
import {AddPlanStyled} from "./AddPlanComponent.styled";
import {useToggle} from "../../../hooks/useToggle";
import AddPlanPopup from "./AddPlanPopup/AddPlanPopup";

const AddPlanComponent: FC = () => {
  const [isAddPlanOpen, toggle, open, close] = useToggle();

  const handleAddPlanClick = () => {
  }

  return (
      <span onClick={handleAddPlanClick}>
        <AddPlanStyled onClick={toggle} />
        <AddPlanPopup isPopupOpen={isAddPlanOpen} closePopup={close}/>
      </span>
  );
}

export default AddPlanComponent;
