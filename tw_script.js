var jobId = parseInt(window.prompt("Insert job ID", 0));
var posX = parseInt(window.prompt("Insert job x-pos", 0));
var posY = parseInt(window.prompt("Insert job y-pos"), 0);
var duration = parseInt(window.prompt("Insert job duration", 0));
var intervalBetweenJobs = parseInt(window.prompt("Insert interval between jobs", 0));
var checkEnergy, doJob;
var jobCounter = 0;

var badInput = false;

recordFp = function(){}; //disables anticheat???

function validateInputs() 
{
    if (jobId <= 0) { badInput = true; }
	else if (posX <= 0) { badInput = true; }
	else if (posY <= 0) { badInput = true; }
	else if (duration <= 0) { badInput = true; }
	else if (intervalBetweenJobs <= 0 || intervalBetweenJobs <= duration) { badInput = true; }

}

var automate = function()
{
	validateInputs();
	
	console.log("Starting job " + jobId + " at pos " + "(" + posX + ", " + posY + ") with " + duration + " secs duration with an invertal of " + intervalBetweenJobs + " secs");
	if (!badInput)
	{
		automate = function(){}; // kill it as soon as it was called 

		doJob = setInterval(function()
		{
			JobWindow.startJob(jobId, posX, posY, duration);
			jobCounter = jobCounter + 1;
			console.log("Job done " + jobCounter - 1 + " times");
			
		}, intervalBetweenJobs*1000);
    	
    	checkEnergy = setInterval(function()
		{
			console.log("Checking energy: " + Character.energy);
			if (Character.energy <= 10) {
				clearInterval(checkEnergy);
				clearInterval(doJob);

				//go to HOME town and sleep
				//TODO go to any near town, possible?
				console.log("Low energy: " + Character.energy);
				console.log("Going to home town id (=" + Character.homeTown.town_id + ") to rest");
				HotelWindow.open(Character.homeTown.town_id);
				HotelWindow.start("luxurious_apartment");
			}
				
		}, intervalBetweenJobs * 2 * 1000);
	}

    else alert("Bad input, restart the script");
}

automate();