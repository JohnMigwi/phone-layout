import React from 'react';
import './App.css';
import Header from './Components/Header'; 
import MiddleBody from './Components/Body/UpperBody'
import Footer from './Components/Footer';

function App() {
  return (
    <section className='phone'>
      <Header />
      <MiddleBody/>
      <Footer/>
    </section>
   
  );
}

export default App;