let toastBox = document.getElementById("ToastBox");

let SuccessMesg = "<i class='fa-solid fa-check'></i> Successfully Submited";
let ErrorMesg = "<i class='fa-solid fa-xmark'></i> Error Occured";
let InvalidMesg = "<i class='fa-solid fa-exclamation'></i> Invalid Input";

function showToast(mesg){
    let toast = document.createElement('div');
    toast.classList.add("Toast");
    toast.innerHTML= mesg;
    toastBox.appendChild(toast);

    if(mesg.includes('Error')){
        toast.classList.add("Error");
    }
    if(mesg.includes('Invalid')){
        toast.classList.add("Invalid");
    }

    setTimeout(()=>{
        toast.remove();
    }, 6000);
}