import {Formik} from 'formik';
import React from 'react';
import {useNavigate} from "react-router-dom";
import LoginInput from "./LoginInput/LoginInput";
import {StyledForm, StyledFormContainer, StyledLoginButton, StyledLoginLogo, StyledLoginPage} from "./LoginPage.styled";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <StyledLoginPage>
            <StyledFormContainer>
                <Formik
                    initialValues={{login: "", password: ""}}
                    onSubmit={(values, {setSubmitting}) => {
                        console.log(values);
                        localStorage.setItem("main-token", 'test');

                        navigate("/main");

                        setSubmitting(false);
                    }}
                >
                    <StyledForm>
                        <StyledLoginLogo>PlanIt</StyledLoginLogo>
                        <LoginInput label="Login:" name="login" type="text" autoFocus/>
                        <LoginInput label="Password:" name="password" type="password" />
                        <StyledLoginButton type="submit" variant="contained">Log in</StyledLoginButton>
                    </StyledForm>
                </Formik>
            </StyledFormContainer>
        </StyledLoginPage>
    );
}

export default LoginPage;
