import {Form} from 'formik';
import {Button, styled} from "@mui/material";

export const StyledLoginPage = styled('div')(() => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url(/assets/night_city_login.jpg)`,
    backgroundSize: `${window.innerWidth}px ${window.innerHeight}px`,
    backgroundRepeat: 'no-repeat'
}))

export const StyledForm = styled(Form)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    width: "40%",
    height: "60%",
    marginBottom: "3rem"
}))

export const StyledFormContainer = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
}))

export const StyledLoginButton = styled(Button)(() => ({
    width: "100px",
    margin: '0.8rem',
    backgroundColor: 'rgba(65,95,123,0.9)',
    fontFamily: "'Brush Script MT', cursive",
    '&:hover':{
        backgroundColor: 'rgba(65,95,123,1)'
    }
}))

export const StyledLoginLogo = styled('div')(() => ({
    fontWeight: 'bold',
    fontSize: '24px',
    color: 'rgba(217,223,220,1)',
    userSelect: 'none',
    fontFamily: "'Brush Script MT', cursive",
}))