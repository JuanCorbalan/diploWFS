import React from "react";

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2> Contacto Rapido </h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label for="">Email</label>
                        <input type="text" name="email" />
                    </p>
                    <p>
                        <label for="">Telefono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label for="Comentario">Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar"/> </p>
                </form>
            </div>
            <div className="columna datos">
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