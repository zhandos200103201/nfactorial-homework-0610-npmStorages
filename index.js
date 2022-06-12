
function setYellowMode(){
    localStorage.setItem("theme", "yellow");
    const root  = document.getElementById('box');
    root.className = 'yellow';
}

function setRedMode(){
    sessionStorage.setItem("theme", "red");
    const root  = document.getElementById('box');
    root.className = 'red';
}

function seeCookie(){
    document.cookie = "user = Zhandos; expires= Sun, 15 Jun 2022 03:00:00 GMT;";
}