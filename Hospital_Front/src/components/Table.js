import React from 'react'
import Swal from "sweetalert2";

const Table = () => {

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

        return (<>



        </>);
    };
    export default Table;