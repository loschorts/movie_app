module.exports = {
  entry: "frontend/entry.jsx",
  output: {
      path: "app/assets/javascripts",
      filename: "bundle.js"
  },
  module: {
	  loaders: [
	    {
	      test: [/\.jsx?$/, /\.js?$/], // specifies file types to transpile
	      exclude: /(node_modules)/, // leaves dependencies alone
	      loader: 'babel', // sets Babel as the transpiler
	      query: {
	        presets: ['es2015', 'react'] // tells Babel what syntaxes to translate
	      }
	    }
	  ]
	},
	devtool: 'source-map'
};