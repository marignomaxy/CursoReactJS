import Pagination from 'react-bootstrap/Pagination';

function Paginacion(props) {
    let active = props.paginaAct;
    let items = [];
    for (let number = 0; number <= 15; number++) {
        items.push(
        <Pagination.Item onClick={()=>{props.handlePagination(number)}} key={number} active={number === active}>
            {number}
        </Pagination.Item>,
        );
    }
    return(
        <div className='paginacion'>
        <Pagination>
        {items}
        </Pagination>
        </div>
    )
        
    
}

export default Paginacion;