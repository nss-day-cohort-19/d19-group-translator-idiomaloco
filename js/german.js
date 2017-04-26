var Lexicon = (function(lexicon) {

    var german = {"happy":"Glücklich", "mother's":"Mütter", "day!":"Dag!", "to":"Nach", "the":"das", "best":"beste", "mother":"mutter", "in":"im", "the":"das", "whole":"ganze", "world!":"welt!"};

    var selectLanguage = document.getElementById("selectLanguage");

    lexicon.getGerman = function() {
            console.log("hello");
            return german;
        };
    return lexicon;

})(Lexicon);
