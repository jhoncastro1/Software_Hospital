
import NavbarForm from './NavBarForm';
import React, { useState } from "react";
import Swal from "sweetalert2";

const Reservacion_Grupal = () => {
  const [form, setFormData] = useState({
    groupInstructionsId: 0,
    name_group: "",
    name_owner_group: "",
    extra_account: "",
    master_account: "",
    pay: "",
    view: "",
    foodPlan: "",
    arrival: "",
    arrival_time: "",
    output: "",
    output_time: "",
    old_count: 0,
    young_count: 0,
    total: 0,
    simple_count: "",
    double_count: "",
    twin_count: "",
    simple_paid: "",
    double_paid: "",
    twin_paid: "",
    name_student: "",
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
      const response = await fetch("http://localhost:8080/groupInstructions/create", {
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
        window.location.href = "/groupInstructions";
      });

      console.log("Response message from the backend:", data);
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "success",
        showConfirmButton: false,
        timer: 800,
      }).then(() => {
        window.location.href = "/groupInstructions";
      });
    }
  };

  return (
    <>
      <div className="row m-3">
        <img src="your_image_url_here" alt="Your Image" className="IMG" />
        <h5 className='display-4 font_wig'>
          <div className='underline-up'><span className="palabra">Instructivo de grupos</span><div className="subrayado-OutletPass"></div ></div>
        </h5>
        <a className="nav-link active col-md-1">DESCARGAR</a>
        <a className="nav-link active col-md-2">CORREO</a>
      </div>

      <NavbarForm></NavbarForm>

      <hr className="border border-dark" />
      <div className="container align-items-center justify-content-center">
        <section className="Seccion-Pass col-md-7 offset-md-3 d-flex align-items-center justify-content-center">
          <div className="container-Exit-pass m-4">
            <form className="row g-3 border dark">
              <div className="col-12">
                <div className="card border border-dark d-flex align-items-center justify-content-center">
                  <div className="card-body">
                    <h5 className="card-title">Instructivo de grupos</h5>
                  </div>
                </div>

              </div>
              <div className="col-md-12">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Nombre del grupo:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='name_group'
                  name='name_group'
                  value={form.name_group}
                  onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Llegada:
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='arrival'
                  name='arrival'
                  onChange={handleChange}
                  value={form.arrival} />
              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Hora:
                </label>
                <input
                  type="time"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='arrival_time'
                  name='arrival_time'
                  onChange={handleChange}
                  value={form.arrival_time} />
              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Sale:
                </label>
                <input
                  type="date"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='output'
                  name='output'
                  value={form.output}
                  onChange={handleChange} />
              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Hora:
                </label>
                <input
                  type="time"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='output'
                  name='output'
                  value={form.output_time}
                  onChange={handleChange} />
              </div>

              <div className="col-md-8">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Nombre de el conductor del grupo:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='name_owner_group'
                  name='name_owner_group'
                  value={form.name_owner_group}
                  onChange={handleChange} />
              </div>


              <div className="col-md-4">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Paga:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='pay'
                  name='pay'
                  onChange={handleChange}
                  value={form.pay} />
              </div>

              <div className="col-md-12">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Observaciones:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='view'
                  name='view'
                  onChange={handleChange}
                  value={form.view} />
              </div>


              <div className="col-md-12">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Plan de alimentos:
                </label>
                <input
                  type="text"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='foodPlan'
                  name='foodPlan'
                  onChange={handleChange}
                  value={form.foodPlan} />
              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Numero de personas del grupo:
                </label>
              </div>

              <div className="col-md-2">
                <label htmlFor="old_count" className="form-label-Nombre">
                  Adultos:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='old_count'
                  name='old_count'
                  onChange={handleChange}
                  value={form.old_count} />
              </div>

              <div className="col-md-2">
                <label htmlFor="young_count" className="form-label-Nombre">
                  Menores:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='young_count'
                  name='young_count'
                  value={form.young_count}
                  onChange={handleChange} />
              </div>

              <div className="col-md-2">
                <label htmlFor="total" className="form-label-Nombre">
                  Total:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='total'
                  name='total'
                  onChange={handleChange}
                  value={form.total}
                  readOnly
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Cantidad de habitaciones:
                </label>
              </div>

              <div className="col-md-2">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Sencillas:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='simple_count'
                  name='simple_count'
                  value={form.simple_count}
                  onChange={handleChange} />
              </div>

              <div className="col-md-2">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Dobles:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='double_count'
                  name='double_count'
                  onChange={handleChange}
                  value={form.double_count} />
              </div>

              <div className="col-md-2">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Twin:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='twin_count'
                  name='twin_count'
                  onChange={handleChange}
                  value={form.twin_count} />
              </div>


              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Tarifa confirmada por habitacion:
                </label>
              </div>

              <div className="col-md-2">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Sencillas:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='simple_paid'
                  name='simple_paid'
                  onChange={handleChange}
                  value={form.simple_paid} />
              </div>

              <div className="col-md-2">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Dobles:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='double_paid'
                  name='double_paid'
                  onChange={handleChange}
                  value={form.double_paid} />
              </div>

              <div className="col-md-2">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Twin:
                </label>
                <input
                  type="number"
                  className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                  id='twin_paid'
                  name='twin_paid'
                  onChange={handleChange}
                  value={form.twin_paid}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Cuenta de extras:
                </label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id='extra_account'
                  name='extra_account'
                  value={form.extra_account}
                  onChange={handleChange}>
                  <option value="No">No</option>
                  <option value="Si">Si</option>
                </select>
              </div>

              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label-Nombre">
                  Cuenta maestra:
                </label>
                <select
                  className="form-select-Key form-select-md mg-3 form-control border border-dark"
                  aria-label=".form-select-lg example"
                  id='master_account'
                  name='master_account'
                  onChange={handleChange}
                  value={form.master_account}>
                  <option value="No">No</option>
                  <option value="Si">Si</option>
                </select>
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

export default Reservacion_Grupal