function preload() {
  mustache = loadImage(
    "https://i.postimg.cc/pXGR5pw2/mustache-transparent-background-5.png"
  );

}
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function modelLoaded() {
  console.log("Pose Net is Initialized!");
}
noseX = 0;
noseY = 0;
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x=" + results[0].pose.nose.x);
    console.log("nose y=" + results[0].pose.nose.y);
  }
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(mustache, noseX - 40, noseY -0, 80, 40);
}
function take_snapshot() {
  save("Rudolph the Red Nosed YOU!!!.png");
}
