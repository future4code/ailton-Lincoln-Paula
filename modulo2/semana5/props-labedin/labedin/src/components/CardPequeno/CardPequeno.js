import styled from 'styled-components'
import React from 'react'

const CardPequeno = (props) => {
    const SmallCardContainer = styled.div`
        display: flex;
        align-items: center;
        border: 1px solid black;
        padding: 20px 10px;
        margin-bottom: 10px;
        height: 200px;
        width: 510px;`

    const SmallCardContainerImage = styled.img`
        width: 70px;
        margin-right: 10px;
        border-radius: 50%;`

    const SmallCardContainerH4 = styled.h4`
       margin-bottom: 15px;`

    const SmallCardContainerDiv2 = styled.div`
    display: flex;`

    const SmallCardContainerP= styled.p`
    display: inline;
    padding-left: 5px;` 


    return (
        <SmallCardContainer>
            <SmallCardContainerImage src={ props.imagem } />
            <SmallCardContainerDiv2>
                <SmallCardContainerH4>{ props.titulo }</SmallCardContainerH4>
                <SmallCardContainerP>{ props.conteudo }</SmallCardContainerP>
            </SmallCardContainerDiv2>
        </SmallCardContainer>
    )
}

export default CardPequeno