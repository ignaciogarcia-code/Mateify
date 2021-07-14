import './Form.css';
import Padlock from './Padlock.png';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';

function Register() {

  const [state, setState] = useState({ correo: "", contra: "" });
  let history = useHistory();

  const validaCorreo = (event) => {
    let mail = document.getElementById('mail').value;
    let fail = "";
    if (mail.length < 1) {
      fail = <h1>Debes completar el correo</h1>
      setState({ correo: fail });
    }

  }
  const validaContra = (event) => {
    let password = document.getElementById('password').value;
    let fail = "";
    if (password.length < 1) {
      fail = <h1>Debes completar la contraseña</h1>
      setState({ contra: fail });
    }

  }

  const enviarForm = (e, history) => {
    var email = document.getElementById('mail').value;
    var password = document.getElementById('password').value;

    if (password.length < 1 || email.length < 1) {
      history.push("/404");
      e.preventDefault();
    }

    else{
      localStorage.setItem("mail", document.getElementById("mail").value)
      history.push("/PlaylistBlank");
      e.preventDefault();
    }

  }
  
  return (
    <div className="Register">
      <div className="form_container">
        <img src={Padlock} alt="" className="padlock" style={{ resizeMode: 'contain' }} />
        <h6 className="register_h">Ingresar</h6>
        <form className="form">
          <div className="inputs_container">
            <input type="email" className="email_input" placeholder="Correo electrónico" name="sign" id="mail" onChange={(event) => validaCorreo(event)} />
            {state.correo}
            <input type="password" className="password_input" placeholder="Contraseña" name="sign" id="password" onChange={(event) => validaContra(event)} />
            {state.contra}
          </div>
          <input type="submit" value="COMENZAR A CREAR PLAYLISTS" className="create_playlist" onClick={(e) => enviarForm(e, history)} />
          <a href="#" className="f_password">¿Has olVidado la contraseña?</a>
          <hr className="sp_line" />
          <h1 className="no_acc">¿NO TIENES CUENTA?</h1>
          <button className="register_btn"><a href="#" className="register_a">REGISTRATE</a></button>
        </form>
      </div>
    </div>
  );
}

export default Register;