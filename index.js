var server 			= require("./node/server"),
	router 			= require("./node/router"),
	requestHandlers = require("./node/requestHandlers"),
	handle 			= {};

handle["/"]         = requestHandlers.submitRequest;
handle["/reset"]    = requestHandlers.submitRequest;

server.start(router.route, handle);