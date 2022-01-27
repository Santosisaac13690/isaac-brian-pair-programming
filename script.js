// Easy (1) ============================================
var arr = [2, 4, 7, 11, 15, 16];

var evens = arr.filter(function(x) {
    return x % 2 === 0;
})
 
console.log(evens);

var odds = arr.filter(function(x) {
    return x % 2 === 1;
})
 
console.log(odds);


// Easy (2) ============================================
function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(10);


// Medium (1) ==========================================
function vowelChecker(x){

    if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
        console.log(`This is a vowel`)
    } else {
        console.log(`This is not a vowel`)
    }
}

vowelChecker("A");
vowelChecker("e");
vowelChecker("I");
vowelChecker("o");
vowelChecker("u");
vowelChecker("Z");


// Medium (2) ==========================================
var anagram1 = 'god';
var anagram2 = 'dog';

function anagramChecker(a1, a2){
    let ac1 = a1.split('').sort().join('');
    let ac2 = a2.split('').sort().join('');
    if (ac1 == ac2){
        console.log('true');
    } else{
        console.log('false');
    }
}

anagramChecker(anagram1, anagram2);


// Medium (3) ==========================================
function largestRemainderCheck(x, y){
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(largestRemainderCheck(336, 360))
console.log(largestRemainderCheck(78, 126))


// Medium (4) ==========================================
function Car(make, model, year, mileage, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.color = color;

    this.driveToWork = function(){
        this.work = this.mileage + 33;
        console.log(`Old mileage: ${this.mileage} | New mileage: ${this.work}`)
    }

    this.driveAroundTheWorld = function(){
        this.aroundWorldAfterWork = this.work + 24000;
        console.log(`Old mileage: ${this.work} | New mileage: ${this.aroundWorldAfterWork}`)
    }

    this.runErrands = function (){
        this.errandsAfterDriveAroundWorld = this.aroundWorldAfterWork + 30;
        console.log(`Old mileage: ${this.aroundWorldAfterWork} | New mileage: ${this.errandsAfterDriveAroundWorld}`)
    }
}

var Lambo = new Car('Lamboghini', 'Huracan EVO', 2021, 0, 'black')
Lambo.driveToWork();
Lambo.driveAroundTheWorld();
Lambo.runErrands();


// Hard (1) ============================================
function brackets(str){
    if(str === "{}" || str === "[]" || str === "()"){
        return true;
    }
    else{
        return false;
    }

}
str = "{hello world}";
str = str.replace(/[a-z]/g,"");
str = str.replace(/\s+/g, '');
console.log(brackets(str));