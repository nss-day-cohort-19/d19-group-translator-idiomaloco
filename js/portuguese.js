var ToPortuguese = (function(info){

	var string = "Happy Mother's Day! To the best mother in the whole world!";

	var portuguese = {
		"happy": "Feliz",
		"mother's": "maes",
		"day!": "dia!",
		"to": "Para",
		"the": "a",
		"best": "melhor",
		"mother": "mae",
		"in": "em",
		"the": "todo",
		"whole": "o",
		"world!": "mundo!"
	};


	info.getPortuguese = function() {
		console.log("Hi this is Portuguese");
		return portuguese;
	};

	return info;

})(Lexicon);