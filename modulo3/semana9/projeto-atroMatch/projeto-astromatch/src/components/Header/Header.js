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

function Header(props) {
    
  return (

    <DivContainer>
      {/* {console.log(props)} */}
      <div>
        <h2>astroMatch</h2>
    <button onClick={() => props.setaTela('matches')}>Seus matches</button> 
      </div>
   
    <hr></hr>
    </DivContainer>

  )

}

export default Header