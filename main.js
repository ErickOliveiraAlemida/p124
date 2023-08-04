function setup (){
    video = createCapture(VIDEO)
    video.hide()
    video.size(550, 420)
    canvas = createCanvas(550, 420)
    canvas.position(560, 150)
    poseNet = ml5.poseNet(video, modelLoad())
    poseNet.on("pose", gotPoses)
}
function draw (){
    background("#969A97")
}

function modelLoad (){
    console.log("modelo carregado")
}

function gotPoses(results){
    if (results.length > 0) {
        console.log(results)
    }
}