import React, { useState } from "react";


const RegistroReservacion = () => {
    return (
        <div>
            <nav class="navbar navbar-registros navbar-expand-lg justify-content-center mx-auto p-2 bg-dark">
                <div class="container-fluid ">
                    <button class="btn-navbar-register navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-start" id="navbarNav">
                        <ul class="navbar-nav fw-bold">
                            <li class="nav-item">
                                <a class="nav-link active text-white " href='/PageAdmin'>Home</a>
                            </li>

                            <li class="nav-item navbar-nav fw-bold">
                                <a class="reservacionNav nav-link active text-white" href="/registroReservacion">Reservacion</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" href="/registrocheckin">Check-In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" href="/registrocheckout">Check-Out</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-center">
                        <ul class="navbar-nav fw-bold">

                        </ul>
                        <ul class="navbar-nav fw-bold">

                        </ul>

                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <form class="d-flex justify-content-end nav-search bg-dark outline-dark">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>


            <div className="Lista-registros m-5">
                <div class="tabla-reservaciones table-responsive table-registro-reservacion">
                    <table class="tabla-registro-reservacion table table-primary" >
                        <tbody class="tabla-registro-reservacion border border-dark" >
                            <tr class="">
                                <td scope="row" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-file-earmark-fill" className="pos-r" viewBox="0 0 16 16">
                                        <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
                                    </svg>
                                </td>
                                <td style={{ verticalAlign: 'middle' }} >Contrato de Hospedaje</td>
                                <td><a className="boton-reservacion btn btn-success btn-lg" href="/ExitPass" >Ver</a></td>
                                <td><button className="boton-registro btn btn-danger">Eliminar</button></td>
                            </tr>
                            <tr class="">
                                <td scope="row" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-receipt" viewBox="0 0 16 16">
                                        <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                        <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                </td>
                                <td style={{ verticalAlign: 'middle' }}>Facturación</td>
                                <td><a className="boton-reservacion btn btn-success btn-lg" href="/ExitPass" >Ver</a></td>
                                <td><button className="boton-registro btn btn-danger">Eliminar</button></td>
                            </tr>
                            <tr class="">
                                <td scope="row" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">
                                        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                                        <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
                                    </svg>
                                </td>
                                <td style={{ verticalAlign: 'middle' }}>Tipos de habitaciones</td>
                                <td><a className="boton-reservacion btn btn-success btn-lg" href="/ExitPass" >Ver</a></td>
                                <td><button className="boton-registro btn btn-danger">Eliminar</button></td>
                            </tr>
                            <tr class="">
                                <td scope="row" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="45" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </td>
                                <td style={{ verticalAlign: 'middle' }}>Record de reservaciones</td>
                                <td><a className="boton-reservacion btn btn-success btn-lg" href="/ExitPass">Ver</a></td>
                                <td><button className="boton-registro btn btn-danger">Eliminar</button></td>
                            </tr>
                            <tr class="">
                                <td scope="row" style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="45" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                                    </svg>
                                </td>
                                <td style={{ verticalAlign: 'middle' }}>Rack de reservación</td>
                                <td><a className="boton-reservacion btn btn-success btn-lg" href="/ExitPass">Ver</a></td>
                                <td><button className="boton-registro btn btn-danger">Eliminar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default RegistroReservacion;