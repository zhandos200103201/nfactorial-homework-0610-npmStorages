
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
    document.cookie = "user = Zhandos; expires= Sun, 12 Jun 2022 12:55:00 GMT;";
}