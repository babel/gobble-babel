module.exports = babel;

function babel ( code, options ) {
	options.sourceMap = options.sourceMap !== false;
	return require( 'babel-core' ).transform( code, options );
}

babel.id = 'babel';

babel.defaults = {
	accept: '.js'
};
