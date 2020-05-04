import React from 'react';

const Projects = () => (
  
        <section className="colorlib-work" data-section="work">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Projects</span>
                <h2 className="colorlib-heading animate-box"> My Projects</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                <div className="fancy-collapse-panel">
                  <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingthree">
                        <h4 className="panel-title">
                          <a data-toggle="collapse" data-parent="#accordion" href="#collapsethree" aria-expanded="true" aria-controls="collapseOne">Electronics And IOT(Internet of things)
                          </a>
                        </h4>
                      </div>
                      <div id="collapsethree" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingthree">
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-md-12">
                                <h4 className="">Home Automation with Node-red Dashboard</h4>
                                <p>
                                    This project consist of Esp8266 IOT board, a temperature and humidity sensor DHT11 and a Node-red Dashboard.
                                    The temperature and humidity data is sent to node-red through Mqtt protocol when then fills the dashboard created on node-red.
                                    It also have an alert system for when the temperature or humidity  values are above required threshold.
                                    Check out the project <a href='https://github.com/hazee007/homeAutomation' target='blank'>Here</a> 
                                </p>

                                <h4 >Other IOT and Electronic Project Includes..</h4>
                                    <ul>
                                        <li>Geolocation for location tracking and Smart Card for staff monitoring.</li>
                                        <li>Product tracking and Warehouse management. </li>
                                        <li>Vegetable Sorting Machine (Final Year Project).</li>
                                        <li>Wireless Transceiver Module for Location, Identification and Communication for School Bus Transportation and Safety.</li>
                                        <li>Attendance Base Identification via Face Recognition. </li>
                                    </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingtwo">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapsetwo" aria-expanded="false" aria-controls="collapseFive">React Apps
                          </a>
                        </h4>
                      </div>
                      <div id="collapsetwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingtwo">
                        <div className="panel-body">

                            <h4 className="">Ecommerce App</h4>
                            <p> 
                              This is a full functioning  project that makes use of the latest react libraries such as
                              <li >React-Router.</li>
                              <li >React-Redux.</li>
                              <li >React-Redux-sagas.</li>
                              <li >Redux-Persist.</li>
                              <li >React-Hooks.</li>
                              <li >React-Reselect.</li>
                              <li >React-Context API.</li>
                              <li >nodejs express server for stripe Api for stripe payments.</li>
                              <li >The app is a PWA(Progreesive web app) which means it can be install on mobile phone without the need of native app.</li>
                              and following best practices of react communities. Check it out <a href="http://crown-app007.herokuapp.com/"  target='blank'>Here</a>
                            </p>	   

                            <h4 className="">Smart Brain App</h4>
                            <p> 
                                A face detction app using clarifai API, Creating user authentication register and login page using nodejs, express server and Postgress database.  
                                Check it out <a href='https://smart-app2.herokuapp.com/'>Here</a>, takes some few seconds to load :)
                            </p>	

                            <h4 className="">RoboFriends App</h4>
                            <p> 
                                This very basic react app and working with Git. Check it out <a href='https://hazee007.github.io/robotfriends/'>Here</a> 
                            </p>	

                            <h4 className="">Like this template??</h4>
                            <p> 
                                Get the HTML template from <a href="https://colorlib.com/wp/template/jackson/" target='blank' >Colorlib</a> or <br />
                                React Template from <a href="https://github.com/hazee007/myportfolio">Here</a>
                            </p>	
                        </div>
                      </div>
                    </div>

                    {/* <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingFive">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Smart Brain App
                          </a>
                        </h4>
                      </div>
                      <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                        <div className="panel-body">
                            <h4 className="">React RoboFriends</h4>
                          <p> Secience Department <br/>
                            2008 - 2013 <br/>
                            Foundation <br />
                            2013 - 2014</p>	
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingFive">
                        <h4 className="panel-title">
                          <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">React Ecommerce App
                          </a>
                        </h4>
                      </div>
                      <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                        <div className="panel-body">
                            <h4 className="">React Ecommerce App</h4>
                          <p> Secience Department <br/>
                            2008 - 2013 <br/>
                            Foundation <br />
                            2013 - 2014</p>	
                        </div>
                      </div>
                    </div> */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
);

export default Projects;