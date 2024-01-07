const NavBarCheckOut = () => {
  function limpiarLocalStorage() {
    try {
      localStorage.clear();
      console.log("LocalStorage limpiado correctamente.");
    } catch (error) {
      console.error("Error al limpiar LocalStorage:", error);
    }
  }

  return (
    <>
      <nav className="navbar navbar-formatos navbar-expand-lg justify-content-center mx-auto p-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/main" target="_blank" >Volver</a>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/reservacion" >Reservacion</a>
              </li>
            </ul>
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link active text-white " href="/checkIn">Check In</a>
              </li>
            </ul>
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/checkOut">Check Out</a>
              </li>
            </ul>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link active text-white" href="/homePage" onClick={limpiarLocalStorage}>

                  <svg className="separacion-interna" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path></svg>

                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBarCheckOut;