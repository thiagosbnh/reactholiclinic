import React, { Component } from 'react';
import Collapsible from 'react-collapsible';

class AboutUsCollapsible extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xs-12 col-lg-5 pt-5">
              <center>
                <h2>Our Services</h2>
              </center>
              <div className="pt-4">
                <Collapsible trigger="Acupuncture" >
                  <p>
                    Acupuncture is a form of alternative medicine and a component of
                    traditional Chinese medicine (TCM) in which thin needles are
                    inserted into the body. There is a range of acupuncture variants
                    which originated in different philosophies, and techniques vary
                    depending on the country in which it is performed, but can be
                    divided into two main foundational philosophical applications and
                    approaches, the first being the modern standardized form called
                    eight principles TCM and the second an older system that is based
                    on the ancient Daoist wuxing, better known as the five elements or
                    phases in the West.
                  </p>
                </Collapsible>
                <Collapsible trigger="Massage">
                  <p>
                    Massage is the manipulation of the body's soft tissues. Massage
                    techniques are commonly applied with hands, fingers, elbows,
                    knees, forearms, feet or a device. The purpose of massage is
                    generally for the treatment of body stress or pain. In European
                    countries, a person professionally trained to give massages is
                    traditionally known as a masseur (male) or masseuse (female).
                  </p>
                </Collapsible>
                <Collapsible trigger="Energy">
                  <p>
                    Many people often assume that energy healing and massage therapy
                    are one and the same. However, there is a difference between the
                    two. Energy healing believes that the human energy field extends
                    beyond the body and skin. Energy healing also believes that when
                    the flow of this energy is obstructed or imbalanced, it results in
                    ailments and health problems. So the main aim of energy healing is
                    to restore the balance of the energy field and facilitate healing
                    of the body and mind. It is seen as a natural process of restoring
                    the body, spirit and mind to complete health.
                  </p>
                </Collapsible>
                {/* <button
                  className="collapsible acupunture"
                  alt="Background image of Acupuncture therapy"
                >
                  Acupuncture
                </button>{" "} */}
                {/* class collapsible is going to trigger a JavaScript Event Listener to uncollapse the content */}
                {/* <div className="content">
                  <p>
                    Acupuncture is a form of alternative medicine and a component of
                    traditional Chinese medicine (TCM) in which thin needles are
                    inserted into the body. There is a range of acupuncture variants
                    which originated in different philosophies, and techniques vary
                    depending on the country in which it is performed, but can be
                    divided into two main foundational philosophical applications and
                    approaches, the first being the modern standardized form called
                    eight principles TCM and the second an older system that is based
                    on the ancient Daoist wuxing, better known as the five elements or
                    phases in the West.
                  </p>
                </div> */}
                {/* <button
                  className="collapsible massage"
                  alt="Background image of Massage therapy"
                >
                  Massage
                </button> */}
                {/* <div className="content">
                  <p>
                    Massage is the manipulation of the body's soft tissues. Massage
                    techniques are commonly applied with hands, fingers, elbows,
                    knees, forearms, feet or a device. The purpose of massage is
                    generally for the treatment of body stress or pain. In European
                    countries, a person professionally trained to give massages is
                    traditionally known as a masseur (male) or masseuse (female).
                  </p>
                </div> */}
                {/* <button
                  className="collapsible energy"
                  alt="Background image of Energy Healing therapy"
                >
                  Energy Healing
                </button> */}
                {/* <div className="content">
                  <p>
                    Many people often assume that energy healing and massage therapy
                    are one and the same. However, there is a difference between the
                    two. Energy healing believes that the human energy field extends
                    beyond the body and skin. Energy healing also believes that when
                    the flow of this energy is obstructed or imbalanced, it results in
                    ailments and health problems. So the main aim of energy healing is
                    to restore the balance of the energy field and facilitate healing
                    of the body and mind. It is seen as a natural process of restoring
                    the body, spirit and mind to complete health.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-xs-12 col-lg-6 pt-5">
              {" "}
              {/* pt-5 is adding padding to the top of my column in roder to have space when it stacks for small screens*/}
              <center>
                <h2>Our Staff</h2>
              </center>
              <div className="row d-flex justify-content-center pt-4">
                <div className="col-4 pb-5">
                  <center>
                    <img
                      src="images/staff-01.png"
                      width="130px"
                      height="130px"
                      alt="Portrait of Dr. Timothy Alder"
                    />
                    <br />
                    <br />
                    <h4>Dr. Timothy Alder</h4>
                    <h6>Massage Therapist</h6>
                  </center>
                </div>
                <div className="col-4 pb-5">
                  <center>
                    <img
                      src="images/staff-02.png"
                      width="130px"
                      height="130px"
                      alt="Portrait of Dr. Rose Graham"
                    />
                    <br />
                    <br />
                    <h4>Dr. Rose Graham</h4>
                    <h6>Acupuncture Therapist</h6>
                  </center>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-4 pb-5">
                  <center>
                    <img
                      src="images/staff-03.png"
                      width="130px"
                      height="130px"
                      alt="Portrait of Dr. Izabella Frances"
                    />
                    <br />
                    <br />
                    <h4>Dr. Izabella Frances</h4>
                    <h6>Reiki Therapist</h6>
                  </center>
                </div>
                <div className="col-4 pb-5">
                  <center>
                    <img
                      src="images/staff-04.png"
                      width="130px"
                      height="130px"
                      alt="Portrait of Dr. Jimmy Bean"
                    />
                    <br />
                    <br />
                    <h4>Dr. Jimmy Bean</h4>
                    <h6>Massage Therapist</h6>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Script for collapsing & displaying the contents  */}

        {/* var coll = document.getElementsByClassName("collapsible");
        var i;
        for (i = 0; i = coll.length; i++) {
          coll[i].addEventListener("click", function() { //an Event Listener to check if the button has been clicked to toggle it as active through a function and change the content's div height
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null; //closes the content div if the height is max when the button is clicked.
            } else {
              content.style.maxHeight = content.scrollHeight + "px"; //opens up the div with "content" class - smoothly with the .scrollHeight px
            }
          })
        } */}
      </>
    );
  }
}

export default AboutUsCollapsible;


