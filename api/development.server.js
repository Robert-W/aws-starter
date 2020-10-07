const express = require('express');
const glob = require('glob');
const path = require('path');

// Lambda Wrapper to emulate the lambda function
function lambda(handler) {
	return async function responseHandler(req, res) {
		// TODO: Inject event and context into handler
		let result = await handler();
		// return our result through express
		res.json(result);
	};
}

// Create our express app
let app = express();

// Find all of our endpoints based on this pattern
let endpoints = glob.sync(path.resolve('**!(node_modules)/index.js'));

// For each endpoint/method, stand up a simple route
endpoints.forEach((endpoint) => {
	let module = require(endpoint);
	// Check for required properties before setting the route
	if (module.dev && module.handler) {
		let { route, methods } = module.dev;
		/**
		 * Add an endpoint for each method
		 * We follow the standard API convention of
		 * get post /route
		 * put delete /route/<id>
		 */
		methods.forEach((method) => {
			if (method === 'put' || method === 'delete') {
				app[method](path.join(route, ':id'), lambda(module.handler));
			} else {
				app[method](route, lambda(module.handler));
			}
		});
	}
});

// Start our server
app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening on ${process.env.PORT || 8080}`);
});
