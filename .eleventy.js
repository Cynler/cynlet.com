module.exports = function(eleventyConfig) {  
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img/**.svg');
  eleventyConfig.addPassthroughCopy('_data/**.json');

  return {
    templateFormats: [
      "md",
      "ejs",
      "njk",
      "css",
      "svg",
      "png",
      "json",
      "mustache",
    ],
    passthroughFileCopy: true
  }
}
