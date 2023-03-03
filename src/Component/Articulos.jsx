import Row from 'react-bootstrap/Row'
import Articulo from "../Component/Articulo"

function Articulos(props) {
    <Row>
    {props.articulos.map(articulo => <Articulo key={props.articulos.id} {...props.articulos}/>)}
    </Row>
}

export default Articulos
