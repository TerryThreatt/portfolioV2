module.exports = {
  siteMetadata: {
    description: "Personal page of Terry Threatt",
    locale: "en",
    title: "Terry Threatt",
  },
    plugins: [
      {
        resolve: "@wkocjan/gatsby-theme-intro",
        options: {
          showThemeLogo: false,
          theme: "blue",
        },
      },
    ],
  }