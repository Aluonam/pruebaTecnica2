import React from 'react'

const LlamadaAPI = () => {

    const llamada = async () => {
        const api = await fetch('https://dummyjson.com/todos?limit=15');
        const datos = await api.json();
        console.log(datos[1])
        

    }
llamada()
  return (
    <div>LlamadaAPI</div>
  )
}

export default LlamadaAPI