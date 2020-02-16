import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
      <div id="header">
          <div class="col-xs-12">
              <ul class="nav nav-tabs">
                  <li class="active">
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
              <div class="social">
                  <div class="col-xs-12 ec">
                      <a target="_blank" href="http://gmail.com" rel="nofollow">
                          <img src="http://nhim.design/images/icon/email.png" title="Email: yennhinguyen102@gmail.com" alt="Email nhim design" />
                      </a>
                  </div>
                  <div class="col-xs-12">
                      <a target="_blank" href="https://www.facebook.com/nhinguyen.ds" rel="nofollow">
                          <img src="http://nhim.design/images/icon/facebook.png" title="Facebook: www.facebook.com/nhinguyen.ds" alt="Facebook nhim design" />
                      </a>
                  </div>
              </div>
          </div>
      </div>
      <div class="col-xs-12 nav-section visible-xs">
          <div class="row">
              <nav class="navbar navbar-default">
                  <div class="navbar-header">
                      <div class="col-xs-12">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-menu" aria-expanded="false">
                              <img src="http://nhim.design/images/icon/menu.png" />
                          </button>
                          <div class="mt-20">
                              <img src="http://nhim.design/upload/post/logo/22082019101427.png" class="logo" alt="logo nhim" />
                          </div>
                      </div>
                  </div>
                  <div class="collapse navbar-collapse" id="bs-menu">
                      <ul class="nav navbar-nav navbar-right">
                          <li class="active">
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
