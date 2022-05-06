import React, { FC } from 'react';
import {
  NotificationsPopupStyled,
  PopupCloseButtonStyled,
  PopupTextFieldStyled
} from './NotificationsPopup.styled';

interface NotificationsPopup {
  isPopupOpen: boolean;
  closePopup: VoidFunction;
}

const NotificationsPopup: FC<NotificationsPopup> = ({ isPopupOpen, closePopup }) => {
  return isPopupOpen ? (
    <NotificationsPopupStyled>
      <PopupTextFieldStyled>Popup</PopupTextFieldStyled>
      <PopupCloseButtonStyled onClick={closePopup} />
    </NotificationsPopupStyled>
  ) : null;
};

export default NotificationsPopup;
