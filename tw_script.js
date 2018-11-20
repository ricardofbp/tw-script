var jobId = parseInt(window.prompt("Insert job ID", 0));
var posX = parseInt(window.prompt("Insert job x-pos", 0));
var posY = parseInt(window.prompt("Insert job y-pos"), 0);
var duration = parseInt(window.prompt("Insert job duration", 0));
var intervalBetweenJobs =  parseInt(window.prompt("Insert interval between jobs", 0));

var jobCounter = 0;

var badInput = false;

function validateInputs() 
{
    if (jobId <= 0) badInput = true;
	else if (posX <= 0) badInput = true;
	else if (posY <= 0) badInput = true;
	else if (duration <= 0) badInput = true;
	else if (interval <= 0 || interval <= duration) badInput = true;
}

var automate = function()
{
	if (!badInput) 
	{
		automate = function(){}; // kill it as soon as it was called 
		setInterval(function()
		{
			JobWindow.startJob(jobId, posX, posY, duration);
			console.log("Job done " + jobCounter + " times");
		}, intervalBetweenJobs);
    }

    else alert("Bad input, restart the script");

}

automate();

