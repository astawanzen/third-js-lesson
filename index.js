//check property + if statement excercise with checkbox button uncomment code below

//document.getElementById("myButton").onclick = function() {

//if my checkbox is clicked print out "you are Subscribe" uncomment this code below

//if(document.getElementById("myCheckBox").checked == true){
//  console.log("You are subscribed");
//}

//or uncomment to run this code below, the simpler way than above

//const myCheckBox = document.getElementById("myCheckBox");
//if(myCheckBox.checked){
//console.log("you are subscribed!");
//}

/*else print out "you are not subscribe"
    else {
        console.log("You are NOT subscribed!");
    }

};*/

//code below is for combination of both radio and check box property
document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");

  //select the 3 buttons by calling the id
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  //using if statement we can see which button is selected
  if (myCheckBox.checked) {
    console.log("you are subscribed!");
  }

  //else print out "you are not subscribe"
  else {
    console.log("You are NOT subscribed!");
  }

  //first we will check the visa button if the visa is checked then we'll display a message
  if (visaBtn.checked) {
    console.log("You are paying with Visa");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with Mastercard");
  } else if (paypalBtn.checked) {
    console.log("You are paying with PayPal");
  }

  //else no radio button is selected
  else {
    console.log("You must select a payment method");
  }
};
