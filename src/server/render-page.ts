export default (html: string) =>
`<!DOCTYPE html>
<style>
	html, body {
		margin: 0;
		padding: 0;
	}	
</style>
<div id="container">${html}</div>
<script src="bundle.js"></script>`;
