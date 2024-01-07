const NavbarForm = () =>{
    return(
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
                  <a className="nav-link active text-white" href="/main" target="_blank" >Inicio</a>
                </li>
              </ul>
            </div>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav fw-bold">
                <li className="nav-item">
                  <a className="nav-link active text-white" href="/main">
                    View Other Formats
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    );
}
export default NavbarForm;