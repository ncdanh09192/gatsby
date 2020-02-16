import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import BannerTop from "../components/bannerTop"
import OurWork from "../components/ourwork"
import OurClient from "../components/ourclient"
import OurProject from "../components/ourproject"

const IndexPage = () => (
  <Layout>
    <SEO title="Nhim Design" description="Test porfolio page"/>
    <div id="main_content">
      <div className="col-xs-12">
          <BannerTop />
          <OurWork />
          <OurClient />
          <OurProject />
      </div>
    </div>
    <div className="modal fade" id="modalProject" role="dialog">
    </div>
  </Layout>
)

export default IndexPage
