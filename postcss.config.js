class TailwindExtractor {
    static extract(content) {
      return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
  }

  module.exports = {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      process.env.NODE_ENV === 'production'
        ? require('postcss-purgecss')({
            content: ['./index.html'],
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ["html", "js"]
              }
            ]
          })
        : function() {
          return []
        }
    ]
  }
