function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}
 
function getRandomPerf() {
	if (Math.random() < 0.5) {
		volume = 500;
	}
	if (Math.random() > 0.5) {
		volume = 1000;
	}
  	return volume; 
  }

function getRandomPerf2() {
	if (Math.random() < 0.5) {
		volume2 = 750;
	}
	if (Math.random() > 0.5) {
		volume2 = 1500;
	}
  	return volume2; 
  }

function getRandomPerf3() {
	if (Math.random() < 0.5) {
		volume3 = 250;
	}
	if (Math.random() > 0.5) {
		volume3 = 500;
	}
  	return volume3; 
  }

function getRandomVaso() {
	if (Math.random() < 0.5) {
		volume4 = 300;
	}
	if (Math.random() > 0.5) {
		volume4 = 400;
	}
  	return volume4; 
  }

function getRandomUi() {
	if (Math.random() < 0.5) {
		volume5 = 500;
	}
	if (Math.random() > 0.5) {
		volume5 = 600;
	}
  	return volume5; 
  }

function getRandomNAKC() {
	if (Math.random() < 0.5) {
		nom = "Kcl";
	}
	if (Math.random() > 0.5) {
		nom = "NaCl";
	}
  	return nom; 
  }
function pourcentage() {
	if (Math.random() < 0.5) {
		percent = 10;
	}
	if (Math.random() > 0.5) {
		percent = 20;
	}
  	return percent; 
  }

var heure1 = getRandomIntInclusive(8,20);
var resultat1 = Math.round(1000*20/(heure1*60));
document.getElementById("q1").innerHTML = ['Alfonso, ESI en 1ère année, met en place la perfusion de Mr X et qui doit être administré en ' + heure1 + 'h selon la prescription. Le volume de la perfusion est de 1l.' + '</br>Quel sera le débit de la perfusion ?'];

var heure2 = getRandomIntInclusive(25,60);
var resultat2 = Math.round(100*20/(heure2));
document.getElementById("q2").innerHTML = ['Mathilda, ESI en 1ère année, met en place la perfusion de Mme W et qui doit être administré en ' + heure2 + ' minutes selon la prescription. Le volume de la perfusion est de 500ml.' + '</br>Quel sera le débit de la perfusion ?'];

var volperf1 = getRandomPerf();
var electroNaCl = getRandomIntInclusive(1,2);
var electroKcl = getRandomIntInclusive(1,2);
var heure3 = getRandomIntInclusive(20,24);
var resultat3 = (((volperf1*1)/1000)*100)/20;
var resultat4 = (((volperf1*1)/1000)*100)/10;
var resultat5 = Math.round(((resultat3+resultat4+volperf1)*20)/(heure3*60));
document.getElementById("q3").innerHTML = ['Prescription : ' + volperf1 + 'ml de soluté Glucosé à 5 %, ' + electroNaCl + 'g de NaCL / Litre, ' + electroKcl + 'g de Kcl / Litre, A passer en ' + heure3 + 'h. Vous disposez de : </br>- poche de soluté de ' + volperf1 + '</br>- ampoule de 10 ml de NaCl à 20 %</br>- ampoule de 10 ml de KCl à 10 %</br>Calculer en ml le volume des électrolytes à ajouter dans la perfusion puis calculer le débit de la perfusion'];

var volperf2 = getRandomPerf2();
var electroNaCl = getRandomIntInclusive(1,2);
var electroKcl = getRandomIntInclusive(1,2);
var heure3 = getRandomIntInclusive(20,24);
var resultat6 = Math.round(100*20/(heure2));
var resultat7 = Math.round(100*20/(heure2));
var resultat8 = Math.round(100*20/(heure2));
document.getElementById("q4").innerHTML = ['Prescription : ' + volperf2 + 'ml de soluté Glucosé à 5 %, ' + electroNaCl + 'g de NaCL / Litre, ' + electroKcl + 'g de Kcl / Litre, A passer en ' + heure3 + 'h. Vous disposez de : </br>- ampoule de 10 ml de NaCl à 20 %</br>- ampoule de 10 ml de KCl à 10 %</br>Calculer en ml le volume des électrolytes à ajouter dans la perfusion puis calculer le débit de la perfusion'];


var volperf3 = getRandomPerf3();
var vaso = getRandomVaso();
var heure4 = getRandomIntInclusive(2,4);
var resultat9 = getRandomVaso/50;
var resultat10 = Math.round((volperf3*20)/(heure4*60));
document.getElementById("q5").innerHTML = ['Thea, jeune infirmière en manque d\'amour, prépare la perfusion d\'antiobiotique de Mr A. Elle doit préparer ' + vaso + 'mg de CLAMOXYL® à dilué dans ' + volperf3 + 'ml de G5% et à passer en ' + heure4 + 'h.</br>Thea dispose d\'ampoule de CLAMOXYL® de 50mg</br>Combien d\'ampoule va t-elle devoir utiliser ?</br>Quel sera le débit de la perfusion ?'];

var poids = getRandomIntInclusive(55,70);
var temp = (((600*poids)*5)/25000);
var resultat11 = temp.toFixed(1);
document.getElementById("q6").innerHTML = ['Vous allez administrer de l\'héparine (anticoagulant) par voie IV à Mme C à raison de 600 U/Kg/24 H.</br>Les flacons d’héparine contiennent 25000 UI dans 5 ml.</br>Mme C pèse ' + poids + ' kg.</br>Quel volume d’héparine en ml administrez-vous en 24 H ?'];


var poids2 = getRandomIntInclusive(45,60);
var ui = getRandomUi();
var dosejour = ui*poids2;
var doseparinjection = dosejour/3;
var temp = (doseparinjection*3)/5000;
var resultat12 = temp.toFixed(1);
document.getElementById("q7").innerHTML = ['Mme L, doit recevoir de la Colchymicine® (antibiotique) en IM à la dose de ' + ui + ' UI / Kg / Jour, 3x par jour.</br>Mme L pèse ' + poids2 + 'kg.</br>La Colchymicine® se présente en flacon de 5000 UI de produit actif à diluer dans 3 ml de solvant.</br>Quel volume (en ml) Mme L reçoit-elle à chaque injection ?'];

var pourcent = pourcentage();
var name = getRandomNAKC();
var resultat13 = (pourcent*10)/100;
document.getElementById("q8").innerHTML = ['Combien il y a t-il de grammes de produit actif dans une ampoule de 10ml de ' + name + ' dosé à ' + pourcent + '% ?'];


function checkq1(){

	var question1 = document.quiz1.question1.value;
	var correct = 0;

	if (question1 == resultat1) {
		correct++;
}
	
	var messages = ["Bonne réponse ! 😍", ["C'est faux ! 😭 La réponse est : " + resultat1 + " ! (1000 x 20) / (" + heure1 + " x 60) = ~" + resultat1 + "gouttes/min"]];

	if (correct == 0) {
		score = 1;
	}

	if (correct == 1) {
		score = 0;
	}

	document.getElementById("message1").innerHTML = messages[score];
	}


function checkq2(){

	var question2 = document.quiz2.question2.value;
	var correct = 0;

	if (question2 == resultat2) {
		correct++;
}
	
	var messages = ["Bonne réponse ! 😍", ["C'est faux ! 😭 La réponse est : " + resultat2 + " ! (100 x 20) / " + heure2 + " = ~" + resultat2 + "gouttes/min"]];

	if (correct == 0) {
		score = 1;
	}

	if (correct == 1) {
		score = 0;
	}

	document.getElementById("message2").innerHTML = messages[score];
	}



function checkq3(){

	var question3 = document.quiz3.question3.value;
	var question4 = document.quiz3.question4.value;
	var question5 = document.quiz3.question5.value;
	var correct = 0;

	if (question3 == resultat3) {
		correct++;
}
	if (question4 == resultat4) {
		correct++;
}
	if (question5 == resultat5) {
		correct++;
}
	
	var messages = ["Bonne réponse tout est juste ! 😍", ["C'est presque ça ! 🙄 La réponse est : " + resultat2 + " ! (100 x 20) / " + heure2 + " = ~" + resultat2], ["C'est faux ! 😭 La réponse est : " + resultat2 + " ! (100 x 20) / " + heure2 + " = ~" + resultat2]];

	if (correct == 0) {
		score = 2;
	}
	if (correct == 1) {
		score = 1;
	}
	if (correct == 2) {
		score = 1;
	}
	if (correct == 3) {
		score = 0;
	}

	document.getElementById("message3").innerHTML = messages[score];
	}


function checkq4(){

	var question6 = document.quiz4.question6.value;
	var question7 = document.quiz4.question7.value;
	var question8 = document.quiz4.question8.value;
	var correct = 0;

	if (question3 == resultat3) {
		correct++;
}
	if (question4 == resultat4) {
		correct++;
}
	if (question5 == resultat5) {
		correct++;
}
	
	var messages = ["Bonne réponse tout est juste ! 😍", ["C'est presque ça ! 🙄 La réponse est : " + resultat2 + " ! (100 x 20) / " + heure2 + " = ~" + resultat2], ["C'est faux ! 😭 La réponse est : " + resultat2 + " ! (100 x 20) / " + heure2 + " = ~" + resultat2]];

	if (correct == 0) {
		score = 1;
	}

	if (correct == 1) {
		score = 0;
	}

	document.getElementById("message4").innerHTML = messages[score];
	}

function checkq5(){

	var question9 = document.quiz5.question9.value;
	var question10 = document.quiz5.question10.value;
	var correct = 0;

	if (question9 == resultat9) {
		correct++;
}
	if (question10 == resultat10) {
		correct++;
}
	
	var messages = ["Bonne réponse tout est juste ! 😍", ["C'est presque ça ! 🙄</br> Nombre d\'ampoule necessaire : "+ volperf3 + " / 50 = " + volperf3/50 + " ampoules</br> Débit : (" + volperf3 + " x 20) / (" + heure4 + " x 60) = " + resultat10 + "gouttes/min"], ["C'est faux ! 😭</br> Nombre d\'ampoule necessaire : "+ volperf3 + " / 50 = " + volperf3/50 + " ampoules</br> Débit : (" + volperf3 + " x 20) / (" + heure4 + " x 60) = " + resultat10 + "gouttes/min"]];

	if (correct == 0) {
		score = 2;
	}
	if (correct == 1) {
		score = 1;
	}
	if (correct == 2) {
		score = 0;
	}

	document.getElementById("message5").innerHTML = messages[score];
	}


function checkq6(){

	var question11 = document.quiz6.question11.value;
	var correct = 0;

	if (question11 == resultat11) {
		correct++;
}
	var messages = ["Bonne réponse ! 😍", ["C'est faux ! 😭</br> Volume à administrer : ((600 x "+ poids + ") x 5) / 25000 = " + resultat11 + "ml/24h"]];

	if (correct == 0) {
		score = 1;
	}
	if (correct == 1) {
		score = 0;
	}

	document.getElementById("message6").innerHTML = messages[score];
	}


function checkq7(){

	var question12 = document.quiz7.question12.value;
	var correct = 0;

	if (question12 == resultat12) {
		correct++;
}
	var messages = ["Bonne réponse ! 😍", ["C'est faux ! 😭</br> Volume à administrer à chaques injection : (" + ui + " x " + poids2 + " = " + dosejour +" UI/24h. donc : " + dosejour + " / 3 = " + doseparinjection + " UI / injection. Et donc : (" + doseparinjection + " x 3) / 5000 = " + resultat12 + "ml/IM"]];

	if (correct == 0) {
		score = 1;
	}
	if (correct == 1) {
		score = 0;
	}

	document.getElementById("message7").innerHTML = messages[score];
	}


function checkq8(){

	var question13 = document.quiz8.question13.value;
	var correct = 0;

	if (question13 == resultat13) {
		correct++;
}
	var messages = ["Bonne réponse ! 😍", ["C'est faux ! 😭</br> Nombre de grammes : ("+ pourcent + " x 10) / 100 = " + resultat13 + "g"]];

	if (correct == 0) {
		score = 1;
	}
	if (correct == 1) {
		score = 0;
	}

	document.getElementById("message8").innerHTML = messages[score];
	}