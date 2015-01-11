module.exports = to5;

function to5 ( code, options ) {
	options.sourceMap = options.sourceMap !== false;
	return require( '6to5-core' ).transform( code, options );
}

to5.id = '6to5';

to5.defaults = {
	accept: '.js'
};
