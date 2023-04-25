import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <>
	  <nav className="navbar navbar-expand-md ">
		<div className="container">
		  {" "}
		  {/* container will keep all elements inside the 12-grid system */}
		  <a className="navbar-brand" href="index.html">
			<img
			  src="images/logo-holiclinic.svg"
			  style={{ height: 35 }}
			  alt="HoliClinic Logo resembling a Lotus Flower"
			/>
		  </a>
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
				<a className="nav-link" href="index.html">
				  Home
				</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="aboutus.html">
				  About Us
				</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="booking.html">
				  Make a Booking
				</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="contactus.html">
				  Contact Us
				</a>
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





