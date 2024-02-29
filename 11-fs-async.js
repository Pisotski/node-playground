const { readFile, writeFile } = require("fs");

console.log("start");
const callback = (err, result) => {
	if (err) return;
	const first = result;
	readFile("./content/second.txt", "utf8", (err, result) => {
		if (err) return;
		const second = result;
		writeFile(
			"./content/result-async.txt",
			`Async merge: ${first}, ${second} `,
			"utf8",
			(err, result) => {
				if (err) return;
				console.log("done with this task");
			}
		);
	});
};
readFile("./content/first.txt", "utf8", callback);

console.log("starting next file");
