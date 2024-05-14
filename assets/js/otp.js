window.addEventListener("load", (event) =>{
    clearinputs();
    document.getElementById("input1").focus();
})
function clearinputs(){
    document.getElementById("input1").value ="";
    document.getElementById("input2").value ="";
    document.getElementById("input3").value ="";
    document.getElementById("input4").value ="";
    document.getElementById("input5").value ="";
    document.getElementById("input6").value ="";
}

function next1(){
    document.getElementById("input2").focus();
}
function next2(){
    document.getElementById("input3").focus();
}
function next3(){
    document.getElementById("input4").focus();
}
function next4(){
    document.getElementById("input5").focus();
}
function next5(){
    document.getElementById("input6").focus();
}
function check(){
    let passkey = document.getElementById("input1").value+document.getElementById("input2").value+document.getElementById("input3").value+document.getElementById("input4").value+document.getElementById("input5").value+document.getElementById("input6").value;
    document.getElementById("input6").blur();
    if (passkey == "MP27LL"){
        location = "../pages/projects/clients/visit/"+passkey+".html";
    } else if(passkey == "MTB13Q"){
        location = "../pages/projects/clients/visit/"+passkey+".html";
        }
    else{
        clearinputs();
        document.getElementById("input1").focus();
    }
}