function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('',modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(){
    if (error) {
        console.error(error);
    }else{
      console.log(results);
      random_number_r = Math.floor(Math.random() *255) +1;
      random_number_g = Math.floor(Math.random() *255) +1;
      random_number_b = Math.floor(Math.random() *255) +1;

      document.getElementById("result_label").innerHTML='I can hear - '+
      results[0].label;
      document.getElementById("result_confidence").innerHTML='Accuracy - '+
      (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color="rgb("
      +random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidnce").style.color="rgb("
      +random_number_r+","+random_number_g+","+random_number_r+")";
      
      img=document.getElementById('Cat');
      img1=document.getElementById('Dog');
      img2=document.getElementById('Bird');

      if (results[0].label=="Meow"){
        img.src='Cat_purring.gif';
        img1.src='Dog.png';
        img2.src='Bird.png';
      }

      if (results[0].label=="Bark"){
        img.src='Cat.png';
        img1.src='Dog_barking.gif';
        img2.src='Bird.png';
      }

      if (results[0].label=="Chirp"){
        img.src='Cat.png';
        img1.src='Dog.png';
        img2.src='Bird_flying.gif';
      }

    }

}