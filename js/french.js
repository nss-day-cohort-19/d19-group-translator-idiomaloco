console.log("Salut!");

var Lexicon = (function(){
	var string = "Happy Mother's Day! To the best mother in the whole world!"
	var french = {"happy": "bonne", "mother's": "mère", "day!": "journée", "to": "á", "the": "la", "best": "meillure", "mother": "mère", "in": "dans", "whole": "entier", "world!": "monde"};
	var selectLanguage = document.getElementById("selectLanguage");
	return {
		getFrench: function(){
			console.log("Hi, this is the french page");
			translate(string, french);
			}
		}
})();

// Happy Mother's Day! To the best mother in the whole world!