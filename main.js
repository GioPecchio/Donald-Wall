var coins = 0;
var bricks = 0;
var level = 0;
var workers = 0;
var remaining = 100;

var bodyObj = document.getElementById('body');

function coinClick(number){
  coins = coins + number;
  document.getElementById("coins").innerHTML = coins;
};

function buyBrick(){
  var brickCost = Math.floor(10 * Math.pow(1.1,bricks));
  if(coins >= brickCost){
      bricks = bricks + 1;
  	  coins = coins - brickCost;
      document.getElementById('bricks').innerHTML = bricks;
      document.getElementById('coins').innerHTML = coins;
      remaining = remaining - 1;
      document.getElementById('remaining').innerHTML = remaining;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1,bricks));
  document.getElementById('brickCost').innerHTML = nextCost;
  level = Math.floor(bricks/5);
  if (bricks == 10) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-5.png'/>";
  }else if (bricks == 15) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-10.png'/>";
  }else if (bricks == 20) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-15.png'/>";
  }else if (bricks == 25) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-20.png'/>";
  }else if (bricks == 30) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-25.png'/>";
  }else if (bricks == 35) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-30.png'/>";
  }else if (bricks == 40) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-35.png'/>";
  }else if (bricks == 45) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-40.png'/>";
  }else if (bricks == 50) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-45.png'/>";
  }else if (bricks == 55) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-50.png'/>";
  }else if (bricks == 60) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-55.png'/>";
  }else if (bricks == 65) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-60.png'/>";
  }else if (bricks == 70) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-65.png'/>";
  }else if (bricks == 75) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-70.png'/>";
  }else if (bricks == 80) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-75.png'/>";
  }else if (bricks == 85) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-80.png'/>";
  }else if (bricks == 90) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-85.png'/>";
  }else if (bricks == 95) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-90.png'/>";
  }else if (bricks == 100) {
    document.getElementById("bricks-img-12").innerHTML="<img src='img/wall-row-95.png'/>";
  }

  if(remaining == -1){
    window.alert("You Won");
    location.reload();
  }
};

function buyWorker(){
  var workerCost = 15 + Math.floor(10 * Math.pow(1.70,workers));
  var bricksCheck = Math.floor(bricks/5 - 1);
  if(coins >= workerCost && bricksCheck >= 0 && bricks >= 0 && level > workers){
      workers = workers + 1;
  	  coins = coins - workerCost;
      document.getElementById('workers').innerHTML = workers;
      document.getElementById('coins').innerHTML = coins;
  };
  var nextWorkerCost = 15 + Math.floor(10 * Math.pow(1.70,workers));
  document.getElementById('workerCost').innerHTML = nextWorkerCost;
};

window.setInterval(function(){
	coinClick(workers*11);
}, 1000)

function showDiv() {
   document.getElementById('guide-div').style.display = "block";
}
