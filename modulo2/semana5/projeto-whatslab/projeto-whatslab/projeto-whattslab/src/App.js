import styled from 'styled-components'
import React from 'react';



class App extends React.Component {

// Estado, onde possui uma mensagem inicial
// E Estado onde guarda os valores dos Inputs.

  state = {

    mensagem: [],

    valorInputUser: "",
    valorInputTexto: ""

  }


  // Função onde ocorre 3 principais coisas
  //  1- Atribuimos o valor que esta sendo digitado aos objetos user/texto (eles não representam os valores do state).
  //  2- Chamamos o estado de fato que ja tinha, e adicionamos a nova mensagem agora atribuida.
  //  3- Atualizamos ou Setamos o Estado mensagem, com um novo valor, que é ele mesmo + a nova mensagem.

  imprimiMensagem = () => {

   const novaMesangem = {
    user: this.state.valorInputUser,
    texto: this.state.valorInputTexto
   };

   const novaMensagem2 = [ ...this.state.mensagem, novaMesangem];

   this.setState({mensagem: novaMensagem2})

   this.setState({valorInputUser:'',
                valorInputTexto:''
   })


  }


  // Evento OnChange, onde acessamos de fato, o que está sendo digitado na tela

  onChangeInputUsuario = (event) =>{

    this.setState({valorInputUser: event.target.value})
  }

  onChangeInputTexto = (event) =>{

    this.setState({valorInputTexto: event.target.value})
  }



  render(){

//ESTILIZAÇÃO

   const FundoGeral = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;` 

  const EstilizaFundo = styled.div`
      display: flex;
      width: 35vw;
      background-color: rgb(185, 255, 255);
      height: 90vh;
      margin-top: 10px;
      flex-direction: column;
      justify-content: end;
      border: solid 2px black;`


  const EstilizaBotao = styled.button`
      margin-left: 5px;
      margin-bottom: 10px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
       &:hover {
      background-color: lightskyblue;
    }`

  const EstilizaInputUser = styled.input`
    margin-right: 5px;
    margin-left: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 6vw;
  `
    const EstilizaInputTexto = styled.input`
    margin-right: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 20vw;
  `

// Transformando array de string em array de objetos
const MensagemImprimiTela = this.state.mensagem.map((mensagem) => {
  // Por isso, no momento de colocá-la na tela
  // precisamos explicitar qual das propriedades queremos mostrar em
  // cada lugar.

  return (
    <p>
      {mensagem.user} - {mensagem.texto}
    </p>
  )})



  return (
      <FundoGeral>
          <EstilizaFundo>
            {MensagemImprimiTela}


          <div className='div-input'>

          <EstilizaInputUser value={this.state.valorInputUser} onChange={this.onChangeInputUsuario} placeholder={"User"} />
          <EstilizaInputTexto value={this.state.valorInputTexto} onChange={this.onChangeInputTexto} placeholder={"Message"} />

          <EstilizaBotao onClick={this.imprimiMensagem}>Enviar</EstilizaBotao>

          </div>
            </EstilizaFundo>
      </FundoGeral>
  )
}
}

export default App;