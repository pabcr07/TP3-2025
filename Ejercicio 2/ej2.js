const lista = ["manzana","banana","pera","durazno","frutilla","mango"]

const filtro = document.getElementById("filtro")

filtro.addEventListener("click",(e)=>{
    e.preventDefault()

    const palabra = document.getElementById("text").value.trim().toLowerCase()
    const error = document.getElementById("error")


    if(palabra === ""){
        error.innerText = "Error, ingrese una palabra"
        return
    }else{
        error.innerText = ""
    }
    
   
    const filtrado = lista.filter((busqueda)=>{
            return busqueda.includes(palabra)
    })
    
    if(filtrado.length > 0){
            const listaFiltrada = document.createElement("ul")
            document.body.appendChild(listaFiltrada)
            listaFiltrada.innerText = filtrado[0]
          
    } 
    
})