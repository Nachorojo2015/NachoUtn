import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
}

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);

const handleChange = e => {
    const { name, value } = e.target;
    setFormData(oldData => ({
        ...oldData,
        [name]: value
    }));
}

const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    setSending(true);
    const response = await axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
        setFormData(initialForm)
    } 
}

    return (
        <main className='holder-contacto'>
            <div className='holder-C'>
                <h2>Contacto</h2>
                <form action='/contacto' method='post' onSubmit={handleSubmit} className='formulario'>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}></input>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    <p className='acciones'><input type="submit" value="Enviar"></input></p>

                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}

                <div className='Otros-medios'>
                    <h3>También podes contactarme por:</h3>
                    <ul>
                        <li>Tel: 011-27603533</li>
                        <li>Nachorojo2015@gmail</li>
                        <li>Facebook:</li>
                        <li>Twitter:</li>
                        <li>Instagram:</li>
                    </ul>
                </div>
            </div>
        </main>

    );
}

export default ContactoPage;