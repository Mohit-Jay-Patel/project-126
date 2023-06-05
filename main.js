var song_1="";
var song_2="";
var video="";
var canvas="";

var leftWrist_X=0;
var leftWrist_Y=0;

var rightWrist_X=0;
var rightWrist_Y=0;

var scoreLeftWrist=0;
var scoreRightWrist=0;

function preload(){
    song_1=loadSound("Song_1.mp3");
    song_2=loadSound("Song_2.mp3");
}
function setup(){
  canvas=createCanvas(600,500);
  canvas.center();

  video=createCapture(VIDEO);
  video.hide();

  pose_net=ml5.poseNet(video,modelloaded);
  pose_net.on("pose",gotPoses);

}
function modelloaded(){
    console.log("Model Has Been Loaded");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWrist_X=results[0].pose.leftWrist.x;
        leftWrist_Y=results[0].pose.leftWrist.y;
        console.log("LeftWrist X = "+leftWrist_X+"Left Wrist Y = "+leftWrist_Y);

        rightWrist_X=results[0].pose.rightWrist.x;
        rightWrist_Y=results[0].pose.rightWrist.y;
        console.log("RightWrist X = "+rightWrist_X+"RightWrist Y = "+rightWrist_Y);

        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("ScoreLeftWrist = "+scoreLeftWrist);
    }
}

function draw(){
    image(video,0,0,600,500);

    fill("#ff0000");
    stroke("#ff0000");
    var left_status=song_1.isPlaying();

    if(scoreLeftWrist > 0.2){
        circle(leftWrist_X,leftWrist_Y,20);
        song_2.stop();
        if(left_status==false){
          song_1.play();
          document.getElementById("song_name").innerHTML="Namo Namo Song";
        }
    }
}
function play(){
    song_1.play();
    song_2.play();
    song_1.setVolume(1);
    song_1.rate(1);
    song_2.setVolume(1);
    song_2.rate(1);
}