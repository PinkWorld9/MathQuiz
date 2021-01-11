function adduser(){
    Player1Name = document.getElementById("Player1 Name").value;
    Player2Name = document.getElementById("Player2 Name").value;
    localStorage.setItem("Player1Name", Player1Name);
    localStorage.setItem("Player1Name", Player1Name);
    window.location.replace("GamePage.html")
}