import {styled} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const AccountCircleIconStyled = styled(AccountCircleIcon)(() => ({
    height: '2.3rem',
    width: '2.3rem',
    color: 'rgba(217,223,220,0.7)',
    marginLeft: "0.3rem",
    position: 'absolute',
    right: '3px',
    cursor: 'pointer',

    '&:hover': {
        color: 'rgba(217,223,220,0.9)',
    }
}))

export const ProfileComponentStyled = styled('span')(() => ({
}))