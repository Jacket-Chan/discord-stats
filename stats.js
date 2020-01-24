//god have mercy on my soul
//(id / 4194304) + 1420070400000
var date;
function thing() {
	date = new Date();
	var dhtstring = JSON.parse(document.getElementById("input").value);
	var xstep = document.getElementById("inputxstep").value;
	var ystep = document.getElementById("inputystep").value;
	//console.log(date.getTime());
	//console.log(oldestChannel(dhtstring));
	var activitydata = activity(dhtstring, xstep);
	document.getElementById("output").innerHTML = activitydata;
	document.getElementById("output2").innerHTML = activityGraph(activitydata, xstep, ystep);
}
function activity(dhtstring, step) {
	//dhtstring is the original json dhtstring
	//step is the period of time between each index in milliseconds (default being an hour)
	//console.log(output);
	//console.log(dhtstring.data);
	//servertc is the timecode for server creation (serverid isn't provided so oldestChannel() is used to find the creation timecode of the oldest channel instead)
	var output = [];
	var timecodes = getTimecodes(dhtstring);
	//console.log(timecodes);
	var servertc = oldestChannel(dhtstring);
	//console.log(Math.ceil((date.getTime() - servertc) / step));
	output = filledArray(Math.ceil((date.getTime() - servertc) / step));
	for (i = 0; i < timecodes.length; i++) {
		//console.log(timecodes[i]);
		//console.log(i);
		output[Math.floor((timecodes[i] - servertc) / step)]++;
	}
	//console.log(output.length);
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
	var output = date.getTime();
	for (i = 0; i < channels.length; i++) {
		if (output > agebyid(channels[i])) {
			output = agebyid(channels[i]);
		}
	}
	return output;
}
function agebyid(id) {
	//gets timecode of whatever you put in by its ID
	return Math.round((id / 4194304) + 1420070400000);
}
function activityGraph(activitydata, xstep, ystep) {
	var output = "X-step: "+xstep+" Y-step:"+ystep;
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










