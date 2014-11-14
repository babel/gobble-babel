module.exports = _6to5;

function _6to5 ( code, options ) {
	options.filename = this.filename;

	var transformed = require( '6to5' ).transform( code, options );
	return options.sourceMap ? transformed : transformed.code;
}

_6to5.defaults = {
	accept: '.js'
};
