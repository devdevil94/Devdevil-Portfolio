import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "./../components/Layout";
import SEO from "./../components/SEO";

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <section className="projectsSection">
        <h2 className="text-dark uppercase projectsSection__header">My Work</h2>
        {(edges || []).map(({ node: { id, frontmatter: project } }, i) => (
          <ScrollAnimation
            key={id}
            animateOnce={true}
            // duration={0.7}
            animateIn={i % 2 === 0 ? "fadeInRight" : "fadeInLeft"}
          >
            <div
              className={`projectContainer${
                i % 2 === 0 ? "" : " projectContainer--reverse"
              }`}
            >
              <Img
                fluid={project.img.childImageSharp.fluid}
                className="float-md projectContainer__img"
              />
              <div className="projectContainer__info">
                <h3 className="text-dark projectContainer__title">
                  {project.title}
                </h3>
                {/* <h3 className="text-dark projectContainer__techListHeader">
                Technologies
              </h3> */}
                <ul className="projectContainer__techList">
                  {(project.tech || []).map((tech, i) => (
                    <li
                      key={i}
                      className="text-dark projectContainer__techItem"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className="text-grey projectContainer__description">
                  {project.description}
                </p>

                <div className="projectContainer__btnsWrapper">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white uppercase projectContainer__websiteBtn"
                  >
                    Website
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary uppercase projectContainer__codeBtn"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </section>
    </Layout>
  );
};

export const projectsQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
            tech
            url
            repo
            img {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
