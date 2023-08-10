function setup(){
    canvas = createCanvas(550 , 550);
        canvas.position(800 , 100);

        video = createCapture(VIDEO);
        video.size = (550,500);

        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }

    function modelLoaded(){
        console.log("PoseNet is getting initailized ");
    }
    
    function gotPoses(results){
        if(results.legnth > 0){
            console.log(results);
        }
    }
    
    function draw(){
        background('#d280f2');
    }
    