import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
// markup
const IndexPage = () => {
  return (
    <Layout pageTitle={'HOME PAGE'}>
      <img src="https://interioreast.com/wp-content/uploads/2019/07/kitchen-trends.jpg" alt="This is a picture of a mountain on a foggy evening" style={{ maxHeight: "500px", maxWidth: "600px" }}></img>
    </Layout>
  )
}

export default IndexPage
