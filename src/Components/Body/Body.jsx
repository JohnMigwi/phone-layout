import React from 'react'
import UpperBody from './UpperBody';
import MiddleBody from './MiddleBody'
import LowerBody from './LowerBody';

const Body = () => {
  return (
    <section className='body-section'>
    <UpperBody/>
    <MiddleBody/>
    <LowerBody/>
    </section>
  )
}

export default Body