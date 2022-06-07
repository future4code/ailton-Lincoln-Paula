import React from 'react';
import styled from 'styled-components';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import home from './images/home.png';
import mail from './images/mail.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://imge.cloud/images/2022/06/07/rKmlif.png" 
          nome="Lincoln Ribeiro" 
          descricao="Oi, eu sou o Lincoln, tenho 21 anos e sou estudante de desenvolvimento web na Labenu, e desejo me tornar um desenvolvedor full-stack no futuro ;D"
        />
        
        <a href="#ButtonVerMais">
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png" 
          texto="Ver mais"
        />
        </a>

      </div>
          <div id='ButtonVerMais'>
          <CardPequeno 
          imagem= {home} 
          titulo="Endereço: "
          conteudo=" Santos Dumont, Minas Gerais, Rua Alagoas"/>

          <CardPequeno
          imagem= {mail}
          titulo="Email: "
          conteudo=" lincoln20012@outlook.com"/>
          </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://cdn.onlinewebfonts.com/svg/img_189068.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://icon-library.com/images/code-icon-png/code-icon-png-5.jpg" 
          nome="Defeitos" 
          descricao="Meu maior defeito as vezes é o meu desvio de foco e um pouco da minha ansiedade, tento ao máximo controlar minha ansiedade e prestar mais atenção,
          mas sempre acabo me distraindo as vezes, to melhorando isso cada dia que passa, pra me tornar um profissional/pessoa melhor !" 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <a href="https://www.facebook.com/linkinhu" target="_blank">
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />
        </a>        


       <a href="https://twitter.com" target="_blank">
        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />
        </a>

      </div>
    </div>
  );
}

export default App;
