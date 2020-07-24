import React from 'react';


function Navbar(){

    return <div className="container-fluid header">
        <nav className="navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/">findImages.com</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation-bar" aria-controls="navigation-bar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navigation-bar">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">Help <span className="sr-only">(current)</span></a>
      </li>      
    </ul>
    
  </div>
</nav>
</div>
}

export default Navbar;