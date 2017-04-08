#!/usr/bin/env node

const browserSync = require('browser-sync').create();
const modRewrite = require('connect-modrewrite');
const debounce = require('lodash.debounce');
const proxy = require('proxy-middleware');
const url = require('url');

const baseDir = './';
const watchFiles = [
	baseDir + 'build/**/*.js',
	'./index.html'
];

function onFilesChanged(event, file) {
	console.log(event, file);
	if (event === 'change') {
		browserSync.reload(file);
	}
}

browserSync.watch(watchFiles, debounce(onFilesChanged, 300));

const proxyOptions = url.parse('http://solr:8983/solr/mondrian/select');
proxyOptions.route = '/full-text-search';

browserSync.init({
	server: {
		baseDir: baseDir,
		middleware: [
			proxy(proxyOptions),
			modRewrite([
				'^[^\\.]*$ /index.html [L]'
			])
		]
	}
});
