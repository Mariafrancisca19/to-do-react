import ListaTareas from "../Componentes/ListaTareas";
import {eliminarTarea,cambiarDatos } from "../Js/API";
import { useState, useEffect } from "react";


const Visualizacion=({lista})=>{
    return(
    <>
    {/* <ListaTareas tareas={data}/> */}
    {lista.map((tarea)=>(
    <div>
    <input type="checkbox" onChange={cambiarDatos}></input>
    <p>{tarea.titulo}</p>
    <button onClick={()=>eliminarTarea(tarea.id)}>eliminar</button>
    </div>
    ))}

    </>)
}
export default Visualizacion;
