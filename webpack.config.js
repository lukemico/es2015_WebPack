// The 4 points we need to answer when setting up a file.

// Entry point for my App?
// Where to put the compiled files
// How to compile the files?
// Anything extra? Plugins...

module.exports = () => {

  return {
      entry:    [
        './app.es6'
      ],
      devtool: 'source-map',
      output:   {
        filename: 'compiled.js'
      },
      module:   {
          rules: [
            {
              test: /\.es6$/,
              exclude: /node_modules/,
              use: [ 'babel-loader' ]
            }
          ]
      },
      plugins:  []
  };

};
