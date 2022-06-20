import React from 'react';
import styled from 'styled-components'

function CardGrande(props) {

    const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;`

    const BigCardContainerImage = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;`

    const BigCardContainerH4 = styled.h4`
    margin-bottom: 15px;`

    const BigCardContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;`

    return (

        <BigCardContainer>
            <BigCardContainerImage src={ props.imagem } />
            <BigCardContainerDiv>
                <BigCardContainerH4>{ props.nome }</BigCardContainerH4>
                <p>{ props.descricao }</p>
            </BigCardContainerDiv>
        </BigCardContainer>
    )
}

export default CardGrande;