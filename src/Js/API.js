//GET

const obtenerDatos = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/task")
        const data = await response.json() 
       
         return data
    } catch (error) {
        console.log(error)
    }
}

//UseEffect



//POST

const guardarDatos = async (tarea) => {
    try {
       
        const respuesta = await fetch("http://localhost:3000/api/task", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let datosG = await respuesta.json()
        console.log(datosG);

    } catch (error) {
        console.log(error)
    }
}

// DELETE

const eliminarTarea = async (id) => {

    try {
        fetch(`http://localhost:3000/api/task/${id}`, {
            method: "DELETE",
        })
    }catch (error){
console.log(error);
    }
}


//PUT

const cambiarDatos = async (tarea) => {
    try {
       
        tarea.state=!tarea.state;

        const respuesta = await fetch(`http://localhost:3000/api/task/${tarea.id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let datosG = await respuesta.json()
        console.log(datosG);

    } catch (error) {
        console.log(error)
    }
}
export {obtenerDatos,guardarDatos,eliminarTarea, cambiarDatos}