const { useState} = React;

function App(){
    const [btnActivo, setBtnActivo] = useState(true)
    

    const cambiarEstado = ()=>{
        setBtnActivo(!btnActivo)
    }
    

    return(
        <>
            <button onClick={cambiarEstado} disabled={!btnActivo}>Izquierdo</button>
            <button onClick={cambiarEstado} disabled={btnActivo}>Derecho</button>
        </>
    )
}