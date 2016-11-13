/**
 * Created by fisher on 8/20/16 at 8:45 PM.
 *
 * A simple http server to serve static files.
 * Http debug tool to make clear the request headers and body.
 */

'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
var log = console.log;

var port;

if (3 > process.argv.length) {
	log('Usage:');
	log('	$ node index.js <http-port>;');
	log('');
	log('Example:');
	log('	$ node index.js 3000');
	return;
}

port = +process.argv[2];
if (1 > port || 65535 < port) {
	console.error('ERROR: unavailable port! Make sure http port is number and is limited to <0-65535>.');
	return;
}
if (1024 >= port) {
	log('WARNING: Your port is not bigger than 1024, this might cause some problems!')
}

// Configure the app instance
var app = express();
// Parsing application/json
app.use(bodyParser.json());
// Parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (req, res, next) {
	res.header('x-powered-by', 'fisher95.com');
	if (req.query.charset)
		res.header('content-type', 'text/html; charset=' + req.query.charset);
	next();
});

app.use(function (req, res, next) {
	log('Got request: ' + req.url);
	next();
});

// TODO Serve other resources by given argv.
app.use(serveStatic(__dirname, {'index': ['index.html', 'index.htm']}));

app.all('*', function (req, res) {
	var data = {
		basic: {
			ip: req.ip,
			url: req.originalUrl,
			method: req.method
		},
		headers: req.headers,
		query: req.query,
		body: req.body,
		statistics: {
			// Requested time.
			time: +new Date()
		}
	};
	log(data);
	res.json(data);
});

app.listen(port);
log('Server is running on http://127.0.0.1:' + port);
log();
