import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../Config/firebase'
import { useState } from "react";
import AlertCustom from "../Component/AlertCustom";
import { registroMensaje } from "../Utils/errorMensaje";
import {useNavigate} from 'react-router-dom';

function Registro(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alerta,setAlert] = useState({variant:'',text:''})
    const navigate = useNavigate()
    const onSubmit = async data => {
        try {
            const responseData = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            if (responseData.user.uid) {
                // eslint-disable-next-line no-unused-vars
                const document = await firebase.firestore().collection("usuarios").add({
                    name:data.name,
                    lastname:data.lastname,
                    userId:responseData.user.uid
                })
                setAlert({variant:'success',text:'Registrado Satisfactoriamente'})
                setTimeout(()=>{
                    navigate("/login")
                },2000)
            }
        } catch (e) {
            setAlert({variant:'danger',text:registroMensaje[e.code]||'Ha ocurrido un error'})
        }
    }


    return(
        <div>
            <AlertCustom {...alerta}/>
            <Form onSubmit={handleSubmit(onSubmit)} style={{textAlign:"center"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Nombre" {...register("name",{ required: true })} />
                    <Form.Text className="text-muted">
                        {errors.name && <span>El Campo Es Oblitorio</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese Apellido" {...register("lastname",{ required: true })} />
                    <Form.Text className="text-muted">
                        {errors.lastname && <span>El Campo Es Oblitorio</span>}
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese Email" {...register("email",{ required: true })} />
                    <Form.Text className="text-muted">
                        {errors.email && <span>El Campo Es Oblitorio</span>}
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Ingrese Contraseña" {...register("password",{ required: true,minLength:6 })} />
                    <Form.Text className="text-muted">
                        {errors.password?.type==="required" && <span>El Campo Es Oblitorio</span>}
                        {errors.password?.type==="minLength" && <span>Debe Colocar 6 Caracteres</span>}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">Registrarse</Button>
            </Form>    
        </div>
    )
}

export default Registro