import { styled } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/Add';

export const AddPlanStyled = styled(AddCommentIcon)(() => ({
  height: '2.3rem',
  width: '2.3rem',
  color: 'rgba(217,223,220,0.7)',
  marginLeft: '0.3rem',
  cursor: 'pointer',

  '&:hover': {
    color: 'rgba(217,223,220,0.9)'
  }
}));
