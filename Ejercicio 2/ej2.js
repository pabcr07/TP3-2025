const lista = ["manzana","banana","pera","durazno","frutilla","mango"]

const filtro = document.getElementById("filtro")

filtro.addEventListener("click",(e)=>{
    e.preventDefault()

    const palabra = document.getElementById("text").value.trim().toLowerCase()
    const error = document.getElementById("error")
    

    if(palabra === ""){
        error.innerText = "Error, ingrese una palabra"
    }else{
        error.innerText = ""
    }
   
    const filtrado = lista.filter((busqueda)=>{
        if(busqueda.includes(palabra)){
            return busqueda
        }

    })
    
    if(filtrado.length != 0){
        const listaFiltrada = document.createElement("ul")
        document.body.appendChild(listaFiltrada)
        listaFiltrada.innerText = filtrado
    }   
    
})