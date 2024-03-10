const { DataTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/public/css');


  eleventyConfig.addPassthroughCopy('./src/assets')

  eleventyConfig.addFilter("postDate", (dataObj) => {
    return DataTime.fromJSDate(dataObj).toLocaleString(DataTime.DATA_MED)
  })

    return {
        dir: {
          input: "src",
          output: "public",
        },

        htmlTemplateEngine: "njk",
        minify: process.env.ELEVENTY_ENV === "production",
    }
}