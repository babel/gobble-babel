var gobble = require( 'gobble' ),
	to5 = require( '../' );

module.exports = gobble([
	'src/root',
	gobble( 'src/js' ).transform( to5 )
]);
