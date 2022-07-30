import React from "react";
import logo from './../../assets/images/logo.png'
import { DivContainer} from "./style";
import { useNavigate } from "react-router-dom";
import goToPage from "../../routes/coordinator";
import frase from './../../assets/images/frase-logo.png'

const HeaderLogin = () => {

  const Navigate = useNavigate()  


  return (
    <DivContainer>

       <img src={logo} onClick={()=>goToPage(Navigate,'')}></img>
        <p>Labeddit</p>
    </DivContainer>
  );
};
export default HeaderLogin;
