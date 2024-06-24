import Tarea from "./Tarea"

const ListaTareas = ({tareas})=>{
    return(
        <>
    {tareas.map((tareaHacer,index)=>(
        <Tarea
            key={index}
            titulo={tareaHacer.titulo} /*titulo de los paremetros de la tarea*/
        />
        ))}
        </>
    )
}
export default ListaTareas





 /* LA PROPIEDAD TAREAS DEBE HACER EL MAP. LLAMANDO AL COMPONENTE Tarea, para renderizar
         todas las tareas. */