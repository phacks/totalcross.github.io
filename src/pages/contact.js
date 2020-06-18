import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from "../components/contact-form";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

function Contact() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "src/imgs/bg_contactus_01.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="contact us" />
      <BackgroundImage Tag="section" fluid={data.file.childImageSharp.fluid}>
        <ContactForm />
      </BackgroundImage>
    </Layout>
  );
}

export default Contact;
