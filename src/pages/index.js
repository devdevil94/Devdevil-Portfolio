import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ScrollAnimation from "react-animate-on-scroll";
import Layout from "./../components/Layout";

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {(edges || []).map(({ node: { id, frontmatter: project } }, i) => (
        <ScrollAnimation
          key={id}
          animateOnce={true}
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
              <h2 className="text-dark projectContainer__title">
                {project.title}
              </h2>
              <p className="text-grey projectContainer__description">
                {project.description}
              </p>
              <h3 className="text-dark projectContainer__techListHeader">
                Technologies
              </h3>
              <ul className="projectContainer__techList">
                {(project.tech || []).map((tech, i) => (
                  <li
                    key={i}
                    className="text-secondary bg-white rounded projectContainer__techItem"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                className="bg-primary text-white uppercase rounded projectContainer__visitBtn"
              >
                Visit Website
              </a>
            </div>
          </div>
        </ScrollAnimation>
      ))}
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
