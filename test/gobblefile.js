var gobble = require( 'gobble' ),
	to5 = require( '../' ),

	root,
	js;

root = gobble( 'src/root' );
js = gobble( 'src/js' ).transform( to5, {
	sourceMap: true
});

module.exports = gobble([ root, js ]);
