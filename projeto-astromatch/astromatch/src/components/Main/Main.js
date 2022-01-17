import React from "react";
import AppBar from "../AppBar/AppBar";
import ChooseProfilePage from "../ChooseProfilePage/ChooseProfilePage";
import MatchListPage from "../MatchListPage/MatchListPage";
import styled from 'styled-components'

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
    return (
        <MainContainer>
            <AppBar/>
            <ChooseProfilePage/>
            {/*<MatchListPage/>*/}
        </MainContainer>

    )
}