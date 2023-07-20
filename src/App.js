import React from 'react';
import './App.css';
import Header from './Components/Header'; 
import Body from './Components/Body/UpperBody'
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