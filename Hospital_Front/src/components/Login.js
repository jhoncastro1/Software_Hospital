import React, { useState } from 'react';

import "./Login.css"; // Importar el archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Senalogo from '../images/LogoSena.png'
import Swal from "sweetalert2";

const Login = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    clave: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8080/publico/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: formData.usuario,
          clave: formData.clave,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data) {
        localStorage.setItem('jwtToken', JSON.stringify(data));
        console.log(data);

        await Swal.fire({
          icon: "success",
          title: "Autenticación Exitosa",
          showConfirmButton: false,
          timer: 800,
        }).then(
          window.location.href = "/main");
      } else {
        Swal.fire({
          icon: "error",
          title: "Usuario Incorrecto",
          text: "Usuario no válido o contraseña incorrecta!",
          timer: 800,
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.fire({
        icon: "error",
        title: "Error de conexión",
        text: "Hubo un problema al conectarse con el servidor",
      });
    }
  };

  return (
    <div className="col-12 row">
      <div className="software text-white col-6 min-vh-100 text-white align-items-center justify-content-center flex-column info">
        <h4 className="text-white mb-4">Bienvenidos de nuevo a tu</h4>
        <h1 className="text-white mb-4">SOFTWARE DE HOTELERÍA</h1>
        <h4 className="text-white">Aprendiz del SENA</h4>
      </div>

      <div className="pp-5 login col-6 text-black d-flex align-items-center justify-content-center flex-column">
        <form onSubmit={handleSubmit}>
          <div className=''>
            <div className="text-center">
              <img src={Senalogo} alt='LogoSena' width="50px" height="50px"></img>
              <p>Regional tolima</p>
              <br /><br />
              <h2>Iniciar sesión</h2>
              <p>Inicia sesión con tu cuenta asignada</p>
              <p> por el instructor de proyecto</p>
              <p></p>
              <br />
            </div>
            <div className='col-12 pp-5'>
              <div className='col-12'>
                <label className='text-start w-100'>Email:</label>
                <div>
                  <input
                    className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                    type="email"
                    name="usuario"
                    value={formData.usuario}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className='col-12' >
                <label>Contraseña:</label>
                <input
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  type="password"
                  name="clave"
                  value={formData.clave}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className='col-12 d-flex justify-content-center text-center'>
                <button className='col-8' type="submit">Ingresar</button>
              </div>
              <br /><br />
              <div className='text-center'  >
                <p className='pie mt-5' >Proyecto de Hotelería</p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;