import { BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public'
import Container from 'react-bootstrap/Container';
import Encabezado from './Component/Encabezado';
import './Component/Estilos.css'
import Footer from './Component/Footer';
import BuscadorProvider from './Context/BuscadorContext';
import AuthProvider from './Context/AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <BuscadorProvider>
            <Encabezado/>
            <Container>
              <Public/>
            </Container>
          </BuscadorProvider>  
        </AuthProvider>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
