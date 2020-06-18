import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function CrossyOnABranch() {
  const data = useStaticQuery(graphql`
    query {
      crossy: file(relativePath: { eq: "src/imgs/mascot-on-branch.png" }) {
        childImageSharp {
          fixed(width: 200, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div
      style={{
        textAlign: "right",
        marginTop: "-250px",
        backgroundColor: "transparent",
      }}
    >
      <Img
        fixed={data.crossy.childImageSharp.fixed}
        alt="TotalCross mascot on a tree branch"
      />
    </div>
  );
}

export default CrossyOnABranch;
