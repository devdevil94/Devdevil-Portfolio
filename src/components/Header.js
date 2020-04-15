import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "myAvatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          author
          description
        }
      }
    }
  `);

  return (
    <header className="bg-white header">
      <div className="container">
        <div className="header__contentWrapper">
          <div className="header__content">
            <Img
              fluid={data.avatar.childImageSharp.fluid}
              alt={data.site.siteMetadata.author}
              className="rounded-full header__img"
            />
            <h1 className="header__devName">{data.site.siteMetadata.author}</h1>
            <p className="text-grey header__description">
              {data.site.siteMetadata.description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
