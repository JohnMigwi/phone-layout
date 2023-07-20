import React, { useState } from 'react'
import UpperBody from './UpperBody';
import MiddleBody from './MiddleBody'
import LowerBody from './LowerBody';

const Body = () => {
  const [analytics, setAnalytics] = useState(false);
  const handleAnalytics = ()=>{
    if(analytics){
      setAnalytics(false)
    }
    else{
      setAnalytics(true)
    }
  }

  return (
    <section className='bodySection'>
        <UpperBody handleAnalytics={handleAnalytics} analytics={analytics}/>
        <MiddleBody analytics={analytics}/>
        <LowerBody/>
    </section>
  )
}

export default Body