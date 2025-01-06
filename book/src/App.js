import Header from './componentes/header';
import styled from 'styled-components'
import Busca from './componentes/busca/index';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
function App() {
    return (
      <AppContainer>
        <Header/>
        <Busca></Busca>
      </AppContainer>
  );
}

export default App