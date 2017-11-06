const request = require('request'),
	makeRequest = async () => {
		const response = await request('https://jsonplaceholder.typicode.com/posts/1');
		console.log(response);
	};

makeRequest();
