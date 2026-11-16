module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the build output.
  eleventyConfig.addPassthroughCopy("src/css");
  // Only the web-sized images; full-size originals stay in the repo but are not published.
  eleventyConfig.addPassthroughCopy("src/img/*-{sm,900,1600}.jpg");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  // "2026-10-10" -> "Oct 10, 2026" (en-CA) or "10 oct. 2026" (fr-CA).
  eleventyConfig.addFilter("showDate", (iso, locale) =>
    new Intl.DateTimeFormat(locale, {
      dateStyle: "medium",
      timeZone: "UTC",
    }).format(new Date(iso)),
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    // Custom-domain deploy: site served at the root.
    pathPrefix: "/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
