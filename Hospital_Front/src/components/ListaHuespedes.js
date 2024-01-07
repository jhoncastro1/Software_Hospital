import NavBarForm from './NavBarForm';
import React, { useState } from 'react';
import Swal from "sweetalert2";

const ListaHuespedes = () => {
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

    return (<>

        <div className="row m-3">
            <img src="your_image_url_here" alt="Your Image" className="IMG" />
            <h5 className='display-4 font_wig'>
                <div className='underline-up'><span className="palabra">Lista de huespedes</span><div className="subrayado-OutletPass"></div ></div>
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
                                    <h5 className="card-title">Lista de huespedes</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                Fecha
                            </label>
                            <input
                                type="date"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                N° habitaciones
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                Nombre del huesped
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                N° personas
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                Fecha de llegada
                            </label>
                            <input
                                type="date"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                Fecha de salida
                            </label>
                            <input
                                type="date"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                Credito
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="fullName" className="form-label-Nombre">
                                Plan
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                    </form>
                </div>
            </section>
        </div>



    </>);
};
export default ListaHuespedes;