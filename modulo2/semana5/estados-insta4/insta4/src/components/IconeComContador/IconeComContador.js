import React from 'react'
import styled from 'styled-components'


const IconContainer = styled.div`
	display: flex;
`
const IconImage = styled.img`
	margin-right: 5px;
	width: 25px;
	height: 20px;
	margin-top: 10px;
`


// PASSO 4 - ESSE COMPONENTE, FOI UTILIZADO PARA REPRESENTAR AS DUAS INTERAÇÕES DO USUÁRIO COM A APLICAÇÃO,
// UTILIZADO DUAS VEZES, PARA REPRESENTAR OS ICONES: CORAÇÃO/COMENTÁRIO, A DESCRIÇÃO DAS IMAGEMS: ALT, E TAMBÉM
// PARA REPRESENTAR O EVENTO ONCLICK NAS DUAS POSSIVEIS INTERAÇÕES.

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</IconContainer>
}
