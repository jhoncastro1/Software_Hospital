
import NavBarForm from './NavBarForm';

const Facturacion = () => {
    return (<>

        <div className="row m-3">
            <img src="your_image_url_here" alt="Your Image" className="IMG" />
            <h5 className='display-4 font_wig'>
                <div className='underline-up'><span className="palabra">Facturacion</span><div className="subrayado-OutletPass"></div ></div>
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
                                    <h5 className="card-title">Facturacion</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                I.V.A
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                                value={2.5}
                                readOnly
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Descuentos
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Nombre del huesped
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Numero
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Fecha
                            </label>
                            <input
                                type="date"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Habitacion</label>
                            <select
                                className="form-select-Key form-select-md mg-3 form-control border border-dark"
                                aria-label=".form-select-lg example"
                                id="room"
                                name="room"
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
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Personas
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>


                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Cambio
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Balance que pasa
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Seguro Hotelero
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Aporte TMO
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Restaurante
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Impor. Consumo
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Mini Bar
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Gastos en telefono
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Miscelaneos
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Lavanderia
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Total Cargos
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Abonos
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Recibo de caja n°
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Total a pagar
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                Observaciones
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="nameCustomer" className="form-label-Nombre">
                                C.C huesped
                            </label>
                            <input
                                type="number"
                                className="form-control form-control-nombre border-top-0 border-end-0 border-start-0 border-dark"
                            />
                        </div>

                    </form>
                </div>
            </section>
        </div>



    </>);
};
export default Facturacion;