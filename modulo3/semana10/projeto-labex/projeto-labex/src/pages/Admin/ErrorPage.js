import React from 'react'
import {DivContainer, GlobalStyle, Main, ErrorMessage} from './../../style/ErrorPageStyle'




function ErrorPage() {

  return (



    <DivContainer>
        <GlobalStyle/>
        <Main>
        <ErrorMessage>PAGE NOT FOUND</ErrorMessage> 
        <ErrorMessage>ERROR 404</ErrorMessage>
        </Main>
        
        
        </DivContainer>
  )
}

export default ErrorPage