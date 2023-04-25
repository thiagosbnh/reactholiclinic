import React, { Component } from 'react';
import { InlineWidget } from "react-calendly";

class BookingWidget extends Component {
  render() {
    return (
      <>
      <div className="container-fluid pb-5" style={{ backgroundColor: "#FBFCFD" }}>
        <center>
          <div className="calendly-inline-widget" style={{ minWidth: 320}} >
            <InlineWidget url="https://calendly.com/x22159207" />
          </div>
        </center>
      </div>
      </>
    );
  }
}

export default BookingWidget;