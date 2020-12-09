let submit = document.getElementById("submit");


submit.addEventListener("click", (e) => {
  e.preventDefault();
  
  let one = Number(document.getElementById("firstCandidat").value);
  let two = Number(document.getElementById("secondCandidat").value);
  let three = Number(document.getElementById("threeCandidat").value);
  let four = Number(document.getElementById("fourCandidat").value);
  
  let totalVote = one+two+three+four;
  let voix = totalVote/2;

  let secondTour = totalVote*0.12;
  let calculOneSecondTour = (one/totalVote)*100;
  let calculTwoSecondTour = (two/totalVote)*100;
  let calculThreeSecondTour = (three/totalVote)*100;
  let calculFourSecondtour= (four/totalVote)*100;


  if (one>voix){
  affichage.innerHTML = `Tu es élu`;
  }else if(two>voix || three>voix || four>voix){
  affichage.innerHTML = `Tu es battu`;
}else if((one<voix && two<voix && three<voix && four<voix && one>=secondTour) && ((calculOneSecondTour>calculTwoSecondTour) || (calculOneSecondTour>calculThreeSecondTour) || (calculOneSecondTour>calculFourSecondtour))){
  affichage.innerHTML = `Tu es passé au second tour et en tête`;
  console.log(calculTwoSecondTour);
}else if((one<voix && two<voix && three<voix && four<voix && one>=secondTour) && ((calculOneSecondTour<calculTwoSecondTour) || (calculOneSecondTour<calculThreeSecondTour) || (calculOneSecondTour<calculFourSecondtour))){
  affichage.innerHTML = `Tu es passé au second tour mais pas en tête`;
}
});