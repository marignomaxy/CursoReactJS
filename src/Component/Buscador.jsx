import { useContext } from "react"
import { BuscadorContext } from "../Context/BuscadorContext"
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"

function Buscador() {
    const context=useContext(BuscadorContext)
    const navigate=useNavigate()
    const style = {
        inputStyle:{
            maxHeight:"40px",
            width:"75%",
            borderRadius: "38px",
            marginTop:"8px",
            textAlign:"center"
        },

        formStyle:{
            height:"100%",
            marginLeft:"15px"
        }
    }

    const onClick = ()=>{
        context.setBuscarDefi(context.buscar)
        navigate("/")
    }

    return(
        <div className="buscador" expand="lg">{/*Este div es para el buscador*/}
            <input type="text" value={context.buscar} onChange={(event)=>context.setBuscar(event.target.value)} style={style.inputStyle}></input>
            <Button onClick={()=>{onClick()}}>Buscar</Button>
        </div>
    )
}

export default Buscador