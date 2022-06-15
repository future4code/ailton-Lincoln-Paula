/*ANÁLISE
1- Consigo entender tudo o que tem dentro do elemento App.js.

2- Tarefa aparece na tela, ao colocar no array tarefas, dentro do estado
3- Adicionado mais uma tarefa dentro do array.

4- Quando se muda a string do filtro para completas, aparece a tarefa completa riscada, porém o mesmo não acontece
para quando se muda para pendentes, não aparece nada na tela.

5- Metodo de filtragem, onde se pega o array tarefas, e através de um swith case, faz comparação se a tarefa, está
completa ou pendente, logo após, retorna.

6- Os componentes com nomeclatura Tarefa, são respectivamente declarações de listas não ordenadas ul.

7- O fluxo utiliza um ternário para fazer a verificação do do estado tarefas, pegando e verificando a propridade completa
que possui dois valores bools, true or false, se true terá uma decoração de linha traçada, se false, o text decoration
não será aplicada. (pegando da props  completa={tarefa.completa}).

8- Imagino que essa forma de declaração é por conta do ids, não é apenas a chamada de uma função, mas uma chamada
de função, que recebe uma propriedade id, específica.*/

import React from 'react'
import styled from 'styled-components'
// import { isParenthesizedExpression } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

document.addEventListener("keypress", function(e) {
  if(e.key === 'Enter') {
  
      var btn = document.querySelector("#submit");
    
    btn.click();
  
  }
});

class App extends React.Component {
    state = {

      tarefas: [{
        id: Date.now(), // Explicação abaixo
        texto: 'Comer miojo',
        completa: false, // Indica se a tarefa está completa (true ou false)
      }],
      
      inputValue: '',
      filtro: ''
    }


// DidUptdate => toda vez que ocorrer mudança, colocamos o valor tarefas no local storage
  componentDidUpdate() {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));

  };

  componentDidMount() {
  const tarefas = localStorage.getItem("tarefas")
    // if(tarefas){
    //   const tarefasAdicionadas = localStorage.getItem("tarefas")
    //   const converteDados = JSON.parse(tarefasAdicionadas)
    //   this.setState({id: converteDados[0]?.id})
    //   this.setState({texto: converteDados[0]?.texto})
    //   this.setState({completa: converteDados[0]?.completa})
    // }


    const converteDados = JSON.parse(tarefas)
    this.setState({tarefas: converteDados})
  };



  //Busca e seta o valor que está sendo digitado em tempo real
  onChangeInput = (event) => {

    console.log(this.setState({inputValue: event.target.value }));

  }



// EVENTO/FUNÇÃO COPIA OBJETO TAREFAS (CHAMADA POR EVENTO ONCLICK),ESPELHA ARRAY ANTIGO, E
// ADICIONA NOVA TAREFA COM BASE NO INPUT CONTROLADO ATRAVÉS DO ATUALIZAÇÃO/SETAMENTO
  criaTarefa = () => {

    // console.log('Adicionar tarefa', this.state.inputValue) VERIFICA FUNCIONALIDADE FUNÇÃO

    const novaTarefa = {

    id: Date.now(),
    texto: this.state.inputValue,
    completa: false

  } //nova tarefa a ser adicionada

    const adicionaTarefa = [...this.state.tarefas, novaTarefa] //copia valor e adiciona novo

    this.setState({tarefas: adicionaTarefa}) // adiciona valor atualizado

  }



//Função que mapeia o array de tarefas, recebe uma propriedade id para cada tarefa e a compara com o id do array de
// tarefas (presente no state), se o id clicado, for o mesmo do state, muda o valor da propriedade completa
// se não, retorna toda o objeto tarefas sem mudança.

  selectTarefa = (id) => {

  console.log('Alterar tarefa', id)
  
  const novaListaTarefas = this.state.tarefas.map((tarefas) =>{
    if(id === tarefas.id){
      const copiaAntigoEaltera = {
        ...tarefas,
        completa: !tarefas.completa
        
      }
      return copiaAntigoEaltera
    } else {
      return tarefas
    }
  })

  this.setState({tarefas: novaListaTarefas})
 
  }


// apenas acessa o valor que está no momento na option, lógica de troca, ja foi criada

  onChangeFilter = (event) => {

    console.log(this.setState({filtro: event.target.value }));
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>

        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa} id='submit'>Adicionar</button> 
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa, index) => {
            return (
              <Tarefa
                completa={tarefa.completa}  //Props contendo valor de tarefa.completa e sendo utilizada no styled
                onClick={() => this.selectTarefa(tarefa.id)} //Props onClick
                key={index}
              >
                {tarefa.texto} 
                <button>Alterar conclusão</button>
                
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
