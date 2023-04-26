import React, { Component } from 'react';
import { Link , Route , Routes } from 'react-router-dom';
import Booking from '../views/Booking';

class IndexContent extends Component {
	
  render() {
    return (
		<div className="container ">
			<div className="spacer" />
			<div className="row d-flex justify-content-center">
				<div className="col-xs-12 col-lg-4">
				<h5>Welcome to</h5>
				<h1>HoliClinic</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id est laborum.
				</p>
				</div>
				<div className="col-xs-12 col-lg-1" />
				<div className="col-xs-12 col-lg-4">
				<div className="row">
					<form style={{ width: "100%" }}>
						<Link to="/booking">
							<button
								className="cta booking"
								alt="Background image of two fingers holding a needle"
							>
								Make a Booking
							</button>
						</Link>
						
					</form>
				</div>
				<div className="row w-100" />
				<div className="row">
					<form style={{ width: "100%" }}>
						<Link to="/about">
							<button
								className="cta aboutclinic"
								type="submit"
								alt="Background image of a person receiving a massage"
							>
								About our Clinic
							</button>
						</Link>
					</form>
				</div>
				</div>
			</div>
			<div className="spacer" />
		</div>
    );
  }
}

export default IndexContent;


