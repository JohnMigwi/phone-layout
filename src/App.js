import React from 'react';
import './App.css';
import Header from './Components/Header/Header'; 
import MiddleBody from './Components/Body/UpperBody'
import Footer from './Components/Footer/Footer';

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