import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
      <div id="header">
          <div className="col-xs-12">
              <ul className="nav nav-tabs">
                  <li className="active">
                      <a href="#home">Home</a>
                  </li>
                  <li>
                      <a href="#work">My work</a>
                  </li>
                  <li>
                      <a href="#partner">Partner</a>
                  </li>
                  <li>
                      <a href="#contact">Contact</a>
                  </li>
              </ul>
              <div className="social">
                  <div className="col-xs-12 ec">
                      <a target="_blank" href="http://gmail.com" rel="nofollow">
                          <img src="http://nhim.design/images/icon/email.png" title="Email: yennhinguyen102@gmail.com" alt="Email nhim design" />
                      </a>
                  </div>
                  <div className="col-xs-12">
                      <a target="_blank" href="https://www.facebook.com/nhinguyen.ds" rel="nofollow">
                          <img src="http://nhim.design/images/icon/facebook.png" title="Facebook: www.facebook.com/nhinguyen.ds" alt="Facebook nhim design" />
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <div className="col-xs-12 nav-section visible-xs">
          <div className="row">
              <nav className="navbar navbar-default">
                  <div className="navbar-header">
                      <div className="col-xs-12">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-menu" aria-expanded="false">
                              <img src="http://nhim.design/images/icon/menu.png" />
                          </button>
                          <div className="mt-20">
                              <img src="http://nhim.design/upload/post/logo/22082019101427.png" className="logo" alt="logo nhim" />
                          </div>
                      </div>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-menu">
                      <ul className="nav navbar-nav navbar-right">
                          <li className="active">
                              <a href="#home">Home</a>
                          </li>
                          <li>
                              <a href="#work">My work</a>
                          </li>
                          <li>
                              <a href="#partner">Partner</a>
                          </li>
                          <li>
                              <a href="#contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
