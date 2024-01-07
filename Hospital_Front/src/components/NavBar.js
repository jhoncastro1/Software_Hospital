
import "./NavBar.css";

const NavBar = () => {

    return(
        <>
        
         <nav className="navbar navbar-formatos navbar-expand-lg justify-content-center mx-auto p-2">
     
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
            className="collapse navbar-collapse justify-content-center col-md-10"
            id="navbarNav"
          >
            <ul className="navbar-nav fw-bold col-md-4">
              <li className="nav-item">
                <a className="nav-link active text-white">Reservacion</a>
              </li>
            </ul>
            <ul className="navbar-nav fw-bold col-md-4">
              <li className="nav-item">
                <a className="nav-link active text-white">Check In</a>
              </li>
            </ul>
            <ul className="navbar-nav fw-bold col-md-4">
              <li className="nav-item">
                <a className="nav-link active text-white">Check Out</a>
              </li>
            </ul>
          </div>
          
         
       
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
        <div className="Border-box ">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item">
              <a className="nav-link active text-white" href="/homePage">
                INICIO
              </a>
            </li>
          </ul>
          </div>
            <div className="Border-box">
            <ul className="navbar-nav fw-bold">
              <li className="nav-item">
                <a className="nav-link active text-white">
                  View Other Formats
                </a>
              </li>
            </ul>
            </div>
          </div>
        
      </nav>

        </>
    );
};
export default NavBar;