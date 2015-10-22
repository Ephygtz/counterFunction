function superCounter (string) {
  var numSpace = 0;
  var countChar = string.length
  for(var i = 0; i < countChar; i++){
    if(string[i] === ' '){
      numSpace++;
    }
  }
  return {
    "chars" : countChar,
    "spaces": numSpace,
    "words": string.split(" ").join("").length,
    "avgLength": string.length,
  };
}
superCounter("Count me in for lunch");