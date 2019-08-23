
module.exports = function(config) {


  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');
  config.addLayoutAlias('episode', 'layouts/episode.njk');


  // collect the published episodes
  config.addCollection("episodes", function(collection) {
    return collection.getFilteredByGlob("./src/site/episode/*.md").filter(function(item) {
      return item.data.published == true;
    });
  });

  // Add some utility filters
  config.addFilter("dateDisplay", require("./src/utils/filters/date.js") );

  // minify the html output
  config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });


  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");


  return {
    dir: {
      input: "src/site",
      output: "dist"
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };

};
