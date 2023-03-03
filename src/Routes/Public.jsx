import {Route, Routes } from 'react-router-dom';
import Compra from '../Pages/Compra';
import Detalle from '../Pages/Detalle';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registro from '../Pages/Registro'

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/articulo/:id' element={<Detalle/>}/>
            <Route path='/register' element={<Registro/>}/>
            <Route path='/compra/:id' element={<Compra/>}/>
        </Routes>
    )
}

export default Public