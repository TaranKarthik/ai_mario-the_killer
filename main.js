function preload() {
	world_start = loadSound("world_start.wav");
	game_over = loadSound("ahh.mp3");
	death = loadSound("mariodie.wav");
	jumpMarioMario = loadSound("jump.wav");
	collectCoin = loadSound("coin.wav");
	killedEnemies = loadSound("bloodSPlata.mp3");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on("pose",gotResults);
}

function modelLoaded(){
	console.log("Posenet initialized");

}

function gotResults(results){
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}






