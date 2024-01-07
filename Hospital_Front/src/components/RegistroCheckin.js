import React from 'react';
import { Table, Button } from 'react-bootstrap';

const RegisterCheckin = () => {
    const files = [
        { id: 1, logo: 'LogoSena.png', name: 'Lista de Huespedes' },
        { id: 2, logo: '', name: 'Facturación' },
        { id: 3, logo: '', name: 'Reporte de reservaciones' },
        { id: 4, logo: '', name: 'Reserva Grupal 2' },
        // Agrega más archivos según sea necesario
    ];

    const handleView = (id) => {
        // Lógica para ver el archivo
        console.log(`Ver archivo con ID ${id}`);
    };

    const handleDelete = (id) => {
        // Lógica para eliminar el archivo
        console.log(`Eliminar archivo con ID ${id}`);
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
                                <a class="nav-link active text-white" href="/registroCheckin">Check-In</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-white" href="/registroCheckout">Check-Out</a>
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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Nombre de Archivo</th>
                                <th>Ver</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file) => (
                                <tr key={file.id}>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                                        </svg>
                                    </td>
                                    <td>{file.name}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => handleView(file.id)}>
                                            Ver
                                        </Button>
                                    </td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDelete(file.id)}>
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default RegisterCheckin;