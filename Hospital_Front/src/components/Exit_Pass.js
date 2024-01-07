import React, { useState } from "react";
import "./Exit_Pass.css";
import NavBarForm from './NavBarForm';
import Swal from "sweetalert2";

const Exit_Pass = () => {
  const [formData, setFormData] = useState({
    idOutletPass: 0,
    nameCustomer: "",
    date: "",
    idAssignedRoom: "",
    guestsCount: "",
    keyRoom: false,
    cashierName: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:8080/outletPass/create", {
        method: "POST",
        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(formData),

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

        window.location.href = "/ExitPass";

      });

      console.log("Response message from the backend:", data);

    } catch (error) {

      console.error("Error:", error);

      Swal.fire({

        icon: "success",
        showConfirmButton: false,
        timer: 800,

      }).then(() => {

        window.location.href = "/ExitPass";

      });
    }
  };

  return (
    <>
      <div className="row m-3">
        <img src="your_image_url_here" alt="Your Image" className="IMG" />
        <h5 className='display-4 font_wig'>
          <div className='underline-up'><span className="palabra">Pase De Salida</span><div className="subrayado-OutletPass"></div ></div>
        </h5>
        <a className="nav-link active col-md-1">DESCARGAR</a>
        <a className="nav-link active col-md-2">CORREO</a>
      </div>

      <NavBarForm />

      <hr className="border border-dark" />

      <section className="Seccion-Pass col-md-7 offset-md-3 d-flex align-items-center justify-content-center">
        <div className="container-Exit-pass m-3">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="card col-md-6 offset-md-3 d-flex align-items-center justify-content-center border border-dark">
              <div className="card-body">
                <h4 className="card-title">Pase de salida</h4>
              </div>
            </div>
            <div className="col-md-12">
              <label htmlFor="nameCustomer" className="form-label-Nombre">
                Nombre de el cliente
              </label>
              <input
                type="text"
                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                id="nameCustomer"
                name="nameCustomer"
                value={formData.nameCustomer}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 border border-dark">
              <label htmlFor="date" className="form-label">
                Fecha:
              </label>
              <input
                type="date"
                className="form-control form-control-nombre border-0"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 border border-dark">
              <label htmlFor="idAssignedRoom" className="form-label">
                Numero de habitacion
              </label>
              <select
                className="form-select-Key form-select-md mg-3 form-control border border-dark"
                aria-label=".form-select-lg example"
                id="idAssignedRoom"
                name="idAssignedRoom"
                value={formData.idAssignedRoom}
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
            <div className="col-md-4 border border-dark">
              <label htmlFor="guestsCount" className="form-label">
                Numero de huespedes
              </label>
              <input
                type="number"
                className="form-control form-control-nombre border-0"
                id="guestsCount"
                name="guestsCount"
                value={formData.guestsCount}
                onChange={handleChange}
              />
            </div>
            <label className="form-label">¿Dejo su llave?</label>
            <select
              className="form-select-Key form-select-md mg-3 form-control border border-dark"
              aria-label=".form-select-lg example"
              name="keyRoom"
              value={formData.keyRoom}
              onChange={handleChange}
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <div className="col-md-6">
              <label htmlFor="cashierName" className="form-label">
                Nombre de el cajero
              </label>
              <input
                type="text"
                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                id="cashierName"
                name="cashierName"
                value={formData.cashierName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Sello de cajero
              </label>
              <input
                type="text"
                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                id="inputPassword4"
              />
            </div>
            <button className="fixed-button" onClick={handleSubmit}>
              <div className="save-icon"></div>
            </button>

            <button class="eye-button">
              <svg class="eye-open-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 7.2 2 12s4.48 10 10 10 10-4.8 10-10-4.48-10-10-10zm0 18c-2.66 0-5.07-1.22-6.66-3.34.26-.33.56-.64.89-.91 1.7 1.44 3.82 2.25 6.05 2.25 2.83 0 5.38-1.46 6.86-3.86.17-.24.33-.49.47-.74C19.31 15.78 16.29 14 12 14s-7.31 1.78-9.31 4.41c.14.25.3.5.47.74 1.48 2.39 4.03 3.86 6.86 3.86 2.23 0 4.35-.81 6.05-2.25.33.27.63.58.89.91C16.07 18.78 14.66 20 12 20zm0-8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-.66 0-1.31.08-1.95.23-.08-.16-.17-.32-.27-.48C11.24 5.52 11.61 5 12 5c1.1 0 2 .9 2 2 0 .17-.02.33-.05.49-.09.36-.22.71-.39 1.04-.11.22-.24.43-.39.62-.07.08-.15.15-.23.22-.22.18-.47.32-.74.44-.29.13-.59.23-.91.30C11.33 9.98 11.66 10 12 10zM12 6c-.45 0-.87.05-1.27.15-.04-.04-.09-.08-.13-.12C11.15 5.55 11.57 5 12 5c.74 0 1.41.4 1.76 1.04-.04.04-.08.09-.12.13C12.87 6.05 12.45 6 12 6z" />
              </svg>
              <svg class="eye-closed-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 7.2 2 12s4.48 10 10 10 10-4.8 10-10-4.48-10-10-10zm0 18c-2.66 0-5.07-1.22-6.66-3.34.26-.33.56-.64.89-.91 1.7 1.44 3.82 2.25 6.05 2.25 2.83 0 5.38-1.46 6.86-3.86.17-.24.33-.49.47-.74C19.31 15.78 16.29 14 12 14s-7.31 1.78-9.31 4.41c.14.25.3.5.47.74 1.48 2.39 4.03 3.86 6.86 3.86 2.23 0 4.35-.81 6.05-2.25.33.27.63.58.89.91C16.07 18.78 14.66 20 12 20zm0-8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-.66 0-1.31.08-1.95.23-.08-.16-.17-.32-.27-.48C11.24 5.52 11.61 5 12 5c1.1 0 2 .9 2 2 0 .17-.02.33-.05.49-.09.36-.22.71-.39 1.04-.11.22-.24.43-.39.62-.07.08-.15.15-.23.22-.22.18-.47.32-.74.44-.29.13-.59.23-.91.30C11.33 9.98 11.66 10 12 10zM12 6c-.45 0-.87.05-1.27.15-.04-.04-.09-.08-.13-.12C11.15 5.55 11.57 5 12 5c.74 0 1.41.4 1.76 1.04-.04.04-.08.09-.12.13C12.87 6.05 12.45 6 12 6z" />
              </svg>
            </button>
          </form>
        </div>

      </section>
    </>
  );
};

export default Exit_Pass;