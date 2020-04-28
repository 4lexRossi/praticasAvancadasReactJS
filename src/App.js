import React from 'react';
import People from './People';

function App () {
  const handleClick = () => {
    console.log('Clicou')
  }

  return (
   <People
   dogs= {2}
   onClick={handleClick}
   />
  )
}

export default App
