import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import LoginInput from "./LoginInput/LoginInput";
import {StyledForm, StyledFormContainer} from "./LoginPage.styled";

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("main-token")) navigate("/main");
    });

    return (
        <StyledFormContainer>
            <Formik
                initialValues={{login: "", password: ""}}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    localStorage.setItem("main-token", 'test');
                    setSubmitting(false);
                }}
            >
                <StyledForm>
                    <LoginInput label="Login:" name="login" type="text" />
                    <LoginInput label="Password:" name="password" type="password" />
                    <Button type="submit" variant="contained">Log in</Button>
                </StyledForm>
            </Formik>
        </StyledFormContainer>
    );
}

export default LoginPage;
