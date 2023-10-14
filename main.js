Webcam.set({
    width:300,
    height:300,
    img_format:png,
    png_quality:90
});

    camera = document.getElementById("camera");
Webcam.attach( "#camera" );
function takesnap(){
    Webcam.snap(function (data_uri){document.getElementById("snap".innerHTML = '<img id="img" src="'+data_uri+'"></img>');});
}
console.log("ml5version ",ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BVORUqPw6/model.json",modeloaded);

function check(){
    img = doument.getElementById("img");
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error)
    }
    else{
        
        console.log(results);
        prdection1 = results[0].label
        if (results[0].label = okay){
            document.getElementById("Guess").innerHTML = "Okay";
            document.getElementById("emoji").innerHTML = "&#128076;";

        }
        if (results[0].label = tumbsup){
            document.getElementById("Guess").innerHTML = "Thumbs UP";
            document.getElementById("emoji").innerHTML = "&#128077;";

        }
        if (results[0].label = victory){
            document.getElementById("Guess").innerHTML = "Vitory";
            document.getElementById("emoji").innerHTML = "&#9996;";
            speak()
        }
        
        
    }

}

function speak(){
    var synth = window.speechSynthesis;
    speakdata_1 = "the first prediction is" + prediction1;
    
    var utterThis = new SpeechSynthesisUtterance(speakdata_1);
    synth.speak(utterThis);
}

