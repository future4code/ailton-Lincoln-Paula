
import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
// import {iconeSalvarPreto} from '../../img/Salvar-Pub-White.png'



const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`


class Post extends React.Component {

  // PASSO 5, 6 E 7
  // ESTADO(STATE) INICIAL, ONDE FORAM DECLARADOS SEUS PRÉ-VALORES, E ATRIBUIDO NOVOS VALORES, AO LONGO DO CÓDIGO.

  // AO SER MUDADO OS VALORES NÚMEROS, AFETOU DIRETAMENTE A REPRESENTAÇAO DA CONTAGEM DE LIKES E COMENTARIOS DA 
  // APLICAÇÃO

  //O EVENTO ONCLICK, IMPRIMI NO CONSOLE, QUANDO CLICAMOS NO ICONE DE CURTIR A SEGUINTE MENSAGEM "CURTIU" E NO EVENTO2
  // ELE ABRE UM INPUT, ONDE PODE SER DIGITADO UM COMENTÁRIO

  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    valorComentario: '',
    curtidoSalvamento: false,
  }

 //2 e 3 IMPLEMENTAÇÃO

  onClickCurtida = () => {

  let guardaEstadoCurtido = this.state.curtido; 
   guardaEstadoCurtido = !guardaEstadoCurtido

    console.log('Curtiu!')
    this.setState({

      numeroCurtidas: +1,
      curtido: guardaEstadoCurtido
    })

  if (this.state.numeroCurtidas){
    this.setState({numeroCurtidas: this.state.numeroCurtidas -1})
  }
  else{
    this.setState({numeroCurtidas: this.state.numeroCurtidas +1})
  }
  }
  
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  onClickSalvamento = () => {
  this.setState({
    curtidoSalvamento: true})
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

// PASSO 2
//A DIFERENÇA NOTADA, FOI A IMPLEMENTAÇÃO DE UMA VARIAVEL, COM O USO DE CONDICIONAIS ATRELADAS.


    onChangeComentario = (event) => {
    this.setState({valorComentario: event.target.value})
  }



  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    // let iconeSalvar 

    // if(this.state.curtidoSalvamento){
    //   iconeSalvar = iconeSalvarPreto
    // }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }


    return <PostContainer>
    <PostHeader>
      <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
      <p>{this.props.nomeUsuario}</p>
    </PostHeader>

    <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>
 

{/* PASSO 3 
1ªAPARIÇÃO:
- ICONE COM CONTADOR, RECEBE ICONECURTIDA(IMAGEM DO CORAÇÃO) 

/ THIS.ONCLICKCURTIDA(LÓGICA DE EVENTO ONCLICK, ONDE É IMPRESSO NO CONSOLE QUE FOI CURTIDO O POST)

 / THIS.STATE.NUMEROCURTIDAS(NÚMERO REPRESENTATIVO DAS CURTIDAS CONTABILIZADAS) 

2ªAPARIÇÃO:
- ICONE COM CONTADOR, RECEBE ICONECOMENTARIO(IMAGEM DO COMENTARIO) 

/ THIS.ONCLICKCOMENTARIO(LÓGICA DO EVENTO ONCLICK, QUE DEIXOU O COMENTANDO COMO UM VALOR TRUE, ONDE É JOGADO NUMA 
  CONDICIONAL, QUE SE O COMENTÁRIO FOR DE FATO ENVIADO, ATUALIZARA O FALOR PARA FALSE, AO TAMBÉM SER CLICADO,
  COM O EVENTO ONCLICK, CHAMARA O COMPONENTE SECAOCOMENTARIO, QUE NADA MAIS É DO QUE UM INPUT
  E POR ÚLTIMO, CONTABILIZARÁ A CONTAGEM DE COMENTÁRIOS AO SER ENVIADO.) 

/ THIS.STATE.NUMEROCOMENTARIO (NÚMERO REPRESENTATIVO DOS COMENTÁRIOS CONTABILIZADOS)*/}

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

          {/* <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        /> */}

      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post