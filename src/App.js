import React, { useRef, useEffect, useState } from 'react';

function App() {
  const inputRef = useRef()
  const count = useRef(1)
  const [value, setValue] = useState(false)

  const handleClick = () => {
    inputRef.current.focus()    
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('passou')
      count.current = 300
      setValue(true)
    }, 3000)
  })

  return (
    <>
      <h2>Contador: {count.current}</h2>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Focar</button>
    </>
  )
}

export default App
