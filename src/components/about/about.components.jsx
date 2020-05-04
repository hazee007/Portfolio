import React from 'react'

const About =() =>(
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I'm an electronics graduate student from Manipal University Dubai with ECE(Electronics and Communication Engineering) as my major.
                        i have passion for Electronics (pretty obvious), Mobile Communication, Web Developments, Embedded System, Internet of Things (IOT) and many others.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-layers2"  />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building webApps using Reactjs Framework. <br />Check projects for more details</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Electronics & IOT</h3>
                    <p>
                        Building electronics circuits using differents micro-controllers such as Arduino, ESP8266, ESP32, RaspberryPi and more.. 
                        {/* working with different communication protocols like Lora, Mqtt, BLE ,WiFi ,GSM... using Node-Red for IOT data visualization and connecting to Database. */}
                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Instructor</h3>
                    <p>An IOT, Elecronics, Robotics and Reactjs instructor at UniqueRobotics. <br /> <br/> </p>
                </div>
                </div>
            </div>
            
            {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Mobile Apps</h3>
                    <p>Building native IOS and Andriod Apps using React Native</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>Proficient with Adobe Illustrator and Photoshop.<br />
                        Check out me and a friend T-Shirt design @ </p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div> */}
           
            </div>
        </div>
        </section>
      </div>
)


export default About;