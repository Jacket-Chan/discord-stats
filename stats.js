//god have mercy on my soul
//(id / 4194304) + 1420070400000
var date = new Date();
var begindate = 0;
//begindate is the timestamp of the oldest message, where the graph begins
document.getElementById("inputfile").addEventListener('change', function() {
	var reader = new FileReader();
	reader.onload = function(event) {
		thing(reader.result);
	};
	reader.readAsText(this.files[0]);
});
function thing(dhtstring) {
	var xstep = document.getElementById("inputxstep").value;
	var ystep = document.getElementById("inputystep").value;
	activity(dhtstring, xstep)
		.then(activitydata => {
			document.getElementById("output").innerHTML = activitydata;
			document.getElementById("output2").innerHTML = activityGraph(activitydata, xstep, ystep);
	});
}

async function activity(dhtstring, step) {
	//dhtstring is the unparsed json dhtstring
	//step is the period of time between each index in seconds (default being an hour)
	//servertc is the timecode for server creation (serverid isn't provided so oldestChannel() is used to find the creation timecode of the oldest channel instead)
	var json = JSON.parse(dhtstring);
	var timecodes = getTimecodes(json);
	timecodes.sort();
	var output = new Array(Math.ceil((timecodes.slice(-1)[0] - timecodes[0]) / (step*1000))).fill(0);
	begindate = timecodes[0];
	for (i = 0; i < timecodes.length; i++) {
		output[Math.floor((timecodes[i] - timecodes[0]) / (step*1000))]++;
	}
	return output;
}
function getTimecodes(json) {
	//returns an array of all found timecodes
	var output = [];
	for (var channel in json.data) {
		for (var message in json.data[channel]) {
			output.push(json.data[channel][message]["t"]);
		}
	}
	return output;
}
/*function oldestChannel(json) {
	//returns the timecode of the oldest channel
	return agebyid(Object.keys(json.data).sort()[0]);
}
function agebyid(id) {
	//gets timecode of whatever you put in by its ID
	return Math.round((id / 4194304) + 1420070400000);
}*/
function activityGraph(activitydata, xstep, ystep) {
	// TODO: Replace this with something better.
	console.log(begindate);
	var begin = new Date(begindate);
	var output = "X-step: "+xstep+" seconds, Y-step: "+ystep+" post. Beginning date: "+(begin.getMonth() + 1)+"/"+begin.getDate()+"/"+begin.getFullYear();
	var breakstring = "<br>";
	var barstring = "#";
	for (i = 0; i < activitydata.length; i++) {
		output += breakstring;
		for (x = 0; x < Math.ceil(activitydata[i] / ystep); x++) {
			output += barstring;
		}
	}
	return output;
}