import {styled, TextField} from "@mui/material";

export const StyledLabel = styled('label')(() => ({
    display: 'block',
    marginTop: '0.7rem',
    marginBottom: '0.3rem',
    color: 'rgba(217,223,220,1)',
    userSelect: 'none',
    fontFamily: "'Brush Script MT', cursive",
}))

export const StyledInputDiv = styled('div')(() => ({
}))

export const StyledTextField = styled(TextField)(() => ({
    backgroundColor: 'rgba(217,223,220,0.3)',
    fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif !important',
    borderRadius: '7px',
    '& input:-webkit-autofill': {
        transitionDelay: '9999s',
        fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif !important',
        fontSize: '16px !important',
    },
    '& input:-webkit-autofill::first-line': {
        fontFamily: 'Roboto, "Helvetica", "Arial", sans-serif !important',
        fontSize: '16px !important',
    },
}))
