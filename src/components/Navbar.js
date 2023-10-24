import logo from "../logo1.jpeg"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
export default function Navbar() {
    return (<>
      
<nav class="navbar navbar-expand-lg bg-light-subtle z-3" id="headerNav">
      <div class="container-fluid">
        <Link class="navbar-brand d-block d-lg-none" to="/">
          <img src={logo} height="70" />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto align-items-center">
            <li class="nav-item mx-3">
            <Link class="nav-link" to="/courses">Courses</Link>
            </li>
            <li class="nav-item mx-3">
            <Link class="nav-link" to="/about">About Us</Link>
            </li>
            <li class="nav-item d-none d-lg-block">
              <Link class="nav-link" to="/">
                <img src={logo} height="70" />
              </Link>
            </li>
            <li class="nav-item mx-3">
            <Link class="nav-link" to="contact">Contact Us</Link>
            </li>
            <li className="nav-item mx-3"><Link className="nav-link" to="register"><button className="btn btn-primary">SignIn/Register</button></Link></li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )
}

