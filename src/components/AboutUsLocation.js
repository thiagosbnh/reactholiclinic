import React, { Component } from 'react';

class AboutUsLocation extends Component {
  render() {
    return (
      <>
        <div className="container">
          <br />
          <br />
          <center>
            <h2>Our Location</h2>
          </center>
          <br />
          <br />
        </div>
        <div className="container pb-5">
          <div className="row d-flex justify-content-center ">
            <div className="col-sm-12 col-lg-10 map-responsive" alt="Map Location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.682897096189!2d-6.24518684831496!3d53.34893238211996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8cd86e97e7%3A0x6d51b774ee7fa935!2sNational%20College%20of%20Ireland!5e0!3m2!1sen!2sie!4v1670428926701!5m2!1sen!2sie"
                width={800}
                height={270}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUsLocation;