import { styled, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchIconStyled = styled(SearchIcon)(() => ({
  height: '2.3rem',
  width: '2.3rem',
  color: 'rgba(217,223,220,0.7)',
  marginLeft: '0.3rem',
  cursor: 'pointer',

  '&:hover': {
    color: 'rgba(217,223,220,0.9)'
  }
}));

export const SearchTextFieldStyled = styled(TextField)(() => ({
  backgroundColor: 'rgba(217,223,220,0.3)',
  marginTop: '7px',
  fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif !important',
  borderRadius: '22px',
  height: '27px',
  cursor: 'pointer',
  '& .MuiOutlinedInput-root': {
    height: '27px',
    borderRadius: '22px'
  }
}));
