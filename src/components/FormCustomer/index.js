import React, {useState, useContext, useEffect} from 'react';
import {CartContext} from '../../context/cartContext';
import { Link } from 'react-router-dom';

const FormCustomer = () => {
    const {precioTotal, addCustomer}= useContext(CartContext);
    const [name, setName]= useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [email2,setEmail2] = useState(' ');
    const [valida, setValida] = useState(false);

    useEffect(()=>{
        if (email === email2){
            setValida(true);
        }
        else{
            setValida(false);
        }
    }, [email2]);

    const comprador= {name, phone, email}

    return ( 
        <>
            <h5>Completá tus datos para finalizar la compra</h5>
            <form className action="" >
                <input id="first_name2" type="text" class="validate" value={name}  required onChange={(e)=> setName(e.target.value)}/>
                <label class="active" for="first_name2">Nombre y Apellido</label>
                <input id="first_name2" type="text" class="validate" value= {phone} required onChange={(e)=> setPhone(e.target.value)}/>
                <label class="active" for="first_name2">Telefono</label>
                <input type= "text" value= {email} required onChange={(e)=> setEmail(e.target.value)}/>
                <label class="active" for="first_name2">E-mail</label>
                <input type= "text" value= {email2} required onChange={(e)=> setEmail2(e.target.value) }/>
                <label class="active" for="email2">Ingresa nuevamente el E-mail</label>
                <h6>Total a pagar = ${precioTotal()}</h6>
                {valida ? 
                    <Link to='/order'>
                    <button type= "submit" className="waves-effect waves-light btn red lighten-2 btn-large col s6" onClick={()=>addCustomer(comprador) } >
                        Finalizar compra
                    </button> </Link>: null }   
            </form>
        </>
     );
}
 
export default FormCustomer;