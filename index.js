module.exports = _6to5;

function _6to5 ( code, options ) {
	options.filename = this.filename;
	//options.sourceMap = true;
	var transformed = require( '6to5' ).transform( code, options );

	return transformed.code;
}

_6to5.defaults = {
	accept: '.js'
};
