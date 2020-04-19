import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

export default function Header() {
  const {
    avatar,
    site: {
      siteMetadata: { author, skills, description },
    },
  } = useStaticQuery(graphql`
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
          skills
        }
      }
    }
  `);

  return (
    <header className="bg-white header">
      <div className="container">
        <div className="header__contentWrapper">
          <ScrollAnimation
            animateIn="fadeInDown"
            offset={50}
            animateOnce={true}
          >
            <div className="header__content">
              <Img
                fluid={avatar.childImageSharp.fluid}
                alt={author}
                className="rounded-full header__img"
              />
              <h1 className="header__devName">{author}</h1>
              <p className="text-grey header__description">{description}</p>
              {/*<h2>MySkills</h2>
               <ul className="header__skillsList">
                {skills.map((skill, i) => (
                  <li key={i} className="header__skillsItem">
                    // {i !== skills.length - 1 ? ` ${skill} |` : skill}
                    {skill}
                  </li>
                ))}
              </ul> */}
              <a href="#!" className="text-white uppercase header__hireMeBtn">
                Hire Me
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </header>
  );
}
