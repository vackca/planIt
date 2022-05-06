import React from 'react';
import {
  NotificationsComponentStyled,
  NotificationsIconStyled
} from './NotificationsComponent.styled';
import NotificationsPopup from './NotificationsPopup/NotificationsPopup';
import { useToggle } from '../../../hooks/useToggle';

const NotificationsComponent = () => {
  const [isNotificationOpen, toggle, open, close] = useToggle();

  return (
    <NotificationsComponentStyled>
      <NotificationsIconStyled onClick={toggle} />
      <NotificationsPopup closePopup={close} isPopupOpen={isNotificationOpen} />
    </NotificationsComponentStyled>
  );
};

export default NotificationsComponent;
