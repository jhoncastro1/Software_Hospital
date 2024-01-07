import NavBarForm from './NavBarForm';
import React, { useState } from "react";
import Swal from "sweetalert2";

const HotelRegistration = () => {
  const [formHotelRegistration, setFormData] = useState({
    idHotelRegistration: 0,
    name: "",
    nationality: "",
    direction: "",
    city: "",
    country: "",
    tel: "",
    typeId: "",
    identification: "",
    oficio: "",
    empresa: "",
    telefonoEmpresa: "",
    transport: "",
    arrive: "",
    out: "",
    reservation: "",
    reasonForTravel: "",
    provenance: "",
    stay: "",
    destination: "",
    signature: "",
    acceptAccommodationContract: "",
    roomRate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formHotelRegistration,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/hotelRegistration/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formHotelRegistration),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/hotelRegistration";
      });

      console.log("Response message from the backend:", data);
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/hotelRegistration";
      });
    }
  };


  return (
    <>
      <div className="row m-3">
        <img src="your_image_url_here" alt="Your Image" className="IMG" />
        <h5 className='display-4 font_wig'>
          <div className='underline-up'><span className="palabra">Tarjeta de registro hotelero</span><div className="subrayado-OutletPass"></div ></div>
        </h5>
        <a className="nav-link active col-md-1">DESCARGAR</a>
        <a className="nav-link active col-md-2">CORREO</a>
      </div>

      <NavBarForm />

      <hr className="border border-dark" />
      <div className="container align-items-center justify-content-center">
        <section className="Seccion-Pass col-md-7 offset-md-3 d-flex align-items-center justify-content-center">
          <div className="container-Exit-pass m-4">
            <form className="row g-3 border dark">
              <div className="col-12">
                <div className="card border border-dark d-flex align-items-center justify-content-center">
                  <div className="card-body">
                    <h5 className="card-title">Registro hotelero</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='name'
                  name='name'
                  onChange={handleChange}
                  value={formHotelRegistration.name} />
              </div>
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Nacionalidad
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='nationality'
                  name='nationality'
                  onChange={handleChange}
                  value={formHotelRegistration.nationality} />
              </div>

              <div className="col-md-6">
                <label className="form-label">Tipo de identificacion</label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id='typeId'
                  name='typeId'
                  onChange={handleChange}
                  value={formHotelRegistration.typeId}
                >
                  <option value="T.I">Tarjeta de identidad</option>
                  <option value="C.C">Cedula de ciudadania</option>
                  <option value="P">Pasaporte</option>
                  <option value="Otros">Otros</option>
                </select>

              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  N° Identificacion
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='identification'
                  name='identification'
                  value={formHotelRegistration.identification}
                  onChange={handleChange} />
              </div>

              <div className="col-md-3">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Direccion
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='direction'
                  name='direction'
                  value={formHotelRegistration.direction}
                  onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Ciudad
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='city'
                  name='city'
                  value={formHotelRegistration.city}
                  onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Pais
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='country'
                  name='country'
                  value={formHotelRegistration.country}
                  onChange={handleChange} />
              </div>
              <div className="col-md-3">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Telefono
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='tel'
                  name='tel'
                  value={formHotelRegistration.tel}
                  onChange={handleChange} />
              </div>

              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Oficio
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='oficio'
                  name='oficio'
                  value={formHotelRegistration.oficio}
                  onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Empresa
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='empresa'
                  name='empresa'
                  value={formHotelRegistration.empresa}
                  onChange={handleChange} />
              </div>
              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Telefono Empresarial
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='telefonoEmpresa'
                  name='telefonoEmpresa'
                  value={formHotelRegistration.telefonoEmpresa}
                  onChange={handleChange} />
              </div>





              <div className="col-md-4">
                <h6 className="card-title">Transporte</h6>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id='transport'
                  name='transport'
                  value={formHotelRegistration.transport}
                  onChange={handleChange} >
                  <option value="Terrestre">Terrestre</option>
                  <option value="Aereo">Aereo</option>
                  <option value="Maritimo">Maritimo</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Llegada
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='arrive'
                  name='arrive'
                  value={formHotelRegistration.arrive}
                  onChange={handleChange} />
              </div>

              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Salida
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='out'
                  name='out'
                  value={formHotelRegistration.out}
                  onChange={handleChange} />
              </div>




              <div className="col-md-6">
                <h6 className="card-title">Reserva</h6>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id='reservation'
                  name='reservation'
                  value={formHotelRegistration.reservation}
                  onChange={handleChange}>
                  <option value="Agencia de viajes">Agencia de viajes</option>
                  <option value="Linea Aerea">Linea Aerea</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div className="col-md-6">
                <h6 className="card-title">Motivo de viaje</h6>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id='reasonForTravel'
                  name='reasonForTravel'
                  value={formHotelRegistration.reasonForTravel}
                  onChange={handleChange}>
                  <option value="Recreacion">Recreacion</option>
                  <option value="Negocios">Negocios</option>
                  <option value="Salud">Salud</option>
                  <option value="Otros">Otros</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Procedencia
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='provenance'
                  name='provenance'
                  value={formHotelRegistration.provenance}
                  onChange={handleChange} />
              </div>

              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Destino
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='destination'
                  name='destination'
                  value={formHotelRegistration.destination}
                  onChange={handleChange} />
              </div>

              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Estadia
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='stay'
                  name='stay'
                  value={formHotelRegistration.stay}
                  onChange={handleChange} />
              </div>



              <div className="col-md-12">
                <label htmlFor="fullName" className="form-label-Nombre">
                  ¿Acepta el Contrato de hospedaje?  <a className="nav-link active separacion" target="_blank" href="/CustomerList" >Haga click aqui para conocerlo</a>
                </label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id='acceptAccommodationContract'
                  name='acceptAccommodationContract'
                  value={formHotelRegistration.acceptAccommodationContract}
                  onChange={handleChange}>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </select>

              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  firma
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='signature'
                  name='signature'
                  value={formHotelRegistration.signature}
                  onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Tarifa
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='roomRate'
                  name='roomRate'
                  value={formHotelRegistration.roomRate}
                  onChange={handleChange} />
              </div>
              <button className="fixed-button" onClick={handleSubmit}>
                <div className="save-icon"></div>
              </button>

            </form>
          </div>

        </section>
      </div>
    </>
  );
};
export default HotelRegistration;