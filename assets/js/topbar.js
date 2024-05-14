function openmenu(){
    document.getElementById('stylesheet').href="../assets/css/openedmenu.css";
}
function closemenu(){
    document.getElementById('stylesheet').href="../assets/css/topbar.css";
}
window.onload(function(){
    closemenu();
})