import { styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export const HomeIconStyled = styled(HomeIcon)(() => ({
  height: '2.3rem',
  width: '2.3rem',
  color: 'rgba(217,223,220,0.7)',
  marginLeft: '0.4rem',
  cursor: 'pointer',

  '&:hover': {
    color: 'rgba(217,223,220,0.9)'
  }
}));
