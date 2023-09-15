objects = [];
status = "";


function setup(){
    Canvas = createCanvas(380,380);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380)
    video.hide()
}
function start(){
Object=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById('status').innerHTML="Status: Detectando objetos"
}
function modelLoaded(){
    console.log("modelo carregado");
status = true;
}
function draw(){
    image(video,0,0,380,380);

if(status!=""){
    Object.detect(video,gotResults);
    for(var i = 0; i < objects.length;i++){
        document.getElementById('status').innerHTML="Status:  Objetos  detectados ";
        document.getElementById('numero-de-objetos').innerHTML= "Quantidade de objetos detectados " +objectsLength;
    
}
}
}
function gotResults(error,results){
    if(error){
        console.log(error);

    }
    console.log(results);
    objects= results;
}