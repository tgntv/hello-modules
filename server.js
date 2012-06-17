
var http = require("http");

function start()
{
	function onRequest(request, response)
	{
	  console.log("Request received. URL:" + request.url);
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Hello World");
	  response.end();
	}

	http.createServer(onRequest).listen(8888);

	console.log("Server started on " + new Date());
}

// exports.$publicName = $privateFunction (does not have to be the same name)
exports.start = start;
