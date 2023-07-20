import React from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header'; 
import Footer from './Components/Footer';

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