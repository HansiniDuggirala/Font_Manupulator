function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);  

    canvas = createCanvas(400,400);
    canvas.position(700,115);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet is instialized');
}

function draw()
{
    background('#ff99ab');
}

function gotPoses()
{
    if(SpeechRecognitionResultList.length > 0)
    {
        console.log(results);
    }
}