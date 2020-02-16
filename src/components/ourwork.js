import React from "react";

const OurWork = () => (
	<div className="row divWorks" id="work">
      <div className="col-xs-12 titleGeneral">Our works</div>
      <div className="col-xs-12">
          <ul className="menuList">
              <li className="active">
                  <a data-id="0">All project</a>
              </li>
              <li><a data-id="1">Web/App</a></li>
              <li><a data-id="2">Logo</a></li>
              <li><a data-id="3">Graphic</a></li>
              <li><a data-id="4">Brand</a></li>
          </ul>
      </div>
      <div className="col-xs-12">
          <div className="listProject">
              <div className="col-xs-6 col-sm-6 col-md-4 div-child">
                  <div className="item" data-id="35">
                      <img src="http://nhim.design/upload/post/img_project/30092019232923.jpg" />
                      <div className="bg">
                          <div className="name">
                              Logo Hoacons </div>
                          <div className="nameP">
                              Hoacons </div>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 div-child">
                  <div className="item" data-id="36">
                      <img src="http://nhim.design/upload/post/img_project/20082019142130.jpg" />
                      <div className="bg">
                          <div className="name">
                              CPA Paint </div>
                          <div className="nameP">
                              CPA </div>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 div-child">
                  <div className="item" data-id="38">
                      <img src="http://nhim.design/upload/post/img_project/01102019002409.png" />
                      <div className="bg">
                          <div className="name">
                              TracF logo </div>
                          <div className="nameP">
                              TracF Furniture </div>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 div-child">
                  <div className="item" data-id="39">
                      <img src="http://nhim.design/upload/post/img_project/06102019230003.png" />
                      <div className="bg">
                          <div className="name">
                              Wayfinding system </div>
                          <div className="nameP">
                              Cantavil Premier </div>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 div-child">
                  <div className="item" data-id="40">
                      <img src="http://nhim.design/upload/post/img_project/16112019184612.png" />
                      <div className="bg">
                          <div className="name">
                              Logistics </div>
                          <div className="nameP">
                              Huynh Thy </div>
                      </div>
                  </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 div-child">
                  <div className="item" data-id="41">
                      <img src="http://nhim.design/upload/post/img_project/16112019185339.png" />
                      <div className="bg">
                          <div className="name">
                              Logo Logistics </div>
                          <div className="nameP">
                              Mass Carrier </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
)

export default OurWork
