import React, { useState } from "react";
import '../styles/components/pages/ContactoPage.css';
import axios from 'axios';
const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending,setSending] = useState(false);
    const [msg,setMsg] = useState('');
    const [formData,setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name,value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
        axios.post('http://localhost:3000/api/contacto',formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder">
            <div className="columna left">
                <h2> Contacto Rapido </h2>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="">Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                        <label for="Comentario">Comentario</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar" /> </p>
                </form>

                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

            </div>
            <div className="columna right">
                <h2>Otras vias de contacto</h2>
                <p>Tambien se pueden comunicar con nosotros ....</p>
                <ul>
                    <li>Telefono:</li>
                    <li>Email:correo@hotmail.com.ar</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Instagram:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;