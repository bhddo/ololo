canvas = createCanvas(550, 550);
canvas.position(560,150);


poseNet = ml5.poseNet(VIDEO, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
console.log('poseNet Is Initialized!');
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
}
}
function draw()
{
background("#969A97");

document.getElementById( "square_side").innerHTML = "Largura e altura serão = =" + difference +"px";
FileList("#90093");
stroke("#f90093");
square(noseX, noseY, difference);
}
