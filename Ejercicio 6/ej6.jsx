const {useState} = React


function App(){
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)
    const [imc, setImc] = useState()

    const handleButton = ()=>{
        const kilos = parseFloat(peso)
        const metros = parseFloat(altura)
        setImc((kilos/metros**2).toFixed(2))
       
    }
    return(
        <>
            <p>Ingrese su peso en kilogramos: </p>
            <input value={peso} type="number" onChange={(e)=>setPeso(e.target.value)}></input>

            <p>Ingrese su altura en metros: </p>
            <input value={altura} type="number" onChange={(e)=>setAltura(e.target.value)}></input>

            <button onClick={handleButton}>Calcular IMC</button>
            {imc < 18.5 &&<p style={{ color: 'gold' }}>Su IMC es: {imc}. Nivel bajo de IMC</p>}
            {imc >=18.5 && imc <=24.99 &&<p style={{ color: 'green' }}>Su IMC es: {imc}. Nivel normal de IMC</p>}
            {imc >=25 && imc <=29.99 &&<p style={{ color: 'orange' }}>Su IMC es: {imc}. Sobrepeso</p>}
            {imc >= 30 &&<p style={{ color: 'red' }}>Su IMC es: {imc}. Obesidad</p>}
            
        </>
    )
    

}