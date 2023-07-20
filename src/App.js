import React from 'react';
import './App.css';
import Header from './Components/Header/Header'; 
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <section className='phone'>
      <Header />
      <Body/>
      <Footer/>
    </section>
   
  );
}

export default App;