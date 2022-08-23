const ContactoPage = (props) => {
    return (
        <div>
            <section class="imagen-contacto">
                <img src="https://s1.1zoom.me/b6949/306/Coast_Roads_Changan_White_Metallic_Chinese_590046_3840x2160.jpg" alt="" />
                <h1 class="H-contacto">CONTACT US</h1>
                <p class="P-contacto">There´s nothing we like more than rolling uo our seelves and starting a brand new project. Let´s make something grate together</p>
            </section>

            <div className="container-contact">

                <section class="form-register">
                    <h4>Formulario Registro</h4>
                    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre" />
                    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido" />
                    <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo" />
                    <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña" />
                    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
                    <input class="botons" type="submit" value="Registrar" />
                    <p><a href="#">¿Ya tengo Cuenta?</a></p>

                </section>

                <div class="contact">
                    <h4>OTROS MEDIOS</h4>
                    <span class="material-symbols-outlined">pin_drop</span><a href="#">202 W 7th St, Suite 233 Los Angeles, California 90014 USA</a>
                    <br />
                    <span class="material-symbols-outlined">call</span><p>Phone:</p><a href="#">1-800- 624-5462</a>
                    <br />
                    <span class="material-symbols-outlined">fax</span><p>FAX:</p><a href="#">1-800- 624-5462</a>
                    <br />
                    <span class="material-symbols-outlined">mail</span><p>Email:</p><a href="#">info@demolink.org</a>
                </div>
            </div>
        </div>

    );
}

export default ContactoPage;