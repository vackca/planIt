import {styled} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const NotificationsPopupStyled = styled('span')(() => ({
    position: 'absolute',
    top: '95%',
    width: '10rem',
    height: '20rem',
    marginLeft: '50%',
    backgroundColor: 'lightyellow',
    borderRadius: '10px',
}))

export const PopupTextFieldStyled = styled('span')(() => ({
    position: 'relative',
    top: '1rem',
    margin: '5px',
}))

export const PopupCloseButtonStyled = styled(CloseIcon)(() => ({
    position: 'absolute',
    right: '2px',
    top: '2px',
    color: 'rgba(121,120,120,0.7)',
    width: '1.3rem',
    height: '1.3rem',

    '&:hover': {
        color: 'rgba(121,120,120,1)',
        cursor: 'pointer',
    }
}))