import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
`


function ChooseButtons() {
    const onClickNo = () => {
        const body ={
            choice: false,
        }
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/wanessa/choose-person', body

        )
    }

    const onClickYes = () => {

    }


    return (
        <ButtonsContainer>
            <button OnClick={onClickNo}> Não</button>
            <button OnClick={onClickNo}>Sim</button>
        </ButtonsContainer>
    )
}

export default ChooseButtons
