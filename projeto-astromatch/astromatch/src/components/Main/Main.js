import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage";
import styled from 'styled-components'
import { render } from "@testing-library/react";

const MainContainer = styled.div`
    border: 1px solid black;
    boder-radius: 3px;
    width: 400px;
    height: 600px;
    margin: 30px;
    display: flex;
    flex-direction: column;
`

export const Main = () => {
    const [selectedPage, setSelectedPage] = useState('match-list')

    const renderSelectedPage = () => {
    switch (selectedPage) {
        case 'choose-profile':
            return <ChooseProfilePage/>
        case 'match-list':
            return <MatchListPage/>
        default:
            return <chooseProfilePage/>
    }
}


    const goToChooseProfilePage = () => {
        setSelectedPage('choose-profile')
    }

    const goToMatchListPage = () => {
        setSelectedPage('match-list')
    }                      


    return (
        <MainContainer>
            <AppBar goToChooseProfilePage={goToChooseProfilePage} goToMatchListPage={goToMatchListPage}/>
            {renderSelectedPage()}
        </MainContainer>

    )
}