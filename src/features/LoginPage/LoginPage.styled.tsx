import {Form} from 'formik';
import {styled} from "@mui/material";

export const StyledForm = styled(Form)(() => ({
    display: "flex",
    flexDirection: "column",
    width: "40%",
    height: "50%",
}))

export const StyledFormContainer = styled('div')(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: window.innerHeight
}))