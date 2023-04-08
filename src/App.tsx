import './App.css';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Área administrativa</Titulo>
      </Container>
    </>
  );
}

export default App;