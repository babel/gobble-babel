var transform = require( 'babel-core' ).transform;
var resolveRc = require( 'babel-core/lib/babel/tools/resolve-rc' );
var dirname = require( 'path' ).dirname;

module.exports = babel;

function babel ( code, options ) {
	options.sourceMap = options.sourceMap !== false;

	// apply .babelrc files
	resolveRc( dirname( this.src ), options );

	return transform( code, options );
}

babel.defaults = {
	accept: [ '.js', '.es6' ],
	ext: '.js'
};
