import React from 'react'
import styled from 'styled-components'



const DivContainer = styled.div`

    height: 10%;
    background-color: bisque;
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`


// const Text = styled.h2`

// margin: 0;
// paddin

// `

function Header() {
    
  return (

    <DivContainer>
    <h2>astroMatch</h2>
    <hr></hr>

    </DivContainer>

  )

}

export default Header