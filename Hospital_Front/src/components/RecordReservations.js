import React, { useState } from 'react';
import "./Exit_Pass.css";
import NavBarForm from './NavBarForm';
import Swal from "sweetalert2";

const RecordReservation = () => {
  const [form, setFormData] = useState({
    idRecord: 0,
    fullName: "",
    arrivalDate: "",
    direction: "",
    phone: "",
    reservation: "",
    departureDate: "",
    typeRoom: "",
    guestsCount: "",
    deposit: "",
    deadlineDate: "",
    rate: "",
    receiptNumber: "",
    nameEmploye: "",
    date: "",
    remarks: "",
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
      const response = await fetch("http://localhost:8080/recordReservations/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
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
        window.location.href = "/RecordReservations";
      });

      console.log("Response message from the backend:", data);
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/RecordReservations";
      });
    }
  };


  return (
    <>
      <div className="row m-3">
        <img src="your_image_url_here" alt="Your Image" className="IMG" />
        <h5 className='display-4 font_wig'>
          <div className='underline-up'><span className="palabra">Record de Reservacion</span><div className="subrayado-OutletPass"></div ></div>
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
                    <h5 className="card-title">Record de Reservacion</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='fullName'
                  value={form.fullName}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="date" className="form-label">
                  Fecha de llegada:
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-0"
                  onChange={handleChange}
                  name='arrivalDate'
                  value={form.arrivalDate}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="nameCustomer" className="form-label-Nombre">
                  Direccion
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='direction'
                  value={form.direction}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="nameCustomer" className="form-label-Nombre">
                  Telefono
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='phone'
                  value={form.phone}
                />
              </div>

              <div className="col-md-8">
                <label htmlFor="nameCustomer" className="form-label-Nombre">
                  Reserva:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='reservation'
                  value={form.reservation}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="date" className="form-label">
                  Fecha de Salida:
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-0"
                  onChange={handleChange}
                  name='departureDate'
                  value={form.departureDate}

                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Tipo de habitacion</label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  name="typeRoom"
                  onChange={handleChange}
                  value={form.typeRoom}
                >
                  <option value="SGL">SGL</option>
                  <option value="DBL">DBL</option>
                  <option value="TWIN">TWIN</option>
                  <option value="TPL">TPL</option>
                  <option value="JRS">JRS</option>
                  <option value="STE">STE</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="guestsCount" className="form-label">
                  Numero de huespedes
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id="guestsCount"
                  name="guestsCount"
                  onChange={handleChange}
                  value={form.guestsCount}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="text" className="form-label">
                  Deposito:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='deposit'
                  value={form.deposit}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="date" className="form-label">
                  Fecha limite:
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-0"
                  onChange={handleChange}
                  name='deadlineDate'
                  value={form.deadlineDate}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="text" className="form-label">
                  Cantidad:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='rate'
                  value={form.rate}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="text" className="form-label">
                  N° De Recibo:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='receiptNumber'
                  value={form.receiptNumber}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="text" className="form-label">
                  Tarifa:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}

                />
              </div>
              <div className="col-md-12">
                <label htmlFor="text" className="form-label">
                  Observaciones:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  name='remarks'
                  value={form.remarks}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="text" className="form-label">
                  Nombre:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  onChange={handleChange}
                  value={form.nameEmploye}
                  name='nameEmploye'
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="date" className="form-label">
                  Fecha:
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-0"
                  onChange={handleChange}
                  name='date'
                  value={form.date}
                />
              </div>
              <button className="fixed-button" onClick={handleSubmit} >
                <div className="save-icon"></div>
              </button>
            </form>
          </div>
        </section>
      </div>
    </>

  );
};

export default RecordReservation;