import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";

export default function Header() {
  const {
    avatar,
    site: {
      siteMetadata: {
        author,
        // skills,
        description,
        accounts: { github, freelancer },
      },
    },
  } = useStaticQuery(graphql`
    query {
      avatar: file(relativePath: { eq: "portfolio_avatar.jpg" }) {
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
          accounts {
            github
            freelancer
          }
        }
      }
    }
  `);

  return (
    <header className="bg-white header">
      <div className="container">
        <div className="header__contentWrapper">
          <ScrollAnimation animateIn="fadeInDown" animateOnce={true}>
            <div className="header__content">
              <Img
                fluid={avatar.childImageSharp.fluid}
                alt={author}
                className="rounded-full header__img"
              />
              <h1 className="header__devName">I'm {author}</h1>
              <p className="text-grey header__description">{description}</p>
              <ul className="socialList">
                <li className="socialList__item">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
              {/*<h2>MySkills</h2>
               <ul className="header__skillsList">
                {skills.map((skill, i) => (
                  <li key={i} className="header__skillsItem">
                    // {i !== skills.length - 1 ? ` ${skill} |` : skill}
                    {skill}
                  </li>
                ))}
              </ul> */}
              <a
                href={freelancer}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white uppercase header__hireMeBtn"
              >
                Hire Me
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </header>
  );
}
