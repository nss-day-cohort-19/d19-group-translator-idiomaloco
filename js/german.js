var Lexicon = (function(lexicon) {

    var testStr = "Happy Mother's Day! To the best mother in the whole world!";

    var german = {"Happy":"Glücklich", "Mother's":"Mütter", "Day!":"Dag!", "To":"Nach", "the":"das", "best":"beste", "mother":"mutter", "in":"im", "the":"das", "whole":"ganze", "world!":"welt!"};

    var selectLanguage = document.getElementById("selectLanguage");

    lexicon.getGerman = function() {
            console.log("hello");
            return german;
        };
    return lexicon;

})(Lexicon);
