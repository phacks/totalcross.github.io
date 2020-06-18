import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function CrossyOpenWings() {
  const data = useStaticQuery(graphql`
    query {
      crossy: file(relativePath: { eq: "src/imgs/mascot-contact.png" }) {
        childImageSharp {
          fixed(width: 200, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <Img
        fixed={data.crossy.childImageSharp.fixed}
        alt="TotalCross mascot with open wings"
      />
    </div>
  );
}

export default CrossyOpenWings;
