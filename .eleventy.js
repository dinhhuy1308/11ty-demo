const { DataTime } = require('luxon');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css')
  // eleventyConfig.addPassthroughCopy('./src/public/css/style.css');

  eleventyConfig.addPassthroughCopy('./src/assets')

  eleventyConfig.addFilter("postDate", (dataObj) => {
    return DataTime.fromJSDate(dataObj).toLocaleString(DataTime.DATA_MED)
  })

    return {
        dir: {
          input: "src",
          output: "public",
        }
    }
}