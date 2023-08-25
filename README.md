# pruebaTecnica2

Título de la Prueba Técnica: Creación de una Aplicación de Lista de Tareas con API

Descripción:
Crea una aplicación de lista de tareas utilizando React que permita a los usuarios agregar, marcar como completadas y eliminar tareas. Las tareas se obtendrán de una API pública.

Requisitos:

Crea un nuevo proyecto de React utilizando Create React App u otra herramienta similar.
Utiliza una API pública de tareas, como JSONPlaceholder, para obtener los datos iniciales de las tareas.
Crea un componente funcional llamado TaskList que renderice una lista de tareas.
Implementa interactividad utilizando React:
Muestra la lista de tareas obtenida de la API.
Agrega la capacidad de marcar tareas como completadas y actualizar su estado en la API.
Agrega la capacidad de eliminar tareas y actualizar la lista en la API.
Utiliza el estado de React para manejar los datos y las interacciones.
Asegúrate de que la aplicación tenga un diseño básico y atractivo utilizando CSS.



```javascript
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
                <>
                 {elementoActual.todo}
                </>
            )
        })
    
    
  return (

// la API me devuelve un array. Lo recorro con .map() 
// que recibe el elementoActual y retorna una lista con el elementoActual y coge el elemento "todo" dentro del array
    <>
    <div>
      <h4>Listado de elementos:</h4>
      <ul>
        {datosAPI.map((e)=><li>{e.todo}</li>)}
      </ul>
    </div>
    </>
  )
}

export default LlamadaAPI
```
------------------------------------------------------------------------------------------

**Después el .map en el return se mete dentro de la parte lógica. Y se muestra directamente la función**

```javascript
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

    //Función para crear un elemento lista cada vez que se recorra el array con .map()
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
```


