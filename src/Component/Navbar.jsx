import { Link } from "react-router-dom";

function Navbar(){
  
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Registration">Registration</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Login">Login</Link>
      </li>
      
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar;