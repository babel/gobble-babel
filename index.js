var transform = require( 'babel-core' ).transform;
var dirname = require( 'path' ).dirname;

module.exports = babel;

function babel ( code, options ) {
	options.sourceMap = options.sourceMap !== false;

	// trigger use of .babelrc
	options.filename = this.src;

	return transform( code, options );
}

babel.defaults = {
	accept: [ '.js', '.es6' ],
	ext: '.js'
};
