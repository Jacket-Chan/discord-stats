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
	return getTimecodes(dhtstring);
}
function getTimecodes(dhtstring) {
	//returns an array of all found timecodes
	var output = [];
	for (i = 0; i < Object.keys(dhtstring.data).length; i++) {
		console.log(i);
		console.log(Object.keys(dhtstring.data)[i]);
		for (x = 0; x < Object.keys(Object.keys(dhtstring.data)[i]).length; x++) {
			console.log(x);
			console.log(Object.keys(Object.keys(dhtstring.data)[i])[x]);
			output.push(Object.keys(Object.keys(dhtstring.data)[i])[x].t);
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