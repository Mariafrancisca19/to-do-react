import { useState,useEffect } from 'react'
import './App.css'
//import Tarea from './Componentes/Tarea'
//import Titulo from './Componentes/titulo'
//import ContenedorTareas from './contenedorTareas'
import { obtenerDatos } from './Js/API'
import { guardarDatos } from './Js/API'
import ListaTareas from './Componentes/ListaTareas'
import Visualizacion from './Validaciones/Visualizacion'


function App() {
  const [tituloTarea,setTituloTarea]=useState("")
  const [listaTareas,setListaTareas]=useState(false)

  const [data,setData]= useState([])
  useEffect(()=>{
      const traerDatos=async()=>{
          const datos = await obtenerDatos();
          setData(datos)
          }
          traerDatos()
  },[data])

  const agregarTarea = async(e)=>{
    try {
      e.preventDefault()
      let tarea = {
        titulo:tituloTarea
      }
      await guardarDatos(tarea)
      setListaTareas(!listaTareas);
    } catch (error) {
      console.log(error);
    }
  }
    
  /*<div className='div-contenedor'>
      <div className='contenedor'>
        <Titulo/>
        <Tarea/>
        <ContenedorTareas/>
      </div>
    </div>*/
  return (
      <>
        <h1> Lista Tareas</h1>
        <input type='text' placeholder='ingrese su tarea' onChange={(e)=> setTituloTarea(e.target.value)}></input>
        <button onClick={agregarTarea}>Agregar Tarea</button>
        <Visualizacion lista={data}/>
 
      </>
      
  )
}

export default App
