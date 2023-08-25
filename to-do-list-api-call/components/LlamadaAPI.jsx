import React, {useState, useEffect} from 'react'

const LlamadaAPI = () => {


    const [datosAPI, setDatosAPI] = useState([])
    
    useEffect(() => {
        llamada()
    }, [])
    
    const llamada = async () => {
        try {
        const api = await fetch('https://dummyjson.com/todos?limit=15');
        const datos = await api.json();
        setDatosAPI(datos.todos)
        } catch (error) {
            console.log("error", error)
        }

    }
    const showDataAPI = datosAPI.map((elementoActual,index,array)=>{
      return(
           <li key={elementoActual.id}>{elementoActual.todo}</li>
      )
  })
    
  return (

        <>
        <div>
          <h4>Listado de elementos:</h4>
          <ul>
            {showDataAPI}
          </ul>
        </div>
        </>
  )
}

export default LlamadaAPI