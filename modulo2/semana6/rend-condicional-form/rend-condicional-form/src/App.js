import "./App.css";
import React, { Component } from "react";

// Componentes auxiliares/troca de tela

class Etapa1 extends Component {

  render() {

    return(
      <div className="App">

        <div>
        <h2>DADOS GERAIS </h2>
          <p>1. Qual o seu nome?</p>
          <input></input>
        </div>

        <div>
        <p>2. Qual sua idade?</p>
          <input></input>
        </div>

      <div>
      <p>3. Qual seu email?</p>
          <input></input>
      </div>

      <div>
      <p>4. Qual a sua escolaridade?</p>
          <select name="escolaridade">
            <option value="medio-inc">Ensino médio incompleto</option>
            <option value="medio-com">Ensino médio completo</option>
            <option value="sup-inc">Ensino superior incompleto</option>
            <option value="sup-com">Ensino superor completo</option>
          </select>

      </div>
  
      <div>
      <button onClick={this.props.goEtapa2}>Próxima Etapa</button> 
      </div>

      </div>
    );
  }
}

class Etapa2 extends Component {
  render() {
    return <div className="App">
              <div>
        <h2>INFORMAÇÕES DO ENSINO SUPERIOR </h2>
          <p>5. Qual curso?</p>
          <input></input>
        </div>

        <div>
        <p>6. Qual a unidade de ensino?</p>
          <input></input>

      <div>
      <button onClick={this.props.goEtapa3}>Próxima Etapa</button> 
      </div>

        </div>
    </div>;
  }
}

class Etapa3 extends Component {
  render() {
    return <div className="App">
             <div>
        <h2>INFORMAÇÕES GERAIS DE ENSINO</h2>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input></input>
        </div>

        <div>
        <p>6. Você fez algum curso complementar?</p>
          <select name="curso">
          <option value="na">Nenhum</option>
            <option value="ing">Curso de inglês</option>
            <option value="tec">Curso técnico</option>
          </select>
        </div>

        <div>
      <button onClick={this.props.goEtapaFinal}>Próxima Etapa</button> 
      </div>


    </div>;
  }
}

class Final extends Component {
  render() {
    return <div className="App">
        <h2>O FORMULÁRIO ACABOU</h2>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
    </div>;
  }
}


// Componente principal

export default class App extends Component {
  state = {
    tela: "etapa1"
  }


// ESTADOS E FUNÇÕES QUE SETAM O VALOR ATUAL DA TELA POR MEIO DO ONCLICK

    goEtapa1 = () =>{

        this.setState({tela: "etapa1"})
    }

    goEtapa2 = () =>{

      this.setState({tela: "etapa2"})
    }

    goEtapa3 = () =>{

      this.setState({tela: "etapa3"})
    }

    goEtapaFinal = () =>{

      this.setState({tela: "etapaFinal"})
    }


  trocaEtapa = () =>{
  
    switch(this.state.tela){
      case "etapa1":
      return <Etapa1 goEtapa2={this.goEtapa2}/>
      break;

      case "etapa2":
      return <Etapa2 goEtapa3={this.goEtapa3}/>
      break;

      case "etapa3":
      return <Etapa3 goEtapaFinal={this.goEtapaFinal}></Etapa3>
      break;

      case "etapaFinal":
      return <Final/>
      break;
    }
    
    }
  
  
  
  render() {

    return (
      <div className="div-contaier">
             <div className="App">
        {this.trocaEtapa()}
      </div>
      </div>
 
    );
  }
}
