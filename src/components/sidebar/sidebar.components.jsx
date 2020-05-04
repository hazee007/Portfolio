import React from 'react'

const SideBar=()=>(
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img"  
               style={{backgroundImage: 'url(images/jidedev200x200.png)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Jide Jimoh</a></h1>
              <span className="email"><i className="icon-mail"></i> JideJimoh.Dev@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                  <li><a href="#work" data-nav-section="work">Projects</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                {/* <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li> */}
                <li><a href="https://www.linkedin.com/in/jide-jimoh-705b7411a/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/hazee007" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              </small></p>
            </div>
          </aside>
        </div>
      </div>
)


export default SideBar;