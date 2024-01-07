
import SenaLogo from '../images/LogoSena.png';
import './Navbar_Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.json'
const Navbar_Home = () =>  {
  return (
    
    <nav class="navbar navbar-expand-lg justify-content-center mx-auto p-2">
      <div class="container-fluid">
        <img class='logo' src={SenaLogo} alt='LogoSena' width="50px" height="50px"></img>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav fw-bold">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Regional Tolima</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Conoce Más</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Hotelería</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_Home