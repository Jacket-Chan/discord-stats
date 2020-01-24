//god have mercy on my soul
//(id / 4194304) + 1420070400000
var date;
function thing() {
	date = new Date();
	var dhtstring = JSON.parse(document.getElementById("input").value);
	//console.log(date.getTime());
	document.getElementById("output").innerHTML = activity(dhtstring);
}
function activity(dhtstring, step = 3600000) {
	//dhtstring is the original json dhtstring
	//step is the period of time between each index in milliseconds
	//console.log(output);
	//console.log(dhtstring.data);
	//servertc is the timecode for server creation
	var output = [];
	var timecodes = getTimecodes(dhtstring);
	var servertc = 0;
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
function oldestChannel(dhtstring) {
	//returns the timecode of the oldest channel
	var channels = Object.keys(dhtstring.data);
	//for (i = 0; )
}
function agebyid(id) {
	//gets timecode of whatever you put in by its ID
	return (id / 4194304) + 1420070400000;
}











