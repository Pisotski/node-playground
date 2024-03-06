const { readFile } = require("fs").promises;
require("colors");

(async () => {
	const startTime = Date.now();
	try {
		// setTimeout(() => {
		// 	throw new Error("the file is too large");
		// }, 35);

		setTimeout(() => {
			console.log(`i should be first`);
		}, 25);

		setTimeout(() => {
			console.log(`i should be last`.blue);
		}, 45);
		await readFile("./content/big.txt", "utf8");
		const milliseconds = Date.now() - startTime;
		console.log(`time check in try ${Math.floor(milliseconds)} milliseconds`);
	} catch (err) {
		console.log(`From catch ${err}`);
	} finally {
		setTimeout(() => {
			console.log(`i should be second`.yellow);
		}, 10);
		const milliseconds = Date.now() - startTime;
		console.log(`reading took ${Math.floor(milliseconds)} milliseconds`);
	}
})();
