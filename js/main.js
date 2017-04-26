function translate(string, lexicon){
	string = string.toLowerCase();
	console.log(string);
	var wordArray = string.split(" ");
	console.log(wordArray);
	var newArray = [];
	for (var i = 0; i < wordArray.length; i++){
		for (prop in lexicon){
			// console.log("prop", prop, "value", lexicon[prop]);
			if (wordArray[i] === prop){
				console.log(wordArray[i], "matches at:", lexicon[prop]);
				newArray.push(lexicon[prop]);
				console.log(newArray);
			}
		};
	};
	var translatedStr = newArray.join(" ");
	console.log(translatedStr);
	return translatedStr;
}

var output = document.getElementById("output");
var button = document.getElementById("translate");
var selectLanguage = document.getElementById("selectLanguage");

button.addEventListener("click", function(event){
	var userInput = document.getElementById("userInput");
	var testString = userInput.value;
	if (selectLanguage.value === "Arabic"){
		console.log("You clicked Arabic!");
		translate(testString, Lexicon.getArabic());
	} else if (selectLanguage.value === "Portuguese"){
		console.log("You clicked Portuguese!");
		translate(testString, Lexicon.getPortuguese());
	} else if (selectLanguage.value === "French"){
		console.log("You clicked French!");
		translate(testString, Lexicon.getFrench());
	} else if (selectLanguage.value === "German"){
		console.log("You clicked German!");
		translate(testString, Lexicon.getGerman());
	}
});
