import { useEffect, useState } from "react"
import { getAll } from "../Services/articulosServices";
import Articulo from "../Component/Articulo"
import {Row,Form} from 'react-bootstrap';
import Paginacion from "../Component/Paginacion";
import Loading from "../Component/Loading";
import { useContext } from "react";
import { BuscadorContext } from "../Context/BuscadorContext";

const style = {
    inputStyle:{
        maxHeight:"40px",
        width:"50%"
    },

    botonStyle:{
        maxHeight:"40px"
    },

    formStyle:{
        height:"100%",
        marginLeft:"15px"
    }
}

function Home(){
    const titulo="Listado de Productos      "
    const [articulos,setArticulos] = useState([])
    const [paging,setPaging] = useState({})
    const [isLoading,setLoading] = useState(true)
    const context=useContext(BuscadorContext)
    const [limite,setLimite]=useState(10)
    const [offset,setOffset]=useState(0)
    const [paginaAct,setpaginaAct]=useState(0)

    const handelLimite= (event)=>{
        setLimite(event) 
        setOffset(0)
        setpaginaAct(0)
    }

    useEffect(
        ()=>{
            const result = async ()=>{
                try{
                    setLoading(true)
                    const responseDatos = await getAll(context.buscarDefi,limite,offset)
                    setPaging(responseDatos.paging)
                    setArticulos(responseDatos.results)
                    setLoading(false)
                }catch(e){
                    console.log(e)
                }
            }
            result()
        },
        [context.buscarDefi,limite,offset]
    )

    const handlePagination = (pagina)=>{
        setpaginaAct(pagina)
        let offsetAct=pagina*limite
        setOffset(offsetAct)
    }

    return(
        <div>
            <div className="input-group" style={{marginBottom:"10px"}}>{/*Este div es para el Encabezado*/}
                <h1 style={{marginRight:"4%"}}>{titulo}</h1>
                <h5 style={{marginLeft:"200px",marginTop:"10px"}}>Cantidad de Productos Visualisados</h5>
                <Form.Group className="mb-3" style={{height:"35px",marginTop:"5px"}}>{/*Este Select Elige El limite de productos*/}
                    <Form.Select style={style.formStyle} onChange={(event)=>handelLimite(event.target.value)}>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>50</option>
                    </Form.Select>
                </Form.Group>
            </div>
            <Loading loading={isLoading}>{/*Si no cargo la informacion Muestra el spinner*/}
                <div>           
                <Row>
                    {articulos?.map(articulo => <Articulo key={articulo.id} {...articulo}/>)}
                </Row>
                <Paginacion totalProductos={paging.total} limite={paging.limit} paginaAct={paginaAct} handlePagination={handlePagination}/>
                </div>{/*Si cargo la informacion la muestra yendo a el componente Articulo y hace una paginacion de los articulos*/}
            </Loading>
        </div>
    )
}


export default Home