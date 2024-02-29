const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// on - listen to the event
// emit - emit the event

customEmitter.on("response", (name, id) => {
	console.log(`data received User:${name} id:${id}`);
});

customEmitter.on("response", () => {
	console.log(`some other logic here `);
});

customEmitter.emit("response", "John", 34);
