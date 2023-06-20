import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

class Footer extends Component {
  render() {
    return (
      <>
		<div className="container-fluid footer">
			{" "}
			{/* container-fluid gives it full width on the page */}
			<div className="container">
				<div className="spacer" />
				<div className="row d-flex pb-4">
				{" "}
				{/* display:flex; justify center to have it centered, pb-4 is padding-bottom:4 so the footer has some blank space at the bottom */}
				<div className="col-xs-12 col-md-8">
					<h5>
					<Link to="/contact">Contact Us</Link>
					</h5>
					<p>
					123 Clinic Road, Dublin 01, D01W3E4
					<br />
					Phone: <a href="tel:#">+353 01 234 5678</a>
					<br />
					Email: <a href="mailto:#">info@holiclinic.ie</a>
					</p>
					<br />
					<h6>Opening Hours</h6>
					<p>
					09:00 - 18:00 Monday to Friday
					<br />
					09:00 - 13:00 Saturday
					<br />
					Closed on Sundays
					</p>
				</div>
				<div className="col-xs-12 col-md-4 d-flex justify-content-end align-items-end pb-4">
					{" "}
					{/* display:flex; justify end sends to the right side, align end sends to the bottom, pb-4 is padding-bottom:4*/}
					<div>
					<a href="#" target="_blank">
						<img
						src="images/social-facebook.svg"
						width={50}
						height={50}
						alt="Facebook Icon"
						/>
					</a>
					<a href="#" target="_blank">
						<img
						src="images/social-instagram.svg"
						width={50}
						height={50}
						alt="Instagram Icon"
						/>
					</a>
					<a href="#" target="_blank">
						<img
						src="images/social-twitter.svg"
						width={50}
						height={50}
						alt="Twitter Icon"
						/>
					</a>
					<a href="#" target="_blank">
						<img
						src="images/social-whatsapp.svg"
						width={50}
						height={50}
						alt="Whatsapp Icon"
						/>
					</a>
					</div>
				</div>
				</div>
			</div>
		</div>

      </>
    );
  }
}

export default Footer;