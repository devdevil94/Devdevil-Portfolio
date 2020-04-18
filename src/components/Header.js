import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

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
      <div className="header__contentWrapper">
        <ScrollAnimation animateIn="fadeInDown" offset={50} animateOnce={true}>
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
            <a href="#!" className="text-white uppercase header__hireMeBtn">
              Hire Me
            </a>
          </div>
        </ScrollAnimation>
      </div>
    </header>
  );
}
