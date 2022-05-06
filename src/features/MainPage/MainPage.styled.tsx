import { styled } from '@mui/material';

export const StyledMainPage = styled('div')(() => ({
  width: '100%',
  height: '100%',
  backgroundImage: `url(/assets/night_city_login.jpg)`,
  backgroundSize: `${window.innerWidth}px ${window.innerHeight}px`,
  backgroundRepeat: 'no-repeat'
}));
