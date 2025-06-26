const endpoint = "https://jsonplaceholder.typicode.com/todos"
const button = document.getElementById("carga")

button.addEventListener("click", async()=>{
    const res = await fetch(endpoint)
    if (!res.ok) {
            console.log ("Hubo un problema")
          return;
        }
        const data = await res.json()


if (data && data.length >0){
        const completadas = data.filter(tarea => tarea.completed === true);
        completadas.forEach(tarea => {
            const lista = document.createElement("ul")
            lista.innerText = `${tarea.id} , ${tarea.title}`

            document.body.appendChild(lista)
            
            
        });

}})