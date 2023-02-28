import React, { useState,useEffect,useContext } from 'react'

export const EjemploEvento = () => {


  const [value, setValue] = useState('');
  const [greatting, setGreatting] = useState('aqui veras tu tweet');
  const [wordCount, setWordCount] = useState(255);
  // const { text } = useContext(TextContext);
  const handleEvent = () => {setGreatting(value )}
function countWords(text) {
  return text.trim().split(/\s+/).length;
}

  return (
    <>
      <h1>Generador de tweets</h1>
      <div>
      <h2>publica tus tweets</h2>
      <hr />
      <div>
      <textarea  onChange={ (event)=> setValue(event.target.value)} id='txt-into' className='Txt-area' type="text"></textarea>
      </div>
      <p >te quedan {wordCount} </p>
      <button onClick={handleEvent} className='btn-greatting'>publicar</button>
      <button onClick={handleEvent} className='btn-greatting'>archivar</button>
      <button onClick={handleEvent} className='btn-greatting'>mostrar archivos</button>
      </div>
      <h3>{greatting}</h3>
    </>
  )
}