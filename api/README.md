# API
> Lambda functions sitting behind an API Gateway

## How do I?

### Add an endpoint
To add a new endpoint, you need to add a new directory that has the following structure:

```
<endpoint-name>
- index.js
- index.test.js
- package.json
```

`index.js` should have the following exports:

#### dev: Object
An object for enabling this function on the development server. It should have a string property called `route` and an array property called `methods`.

#### handler: function
This is your lambda function, use the following boilerplate:

```javascript
module.exports.handler = async function endpointHandler(event, context) {
	return new Promise((resolve, reject) => {
		return resolve({
			status: 200,
			content: ''
		});
	});
};
```
