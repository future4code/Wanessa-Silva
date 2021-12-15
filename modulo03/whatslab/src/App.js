import React from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";

const ContainerAreaMensagem = styled.div`
  border-radius: 0.5rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100vh;
  box-sizing: border-box;
  width: 37.5rem;
`;
const AreaMensagem = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  flex: 1;
  p {
    flex-wrap: wrap;
    border-radius: 0.5rem;
    padding: 5px;
  }
`;
const AreaForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
    padding: 1rem;
    margin: auto;
    background: transparent;
    border: 0;
    width: 3rem;
  }
`;
const InputMensagem = styled.input`
  flex: 1;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-left: 0.5rem;
`;
const InputNome = styled.input`
  width: 6.25rem;
  padding: 1rem;
  border-radius: 0.3rem;
  margin-left: 3rem;
`;

class App extends React.Component {
  state = {
    mensagens: [],
    nome: "",
    mensagemUsuario: ""
  };

  doubleClickDeletar = (msgParaDeletar) => {
    if (window.confirm("Tem certeza que deseja deletar essa mensagem?")) {
      const listaMensagens = [...this.state.mensagens];
      const mensagensFiltradas = listaMensagens.filter((mensagem) => {
        return mensagem.mensagem !== msgParaDeletar;
      });
      this.setState({ mensagens: mensagensFiltradas });
    }
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };
  onChangeMensagemUsuario = (event) => {
    this.setState({ mensagemUsuario: event.target.value });
  };

  enviarMensagem = (event) => {
    event.preventDefault();
    const novaMensagem = {
      nome: this.state.nome,
      mensagem: this.state.mensagemUsuario
    };

    const todasMensagens = [...this.state.mensagens, novaMensagem];
    this.setState({ mensagens: todasMensagens, mensagemUsuario: "" });
  };

  render() {
    return (
      <ContainerAreaMensagem>
        <AreaMensagem>
          {this.state.mensagens.map((mensagem, index) => {
            return (
              <p
                key={index}
                onDoubleClick={() =>
                  this.doubleClickDeletar(mensagem.mensagem, index)
                }
              >
                <strong>{mensagem.nome}</strong>: {mensagem.mensagem}
              </p>
            );
          })}
        </AreaMensagem>
        <AreaForm onSubmit={this.enviarMensagem}>
          <InputNome
            placeholder={"Nome"}
            value={this.state.nome}
            onChange={this.onChangeNome}
          />
          <InputMensagem
            placeholder={"Mensagem"}
            value={this.state.mensagemUsuario}
            onChange={this.onChangeMensagemUsuario}
          />
          <button>
            <FiSend size="1.5rem" color="#404040" />
          </button>
        </AreaForm>
      </ContainerAreaMensagem>
    );
  }
}
export default App;