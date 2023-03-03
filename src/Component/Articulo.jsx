import { Link } from "react-router-dom"
import {Button,Card,Col} from 'react-bootstrap';

const style ={

    imgStyle:{
        maxWidth:"95%",
        margin:"10px"
    }
}

function Articulo({
    id,
    price,
    title,
    thumbnail
}){
    return (
        <Col xs={12} sm={6} lg={4} xxl={3}>
            <Card>
                <Card.Img variant="top" src={thumbnail} style={style.imgStyle}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Precio:${price}
                    </Card.Text>
                    <Button as={Link} to={`/articulo/${id}`} variant="primary">Ver Detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}


export default Articulo