import React, { useState } from 'react'

export const EjemploEvento = () => {

  const [value, setValue] = useState('Edwin');
  const [greatting, setGreatting] = useState('Bienvenido');

  const handleEvent = () => {
    setGreatting('Hola '+value)
  }

  return (
    <div className='container-events'>
      <h3>{greatting}</h3>
      <input onChange={ (event)=> setValue(event.target.value)} id='txt-into' className='' type="text" />
      <button onClick={handleEvent} className='btn-greatting'>Saludar</button>
    </div>
  )
}