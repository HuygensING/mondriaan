export default (html: string) =>
`<!DOCTYPE html>
<link rel="stylesheet" href="index.css">
<div id="container">${html}</div>
<script src="bundle.js"></script>`;
