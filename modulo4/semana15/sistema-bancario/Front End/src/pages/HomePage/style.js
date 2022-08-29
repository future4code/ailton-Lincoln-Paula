import styled from "styled-components";
import bg from './../../assets/images/MaosUnidas.png'
import bg2 from './../../assets/images/maos.png'

export const DivBackground = styled.div`

background-image: url(${bg2});
background-size: cover;
background-repeat: no-repeat;
height: 60vh;
width: 100vw;
display: flex;
flex-direction: column;
/* justify-content: flex-end; */

h1{
    font-size: 35px;
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
    margin-left: 2%;
}
p{
    font-size: 20px;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 2px black;
    margin-left: 2%;
    b{
        text-shadow: 3px 3px 3px black;
    }
}
div{
    display: flex;
    flex-direction: column;
    margin-top: 30vh;
}
`

export const DivContarMain = styled.div`

height: 40vh;

`

export const DivCarousel = styled.div`

display: ${(props) => props.apparence} ;
background-color: ${(props) => props.color};
`