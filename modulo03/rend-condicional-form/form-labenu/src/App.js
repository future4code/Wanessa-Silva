import React from 'react';
import styled from 'styled-components';
import './App.css';
import FormRecebido from './components/FormRecebido';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
const MainContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`
export default class App extends React.Component {
  state = {
    pagina: 1,
  }
  renderizaPagina = () => {
    if (this.state.pagina === 1) {
      return <Etapa1 />
    } else if (this.state.pagina === 2) {
      return <Etapa2 />
    }
    if (this.state.pagina === 3) {
      return <Etapa3 />
    }
    if (this.state.pagina === 4) {
      return <FormRecebido />
    }
  }
  proximaPagina = (event) => {
    return this.setState({pagina: this.state.pagina + 1})
  }
  render() {
    return (
      <MainContainer>
        {this.renderizaPagina()}
        <br />
        {this.state.pagina < 4 && (<button onClick={this.proximaPagina}>Próxima Etapa</button>)}
      </MainContainer>
    );
  }
}