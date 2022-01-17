import React from 'react'
import MatchListItem from './MatchListItem'
import styled from 'styled-components'

const ListContainer = styled.div`
    padding: 8px;
`

function MatchListPage() {
    const matches = [
        {
          "id": "71gMbZs2txS9LDvGK5Ew",
          "age": 26,
          "name": "Anitta",
          "photo": "https://static1.purepeople.com.br/articles/2/30/05/72/@/3401771-a-cantora-anita-aliou-biquini-listrado-a-950x0-2.jpg",
          "bio": "Amo cachorros e sair para dançar. Procuro alguém animado e sem neuras."
            }
          ]
          
    return (
        <ListContainer>
          {matches.map((profile) => {
              return <MatchListItem profile={profile}/>
          })}
        </ListContainer>
    )
}

export default MatchListPage
