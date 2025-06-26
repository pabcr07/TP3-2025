const calc = document.getElementById("calc")
const operacion = document.getElementById("operacion")

operacion.addEventListener("change",(e)=>{
    const num2 = Number(document.getElementById("num2").value)

    if(e.target.value === "division" & num2 === 0){
        calc.disabled = true
    }
    else{
        calc.disabled = false
    }
})


calc.addEventListener("click",(e) =>{
    e.preventDefault()
    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const operacion = document.getElementById("operacion").value

    switch(operacion){
        case "suma":
            alert(num1+num2)
            break;
        case "resta":
            alert(num1-num2)
            break;
        case "multi":
            alert(num1*num2)
            break;
        case "division":
            alert(num1/num2)
            
            break;
    }
    

    
})