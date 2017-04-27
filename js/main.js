
function translate(string, lexicon){
	string = string.toLowerCase();
	// console.log(string);
	var wordArray = string.split(" ");
	// console.log(wordArray);
	var newArray = [];
	for (var i = 0; i < wordArray.length; i++){
		for (prop in lexicon){
			// console.log("prop", prop, "value", lexicon[prop]);
			if (wordArray[i] === prop){
				// console.log(wordArray[i], "matches at:", lexicon[prop]);
				newArray.push(lexicon[prop]);
				// console.log(newArray);
			}
		};
	};
	var translatedStr = newArray.join(" ");
	console.log(translatedStr);
	return translatedStr;
}




//Event Listeners
var output = document.getElementById("output");
var button = document.getElementById("translate");
var selectLanguage = document.getElementById("selectLanguage");

button.addEventListener("click", function(event){
	var userInput = document.getElementById("userInput");
	var testString = userInput.value;
	var audio = document.getElementById("audio");
	if (selectLanguage.value === "Hindi"){
		console.log("You clicked Hindi!");
		output.innerHTML = translate(testString, Lexicon.getHindi());
		audio.addEventListener("click", function(){
		responsiveVoice.speak(output.innerHTML, "Hindi Female");
		})
	} else if (selectLanguage.value === "Portuguese"){
		console.log("You clicked Portuguese!");
		output.innerHTML = translate(testString, Lexicon.getPortuguese());
		audio.addEventListener("click", function(){
		responsiveVoice.speak(output.innerHTML, "Portuguese Female");
		})
	} else if (selectLanguage.value === "French"){
		console.log("You clicked French!");
		output.innerHTML = translate(testString, Lexicon.getFrench());
		audio.addEventListener("click", function(){
		responsiveVoice.speak(output.innerHTML, "French Female");
		})
	} else if (selectLanguage.value === "German"){
		console.log("You clicked German!");
		output.innerHTML = translate(testString, Lexicon.getGerman());
		audio.addEventListener("click", function(){
		responsiveVoice.speak(output.innerHTML, "German Male");
		})
	}

});

var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete(event){
	console.log("The file has loaded");
	// var data = JSON.parse(event.target.responseText);
	// console.log("The BIG DATA is: ", data);
	// console.log("how long to process data", Date.now() - dataDumpTime);
}

function dataRequestFailed(event){
	console.log("Oops, an error occurred while getting the data");
}

var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);

function dataRequestComplete (event) {
    console.log("The file has loaded and we have data");
    var data = JSON.parse(event.target.responseText);
    console.log("The data is:", data);

    dataToDOM(data);
};

var outputArea = document.getElementById("outputArea");

function dataRequestFailed (event) {
    console.log("Oops, an error occured while getting the data");
};

var textReplace = "Hello";
var translatedLanguage = "fr";
var startLanguage = "en"
dataRequest.open("GET", `http://www.transltr.org/api/translate?text=${textReplace}&to=${translatedLanguage}&from=${startLanguage}`);
dataRequest.send()
