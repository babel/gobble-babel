var transform = require( 'babel-core' ).transform;

module.exports = babel;

function babel ( code, options ) {
	options.sourceMap = options.sourceMap !== false;
	return transform( code, options );
}

babel.defaults = {
	accept: '.js'
};
