import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Navbar extends Component {
  render() {
    return (
      <>
	  <nav className="navbar navbar-expand-md ">
		<div className="container">
		  {" "}
		  {/* container will keep all elements inside the 12-grid system */}
		  <Link className="navbar-brand" to="/">
			<img
			  src="images/logo-holiclinic.svg"
			  style={{ height: 35 }}
			  alt="HoliClinic Logo"
			/>
		  </Link>
		  <button
			className="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarCollapse"
			aria-controls="navbarCollapse"
			aria-expanded="false"
			aria-label="Toggle navigation"
		  >
			<span className="navbar-toggler-icon" />
		  </button>
		  <div className="collapse navbar-collapse" id="navbarCollapse">
			<ul className="navbar-nav ms-auto mt-3">
			  {" "}
			  {/* ms-auto brings the menu to the right-side, mt-3 is extra margin at the top */}
			  <li className="nav-item">
				<Link className="nav-link" to="/">
				  Home
				</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link" to="/about">
				  About Us
				</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link" to="/booking">
				  Make a Booking
				</Link>
			  </li>
			  <li className="nav-item">
				<Link className="nav-link" to="/contact">
				  Contact Us
				</Link>
			  </li>
			</ul>
		  </div>
		</div>
	  </nav>
	</>
    );
  }
}

export default Navbar;





