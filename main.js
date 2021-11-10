nose_x = 0;
nose_y = 0;

function preload()
{
  clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide(); 
    
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose' , gotPoses);
    
}

function gotPoses(results)
{
    if(results.length > 0)
    {
       console.log(results);
       nose_x = results[0].pose.nose.x - 15;
       nose_y = results[0].pose.nose.y - 15;       
       console.log("Nose X = " + nose_x);
       console.log("Nose Y = " + nose_y);
    }
}


function modelLoaded()
{
    console.log("Posenet is Loaded");
}


function draw()
{
   image(video , 0 , 0 , 300 , 300);
   image(clown_nose , nose_x , nose_y , 25,25);
}

function take_snapshot()
{
 save('myFilter.png');
}

