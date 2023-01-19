import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import qclogo2 from './app/assets/logo/customcolor/full/qclogo2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
            <img src={qclogo2} alt='quinlan corals logo' />
          </NavbarBrand>
        </Container>
      </Navbar>
      I'm ready for workshop!
    </div>
  );
}

export default App;
