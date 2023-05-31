var song_1="";
var song_2="";
var video="";
var canvas="";
function preload(){
    song_1=loadSound("Song_1.mp3");
    song_2=loadSound("Song_2.mp3");
}
function setup(){
  canvas=createCanvas(600,500);
  canvas.center();

  video=createCapture(VIDEO);
  video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song_1.play();
    song_2.play();
}