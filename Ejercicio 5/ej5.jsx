const {useState} = React


function App(){

    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [operacion, setOperacion] = useState("suma")
    const [resultado, setResultado] = useState(0)

    const handleClick = (e)=>{
        e.preventDefault()

        switch (operacion) {
          case "suma":
            setResultado(Number(num1) + Number(num2)) 
            break;
          case "resta":
            setResultado(Number(num1) - Number(num2))
            break;
          case "multiplicacion":
            setResultado(Number(num1) * Number(num2))
            break;
          case "division":
            setResultado(Number(num1) / Number(num2))
            break;
        }
      };


    return(
        <>
            <form>
                <label>Numero 1</label>
                <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}></input>
                <label>Numero 2</label>
                <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}></input>
                <select value={operacion} onChange={(e)=>setOperacion(e.target.value)}>
                    <option value="suma">Suma</option>
                    <option value="resta">Resta</option>
                    <option value="multiplicacion">Multiplicacion</option>
                    <option value="division">Division</option>
                </select>
                <button onClick={handleClick} disabled={(operacion == "division" & num2 == 0)}>Calcular</button>

                <p>{resultado}</p>
            </form>
        </>
    )}
