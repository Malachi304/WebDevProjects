const  passwordBox = document.getElementById("password"); 

passwordLength = 12; 

const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lower = "abcdefghijklmnopqrstuvwxyz"
const symbols = "!@#$%^&*()_-/?=+~"
const nums = "1234567890"

const allChars = caps + lower + symbols + nums

function createPassword(){
    let password = ""
    password += caps[Math.floor(Math.random() * caps.length)]; 
    password += lower[Math.floor(Math.random() * lower.length)]; 
    password += symbols[Math.floor(Math.random() * symbols.length)]; 
    password += nums[Math.floor(Math.random() * nums.length)]; 

    while (password.length < passwordLength){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;

}