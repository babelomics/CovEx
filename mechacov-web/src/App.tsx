import React from 'react';
import 'typeface-roboto';
import { BrowserRouter as Router} from 'react-router-dom';

import MenuToolbar from './components/menuToolbar/MenuToolbar'
import Footer from './components/footer/Footer'

//Routes
import Routes from './Routes';

function App() {
  return (
    <Router>
      <MenuToolbar />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;