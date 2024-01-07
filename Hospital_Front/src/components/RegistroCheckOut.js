import React from "react";
import Swal from "sweetalert2";

const RegisterCheckout = () => {

    const handleEliminarClick = async (idOutletPass) => {
        try {
            const response = await fetch(`http://localhost:8080/outletPass/delete/${idOutletPass}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
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
                window.location.href = "/RegistroCheckOut";
            });

            console.log("Response message from the backend:", data);
        } catch (error) {
            console.error("Error:", error);

            Swal.fire({
                icon: "success",
                showConfirmButton: false,
                timer: 800,
            }).then(() => {
                window.location.href = "/RegistroCheckOut";
            });
        }
        console.log(`Eliminar el elemento con ID: ${idOutletPass}`);
    };

    const handleEliminarButtonClick = () => {
        // Muestra un SweetAlert para ingresar el ID
        Swal.fire({
            title: 'Eliminar',
            text: 'Ingresa el ID que deseas eliminar:',
            input: 'text',
            inputPlaceholder: 'ID',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
        }).then(({ value: idOutletPass }) => {
            // Si se ingresa un ID y se confirma, procesa la eliminación
            handleEliminarClick(idOutletPass);

        });
    };

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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                    </svg>
                                </td>
                                <td style={{ verticalAlign: 'middle' }} >Pase de salida</td>
                                <td><a className="boton-reservacion btn btn-success btn-lg" href="/ExitPass" >Ver</a></td>
                                <td><button className="boton-registro btn btn-danger" onClick={handleEliminarButtonClick} >Eliminar</button></td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default RegisterCheckout;