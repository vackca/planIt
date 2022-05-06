import React, {useEffect} from 'react';
import PlannerHeader from "../PlannerHeader/PlannerHeader";
import PlannerBody from "../PlannerBody/PlannerBody";
import {useNavigate} from "react-router-dom";
import {StyledMainPage} from "./MainPage.styled";

const MainPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("main-token")) navigate("/login");
    }, [])

    return (
        <StyledMainPage>
            <PlannerHeader />
            <PlannerBody/>
        </StyledMainPage>
    );
}

export default MainPage;
