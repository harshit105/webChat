var userName ="Harshit@bansal";
var userPass = "hbansal123";

var email = document.getElementById("#email").value;
var password =document.getElementById("#password").value;

var result1 = email.localeCompare(userName);
var result2 = password.localeCompare(userPass);

function authenticate() {
    if(result1==0 && result2==0){
        return window.alert("working");
    }
    else{
        return window.alert("not working");
    }
    
}
