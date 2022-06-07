import React from 'react';
import styled from 'styled-components'

function ImagemButton(props) {

    const ImageButtonContainer = styled.div`

        display: flex;
        align-items: center;
        border: 1px solid black;
        border-radius: 50px;
        width: 200px;
        padding: 15px 30px;
        margin: 10px auto;`
    
    
    const ImageButtonContainer2 = styled.img`
        width: 30px;
        margin-right: 10px;
    `
    
    return (
        <ImageButtonContainer>
            <ImageButtonContainer2 src={ props.imagem }/>
            <p>{ props.texto }</p>
            
        </ImageButtonContainer>

    )
}

export default ImagemButton;