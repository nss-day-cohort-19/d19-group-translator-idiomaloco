console.log("Salut!");

var Lexicon = (function(){
	var french = {"happy": "bonne", "mother's": "mère", "day!": "journée", "to": "á", "the": "la", "best": "meillure", "mother": "mère", "in": "dans", "whole": "entier", "world!": "monde"};
	return {
		getFrench: function(){
			console.log("Hi, this is the french page");
			return french;
			}
		}
})();

// Happy Mother's Day! To the best mother in the whole world!
