# gobble-babel

Compile ES6 files with gobble and babel. Creates sourcemaps automatically.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-babel babel-preset-es2015
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'src' ).transform( 'babel', options );
```

The `options` argument, if specified, is passed to babel - consult the [documentation](http://babeljs.io/docs/usage/options). Sourcemaps are created by default (all the relevant information is filled in by Gobble, you don't need to specify `sourceMapName` options etc) - if you don't want that, pass `sourceMap: false`.


## License

MIT. Copyright 2014 Rich Harris
