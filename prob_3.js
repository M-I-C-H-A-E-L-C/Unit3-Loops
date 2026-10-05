function isValidPassword(password){
    if (password.length >= 8 && 
        /[0-9]/.test(password) == true && 
        password != "password"){
        console.log("Valid");
    }
    else{
        console.log("Invalid");
    }
}
                

isValidPassword("abc123456");
isValidPassword("short1");
isValidPassword("password");
isValidPassword("nonumbershere");