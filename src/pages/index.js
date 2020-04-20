import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "./../components/Layout";

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <section className="projectsSection">
        <h2 className="text-dark projectsSection__header">My Projects</h2>
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
                <p className="text-grey projectContainer__description">
                  {project.description}
                </p>
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
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-white uppercase rounded projectContainer__websiteBtn"
                  >
                    Website
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      className="text-white uppercase rounded projectContainer__codeBtn"
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
