

const Tarea = ({titulo,completado,eliminar})=>{
    return(
        <>
        
        <div className="contenedor-input">
            <from className="inpBtn">
                <input placeholder="Nueva Tarea" type="text"/>
                <button className="btnAgregar" onClick={guardarTarea}>Agregar</button>
            </from>
            <div>
                <input className="contador" type="texto"/>
            </div>
        </div>

        </>
    )
}
export default Tarea