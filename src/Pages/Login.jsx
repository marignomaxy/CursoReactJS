import { useForm } from "react-hook-form";
import AlertCustom from "../Component/AlertCustom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import firebase from '../Config/firebase';
import { useState,useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { loginMensaje } from "../Utils/errorMensaje";
import { AuthContext } from "../Context/AuthContext"


function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [alert,setAlert] = useState({variant:'',text:''})
    const navigate = useNavigate()
    const context = useContext(AuthContext)
    const onSubmit = async data => {
        try {
            const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
            console.log(responseUser.user.uid)
            if(responseUser.user.uid){
                const userDocument= await firebase.firestore().collection("usuarios").where("userId","==",responseUser.user.uid).get()
                const user = userDocument.docs[0].data()
                setAlert({variant:'success',text:`Bienvenido ${user?.name}`})
                context.handlerLogin(user)
                setTimeout(()=>{
                    navigate("/")
                },2000)

            }

        } catch (e) {
            console.log(e)
            setAlert({variant:'danger',text:loginMensaje[e.code]||'Ha ocurrido un error'})

        }
    }


    return(
        <div>
            <AlertCustom {...alert}/>
            <Form onSubmit={handleSubmit(onSubmit)} style={{textAlign:"center"}}>
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
                <Button variant="primary" type="submit">Ingresar</Button>
            </Form>    
        </div>
    )
}

export default Login