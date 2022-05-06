import { styled } from '@mui/material';

export const PlannerHeaderStyled = styled('div')(() => ({
  width: '100%',
  height: '2.5rem',
  borderBottom: 'solid 1px',
  borderRadius: '5px',
  borderColor: 'rgba(217,223,220,0.1)',
  display: 'inline-grid',
  gridTemplateColumns: '45px 270px 45px 45px 45px',
  alignContent: 'center'
}));

export const HeaderLogoContainerStyled = styled('div')(() => ({
  position: 'absolute',
  top: '2px',
  zIndex: '1',
  fontWeight: 'bold',
  fontSize: '24px',
  color: 'rgba(217,223,220,1)',
  userSelect: 'none',
  fontFamily: "'Brush Script MT', cursive",
  textAlign: 'center',
  marginLeft: '50%'
}));
