//a code to play Craps on my Index.html page
function playCraps() {
    console.log("playcraps() started");
    //step 1: roll two six sided dice
    var die1;
    var die2;
    die1 = Math.ceil(6 * Math.random());
    die2 = Math.ceil(6 * Math.random());
    console.log("die1 is:" + die1);
    console.log("die2 is:" + die2);
    //Step 1b: print results on screen
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    //step 2: calculate the sum of die 1 and die 2
    var dieSum = die1 + die2
    console.log("The sum of the dice is" + dieSum);
    //print the sum of both die
    document.getElementById("dieSum").innerHTML = dieSum;
    //step 3: does the sum equal 7 or 11, meaning do you lose
    if (dieSum == 7 || dieSum == 11) {
        document.getElementById("gameRes").innerHTML = "YOU LOSE!!"
        //step 4: did the dice come up doubles> are they evens? if so, you win
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("gameRes").innerHTML = "YOU WIN!!"
    } else {
        //step 5: otherwise push
        document.getElementById("gameRes").innerHTML = "Did not lose or win, please play again!"
    }



}

//checkCreds function for string.html
function checkCreds() {
    console.log("checkCreds() started...");
    document.getElementById("loginStatus").innerHTML = "Status of login";
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;

    //This will place the characters under the fName ID in the first name variable
    firstName = document.getElementById("fName").value;
    console.log("The first name is inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name is inputted as " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code is inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters");

    if (fullNameLength > 20) {
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again";
    } else if (zipCode.length != 5) {
        document.getElementById("loginStatus").innerHTML = "Invalid zip code, please try again";
    } else {
        alert("User credentials passed, welcome to the site, " + fullName);
    }

}

function startFun() {
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("mymarquee").start();
    
}

function stopFun() {
    console.log("stopFun() started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("mymarquee").stop();
}

function checkPalin(){
    //check to see if a sentence is a palindrome
    console.log("checkPalin() started");

    //extract the entered text to a string variable called entStr
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("The text entered is: " + entStr);

    //remove the spaces from the string
    var entStrNoSpace = entStr.split(" ").join("");
    console.log("no spaces = " + entStrNoSpace);

    //create a new variable called revStr and store the entered string reversed here
    var revStr;
    const revArray = [];
    length = entStrNoSpace.length - 1;
    console.log("string length = " + length);
    for(let i = length; i >=0; i--){
        revArray.push(entStrNoSpace[i]);
    }
    revStr = revArray.join("");
    console.log("reversed is: " + revStr);

    //compare entStr to revStr
    var equal =0;
    equal = (entStrNoSpace === revStr);
    console.log(equal);

    //give notice of equality status
    if(equal == true){
        document.getElementById("palinStatus").innerHTML = entStr + " <b>is</b> a palindrome!";
    } else {
        document.getElementById("palinStatus").innerHTML = entStr + " is <b>not</b> a palindrome!";
    }


}