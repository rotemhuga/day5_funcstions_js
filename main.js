//A//
function helloworld() {
    // console.log("Hello world");
}
 
helloworld();

//B//
function square (X) {
    let squered = Math.pow(X, 2);
    // console.log(squered);
    return squered;
}

square(4)

//C//
function convertoF(celsius) {
    let fahrenheit = celsius * 9/5 +32
    // console.log(fahrenheit)
    return fahrenheit;
}

// convertoF(30);

//D//
function randomNumber () {
    // console.log (Math.random());
  
 } 
  randomNumber ()

  //E//
  function tellFortune (jobTitle, geographicLocation, parthnersName, children) {
    let sentence = (`I will be a ${jobTitle} in ${geographicLocation}, and married to ${parthnersName} with ${children}.`);
    // alert(sentence);
  }

 tellFortune (`lawyer`, `beqoa`, `asaf`, `4`)
 
 function tellFortune (jobTitle, geographicLocation, parthnersName, children) {
    let sentence = (`I will be a ${jobTitle} in ${geographicLocation}, and married to ${parthnersName} with ${children}.`);
    // alert(sentence);
  }


tellFortune (`nurse`, `Tel aviv`, `amit`, `3`)
 
function tellFortune (jobTitle, geographicLocation, parthnersName, children) {
    let sentence = (`I will be a ${jobTitle} in ${geographicLocation}, and married to ${parthnersName} with ${children}.`);
    // alert(sentence);
  }

tellFortune (`Doctor`, `Eilat`, `Nadav`, `2`)

//F//
function SevenDigits (X) {
let SevenDigits = X.toLocaleString ('en-us');
console.log(SevenDigits)
return SevenDigits;
// console.log(typeof("number"))
}

// SevenDigits(1234567)

//G//
function str(X) {
let NoVowels = X.replace(/[aeiou]/gi, '');
// console.log(NoVowels);
}

str ("Hello world")

//H//
function rounded (X){
    // console.log(Math.round(X));
}
rounded ("4.6")

// function rounded (X){
// let rounded = Math.round(X);
//     console.log(rounded);
// }
// rounded ("4.6")