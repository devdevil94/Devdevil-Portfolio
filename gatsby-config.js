/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Devdevil Portfolio`,
    description: `a front-end web developer from Oman. I build websites and web apps using JavaScript (JQuery), CSS, HTML, and ReactJS framework.`,
    author: `Saud Alawi`,
    accounts: {
      github: `https://github.com/devdevil94`,
      freelancer: `https://www.freelancer.com/u/devdevil94`,
    },
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "JQuery",
      "ReactJS",
      "API",
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-src`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-static`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images-static`,
        path: `${__dirname}/static/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `Material Icons`, `Oswald`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
  ],
};
