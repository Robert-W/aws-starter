/**
 * @module example
 * @description Example Lambda endpoint
 */

/**
 * Development configurations for running/testing this in our development environment
 */
module.exports.dev = {
	route: '/endpoint',
	methods: [
		'get',
		'put',
		'post',
		'delete'
	]
};

/**
 * @function handler
 * @description Lambda function that should handle the above methods
 */
module.exports.handler = async function endpointHandler(event, context) {
	return new Promise((resolve, reject) => {
		return resolve({
			status: 200,
			content: ''
		});
	});
};
