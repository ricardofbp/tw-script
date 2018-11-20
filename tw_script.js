var jobId = window.prompt("Insert job ID");
var posX = window.prompt("Insert job x-pos");
var posY = window.prompt("Insert job y-pos");
var duration = window.prompt("Insert job duration");
var interval =  window.prompt("Insert interval between jobs");

var automate = function(){
     automate = function(){}; // kill it as soon as it was called
  var i = 0;
  //setInterval(function(){JobWindow.startJob(jobId, posX, posY, duration)}, interval)
  setInterval(function(){console.log("debug " + i)}, 2000);
  alert("aviso só pode aparecer uma vez")

}

automate();

