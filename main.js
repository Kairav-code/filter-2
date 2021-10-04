moustacheX = 0;
moustacheY =  0;

hatX = 0;
hatY = 0;


function preload(){
    moustache = loadImage('https://i.postimg.cc/MpmPCMtD/mustache-student-math-favorite-for-friday-the-the-1.png');
    hat = loadImage('https://i.postimg.cc/jqBcS4Qt/hat-PNG5705.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet  is Initialized');
}

function gotPoses(results){

    if (results.length > 0){
    console.log(results);
    moustacheX =  results[0].pose.nose.x-25;
    moustacheY =  results[0].pose.nose.y;

    console.log("moustacheX = " +moustacheX);
    console.log("moustacheY = " +moustacheY);

    hatX =  results[0].pose.rightEye.x-75;
    hatY =  results[0].pose.rightEye.y-150;

    console.log("hatX = " +hatX);
    console.log("hatY = " +hatY);
    }  
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, moustacheX, moustacheY, 50, 30);
    image(hat, hatX, hatY, 200, 100);
}

function take_snapshot(){
    save('myFilterImage.png')
}