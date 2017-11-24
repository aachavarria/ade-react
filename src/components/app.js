import React from 'react'
import Personas from './persona/personaPage';
import Header from './Header/Header';
import Footer from './Footer/Footer';
require('../styles/app.scss');

const App = ({ children }) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
);

export default App;