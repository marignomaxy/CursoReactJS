import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getByIdProductos } from "../Services/articulosServices";
import { Button} from "react-bootstrap";
import AlertCustom from "../Component/AlertCustom";
import Loading from "../Component/Loading";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Compra() {
    const {id}= useParams()
    const [Articulo,setArticulo] = useState({})
    const [isLoading,setLoading] = useState(true)
    const [compro,setCompro]=useState(false)
    const context=useContext(AuthContext)
    const [alert,setAlert] = useState({variant:'',text:''})

    useEffect(
        ()=>{
            const result = async ()=>{
                try{
                    const responseDatos = await getByIdProductos(id)
                    setArticulo(responseDatos)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                }
            }
            result()
        },
        [id]
    )

    const handleCompra= ()=>{
        setCompro(true)
        if(context.login){
            setAlert({variant:'success',text:`Gracias Por Su Compra ${context.user?.name}`})
        }else{
            setAlert({variant:'danger',text:`Para Realizar La Compra Debe Loguearse`})
        }
    }

    return(
        <div>
            <h1>Finalizar Compra</h1>
            <Loading loading={isLoading}>
            <div style={{textAlign:"center"}}>
                {compro && <AlertCustom {...alert}/>}  
                <h3>{Articulo.title}</h3>
                <img src={Articulo.thumbnail} alt="Imagen Celular"></img>
                <p>Usted Esta por comprar este producto</p>
                <p>Id del Producto:{Articulo.id}</p>
                <h2>Precio:${Articulo.price}</h2>
                <Button onClick={()=>{handleCompra()}}>Confirmar Compra</Button>
            </div>
            </Loading>

            
        </div>
    )
}

export default Compra