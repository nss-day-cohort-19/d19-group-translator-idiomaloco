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
lexicon.getFrench();
