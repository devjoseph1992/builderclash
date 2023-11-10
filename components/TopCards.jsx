import React from 'react'
import CardBGX from './CardBGX';
import CardBGC from './CardBGC';
import CardBP from './CardBP';

const TopCards = () => {

  return (
    <div className='grid lg:grid-cols-6 gap-4 p-4'>
        <CardBGX/>
        <CardBGC/>
        <CardBP/>
    </div>
  )
}

export default TopCards