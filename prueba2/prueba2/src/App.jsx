import React, { useState,useEffect,useContext } from 'react'

export const EjemploEvento = () => {


  const [value, setValue] = useState('');
  const [greatting, setGreatting] = useState('aqui veras tu tweet');

  const handleEvent = () => {
    setGreatting(value )
  }

  return (
    <>
      <h1>Generador de tweets</h1>
      <div>
      <h2>
        publica tu tweet
      </h2>
      <hr />
      <div><textarea onChange={ (event)=> setValue(event.target.value)} id='txt-into' className='' type="text"></textarea></div>
      <button onClick={handleEvent} className='btn-greatting'>publicar</button>
      <button onClick={handleEvent} className='btn-greatting'>archivar</button>
      <button onClick={handleEvent} className='btn-greatting'>mostrar archivos</button>
      </div>
      <h3>{greatting}</h3>
    </>
  )
}