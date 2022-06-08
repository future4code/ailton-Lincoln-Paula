import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>


{/* PASSO1 */}
{/* COMPONENT POST ABAIXO É FILHO DO COMPONENT CLASS APP*/}
        <Post
          nomeUsuario={'Labenu'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/199/150'}
        />

{/* 1ºIMPLEMENTAÇÃO */}
        <Post
          nomeUsuario={'Indio'}
          fotoUsuario={'https://picsum.photos/49/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Lincoln'}
          fotoUsuario={'https://picsum.photos/48/50'}
          fotoPost={'https://picsum.photos/201/150'}
        />
      </MainContainer>
    );
  }
}

export default App;
