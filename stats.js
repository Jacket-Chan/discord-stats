//god have mercy on my soul
var date;
function thing() {
	date = new Date();
	console.log(date.getTime());
	document.getElementById("output").innerHTML = activity(JSON.parse(document.getElementById("input").value));
}
function activity(dhtstring) {
	//dhtstring is the original json dhtstring
	//step is the period of time between each index in milliseconds
	var output = getTimecodes(dhtstring);
	//console.log(output);
	//console.log(dhtstring.data);
	return output;
}
function getTimecodes(dhtstring) {
	//returns an array of all found timecodes
	var output = [];
	for (i = 0; i < Object.keys(dhtstring.data).length; i++) {
		//console.log(i);
		//console.log(Object.keys(dhtstring.data)[i]);
		//console.log(Object.keys(dhtstring.data));
		//console.log(Object.keys(dhtstring["data"]));
		for (x = 0; x < Object.keys(dhtstring.data[Object.keys(dhtstring.data)[i]]).length; x++) {
			//console.log(x);
			//console.log(Object.keys(Object.keys(dhtstring.data)[i])[x]);
			//console.log(Object.keys(Object.keys(dhtstring.data)[i]));
			//console.log(Object.keys(dhtstring[data]))
			//console.log(Object.keys(dhtstring.data[Object.keys(dhtstring.data)[i]]).length);
			//console.log(dhtstring.data[Object.keys(dhtstring.data)[i]][Object.keys(dhtstring.data[Object.keys(dhtstring.data)[i]])[x]]["t"]);
			output.push(dhtstring.data[Object.keys(dhtstring.data)[i]][Object.keys(dhtstring.data[Object.keys(dhtstring.data)[i]])[x]]["t"]);
		}
	}
	return output;
}
function filledArray(index) {
	//fills an array with zeros until index
	var output = [];
	for (i = 0; i < index; i++) {
		output.push(0);
	}
	return output;
}