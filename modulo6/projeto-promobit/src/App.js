import Header from './Components/Header/Header';
import Router from './Routes/Router'
import Provider from './Global/GlobalState';
import { GlobalStyle } from './Global/GlobalStyle'

export default function App() {

  return (

    <Provider>
      <Header/>
      <Router/>
      <GlobalStyle/>
    </Provider>

  )
}
