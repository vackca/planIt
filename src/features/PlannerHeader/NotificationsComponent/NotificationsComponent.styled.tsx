import {styled} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

export const NotificationsIconStyled = styled(NotificationsIcon)(() => ({
    height: '2.3rem',
    width: '2.3rem',
    color: 'rgba(217,223,220,0.7)',
    marginLeft: "0.3rem",
    cursor: 'pointer',

    '&:hover': {
        color: 'rgba(217,223,220,0.9)',
    }
}))

export const NotificationsComponentStyled = styled('span')(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
}))