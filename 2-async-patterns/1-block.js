const http = require("http");

const server = http.createServer((req, res) => {
	console.log("request event");
	if (req.url === "/") {
		res.end("Home Page");
	} else if (req.url === "/about") {
		for (let i = 1; i < 1000; i++) {
			for (let j = 1; j < 1000; j++) {
				console.log(`${i} and ${j}`);
			}
		}
		res.end("About Page");
	} else {
		res.end("Error Page");
	}
});

server.listen(5432, () => {
	console.log("Server listening on port : 5432....");
});
