import { getByIdProductos, getDescription } from "../Services/articulosServices"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import {Carousel,Button} from 'react-bootstrap';
import Loading from "../Component/Loading";



function Detalle(){
    const {id}= useParams()
    const [articulo,setArticulo] = useState({})
    const [isLoading,setLoading] = useState(true)
    const [descripcion,setDescripcion]=useState({})

const styles = {
    imgCarousel:{
        margin: "0 auto",
        maxWidth: "188px"
    },
    carouselContainer:{
        height: "400px",
        overflow: 'hidden'
    }
}

    useEffect(
        ()=>{
            const result = async ()=>{
                try{
                    const responseDatos = await getByIdProductos(id)
                    const responseDescripcion=await getDescription(id)
                    setDescripcion(responseDescripcion)
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

        return(
            <Loading loading={isLoading}>
                <div style={{textAlign:"center"}}>
                    <h1>{articulo.title}</h1>
                    <Carousel style={styles.carouselContainer} variant='dark'>
                        {articulo?.pictures?.map(arti =>
                        <Carousel.Item style={{backgroundColor:"white"}} key={arti.id}>
                            <img
                                className="d-block w-100"
                                src={arti.url}
                                alt="First slide"
                                style={styles.imgCarousel}
                            />
                        </Carousel.Item>)}
                    </Carousel>
                    <p>{descripcion.plain_text}</p>
                    <h2>Precio:${articulo.price}</h2>
                    <Button as={Link} to={`/compra/${id}`} variant="primary">Comprar</Button>
                    
                </div>
            </Loading>
        )
}


export default Detalle