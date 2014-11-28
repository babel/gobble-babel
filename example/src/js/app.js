let { greeting, name } = data();
let html = `
	<h1>${greeting}, ${name}!</h1>
	<p>This is a multiline string.`;

window.onload = () => document.body.innerHTML = html;

console.log( 'html', html );

function data () {
	var greeting = 'Hello', name = 'world';
	return { greeting, name };
}
