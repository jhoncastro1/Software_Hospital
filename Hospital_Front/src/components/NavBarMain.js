

const NavBarMain = () => {


    return (
        <>
            <nav class="navbar navbar-expand-lg justify-content-center mx-auto p-2">
                <div class="container-fluid">
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
                                <a class="nav-link active" href="/main">Hotelería</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default NavBarMain;