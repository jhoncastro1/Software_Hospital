import NavbarForm from "./NavBarForm";
import React, { useState } from 'react';
import Swal from "sweetalert2";


const RackReservation = () => {
  const [numHabitaciones, setNumHabitaciones] = useState(0);
  const [formularios, setFormularios] = useState([]);

  const [form, setFormData] = useState({
    rackId: 0,
    companyName: "",
    noRooms: "",
    room: "",
    month: "",
    day: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...form,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/rackReservation/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        // Manejar casos donde la respuesta no es exitosa (status code no es 200-299)
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/RackReservation";
      });

      console.log("Response message from the backend:", data);
    } catch (error) {
      console.error("Error:", error);
      // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje de error al usuario
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/RackReservation";
      });
    }
  };

  const duplicarFormulario = (e) => {
    e.preventDefault();
    const nuevosFormularios = Array.from({ length: numHabitaciones - 1 }, (_, index) => (
      <div key={index} className="row">
        <div className="col-md-4">
          <label className="form-label">Mes</label>
          <select
            className="form-select-Key form-select-md mg-3 form-control border border-dark"
            aria-label=".form-select-lg example"
            id="month"
            name="month"
            value={form.month}
            onChange={handleChange}
          >
            <option value="Enero">Enero</option>
            <option value="Febrero">Febrero</option>
            <option value="Marzo">Marzo</option>
            <option value="Abril">Abril</option>
            <option value="Mayo">Mayo</option>
            <option value="Junio">Junio</option>
            <option value="Julio">Julio</option>
            <option value="Agosto">Agosto</option>
            <option value="Septiembre">Septiembre</option>
            <option value="Octubre">Octubre</option>
            <option value="Noviembre">Noviembre</option>
            <option value="Diciembre">Diciembre</option>

          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label">Habitacion</label>
          <select
            className="form-select-Key form-select-md mg-3 form-control border border-dark"
            aria-label=".form-select-lg example"
            id="room"
            name="room"
            value={form.room}
            onChange={handleChange}
          >
            <option value="101">101</option>
            <option value="102">102</option>
            <option value="103">103</option>
            <option value="104">104</option>
            <option value="105">105</option>
            <option value="106">106</option>
            <option value="107">107</option>
            <option value="108">108</option>
            <option value="109">109</option>
            <option value="110">110</option>
            <option value="201">201</option>
            <option value="202">202</option>
            <option value="203">203</option>
            <option value="204">204</option>
            <option value="205">205</option>
            <option value="206">206</option>
            <option value="207">207</option>
            <option value="208">208</option>
            <option value="209">209</option>
            <option value="210">210</option>
            <option value="301">301</option>
            <option value="302">302</option>
            <option value="303">303</option>
            <option value="304">304</option>
            <option value="305">305</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Dia</label>
          <select
            className="form-select-Key form-select-md mg-3 form-control border border-dark"
            aria-label=".form-select-lg example"
            id="day"
            name="day"
            value={form.day}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
          </select>
        </div>


      </div>
    ));

    setFormularios(nuevosFormularios);
  };

  const handleNumHabitacionesChange = (e) => {
    setNumHabitaciones(parseInt(e.target.value, 10) || 0);
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...form,
      [name]: newValue,
    });
  };

  return (
    <>

      <div className="row m-3">
        <img src="your_image_url_here" alt="Your Image" className="IMG" />
        <h5 className='display-4 font_wig'>
          <div className='underline-up'><span className="palabra">Rack de reservacion</span><div className="subrayado-OutletPass"></div ></div>
        </h5>
        <a className="nav-link active col-md-1">DESCARGAR</a>
        <a className="nav-link active col-md-2">CORREO</a>
      </div>

      <NavbarForm />

      <hr className="border border-dark" />
      <div className="container align-items-center justify-content-center">
        <section className="Seccion-Pass col-md-7 offset-md-3 d-flex align-items-center justify-content-center">
          <div className="container-Exit-pass m-4">
            <form className="row g-3 border dark">
              <div className="col-12">
                <div className="card border border-dark d-flex align-items-center justify-content-center">
                  <div className="card-body">
                    <h5 className="card-title">Rack de reservacion</h5>
                  </div>
                </div>

              </div>
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id="companyName"
                  name="companyName"
                  onChange={handleChange}
                  value={form.companyName} />
              </div>
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  N° de habitaciones
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id="noRooms"
                  name="noRooms"
                  value={form.noRooms}
                  onChange={handleNumHabitacionesChange} />
              </div>
              <div className="col-md-4">
                <label className="form-label">Mes</label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id="month"
                  name="month"
                  value={form.month}
                  onChange={handleChange}
                >
                  <option value="Enero">Enero</option>
                  <option value="Febrero">Febrero</option>
                  <option value="Marzo">Marzo</option>
                  <option value="Abril">Abril</option>
                  <option value="Mayo">Mayo</option>
                  <option value="Junio">Junio</option>
                  <option value="Julio">Julio</option>
                  <option value="Agosto">Agosto</option>
                  <option value="Septiembre">Septiembre</option>
                  <option value="Octubre">Octubre</option>
                  <option value="Noviembre">Noviembre</option>
                  <option value="Diciembre">Diciembre</option>

                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Habitacion</label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id="room"
                  name="room"
                  value={form.room}
                  onChange={handleChange}
                >
                  <option value="101">101</option>
                  <option value="102">102</option>
                  <option value="103">103</option>
                  <option value="104">104</option>
                  <option value="105">105</option>
                  <option value="106">106</option>
                  <option value="107">107</option>
                  <option value="108">108</option>
                  <option value="109">109</option>
                  <option value="110">110</option>
                  <option value="201">201</option>
                  <option value="202">202</option>
                  <option value="203">203</option>
                  <option value="204">204</option>
                  <option value="205">205</option>
                  <option value="206">206</option>
                  <option value="207">207</option>
                  <option value="208">208</option>
                  <option value="209">209</option>
                  <option value="210">210</option>
                  <option value="301">301</option>
                  <option value="302">302</option>
                  <option value="303">303</option>
                  <option value="304">304</option>
                  <option value="305">305</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label">Dia</label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id="day"
                  name="day"
                  value={form.day}
                  onChange={handleChange}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
              </div>

              <button className="fixed-button" onClick={handleSubmit}>
                <div className="save-icon"></div>
              </button>
              <div>
                {formularios}
                <button onClick={duplicarFormulario} className="boton-mas ">
                  +</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
export default RackReservation;