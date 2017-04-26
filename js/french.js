console.log("Salut!");

var lexicon = (function(lexiFrench){
	var french = {happy: "bonne", "mother's": "mère", day: "journée", to: "á", the: "la", best: "meillure", mother: "mère", in: "dans", whole: "entier", world: "monde"};
	var selectLanguage = document.getElementById("selectLanguage");
	lexiFrench.getFrench = function(toFrench){
		if (selectLanguage.value === "French"){
			translate(testString, french);
		}
	}
})(lexicon);

// Happy Mother's Day! To the best mother in the whole world!