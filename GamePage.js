Player1Name = localStorage.getItem("Player1Name");
Player2Name = localStorage.getItem("Player2Name");
Player1Score = 0;
Player2Score = 0;
document.getElementById("Player1Name").innerHTML = Player1Name + ":";
document.getElementById("Player2Name").innerHTML = Player2Name + ":";
document.getElementById("Player1Score").innerHTML = Player1Score;
document.getElementById("Player2Score").innerHTML = Player2Score;
document.getElementById("PlayerQuestion").innerHTML = "Question Turn- " + Player1Name;
document.getElementById("PlayerAnswer").innerHTML = "Answer Turn- " + Player2Name;
function send() {
    Number1 = document.getElementById("Number 1.").value
    Number2 = document.getElementById("Number 2.").value
    answer = parseInt(Number1)*parseInt(Number2)
    console.log(answer)
    questionnumber = "<h4>" + Number1 + "X" + Number2 + "</h4>"
    input = "<br> answer: <input type = 'text' id= inputcheckbox>"
    checkbutton = "<br> <br> <button class= 'btn btn-info' onclick= 'check()'> check </button>"
    row = questionnumber + input + checkbutton;
    document.getElementById("Output").innerHTML = row
    document.getElementById("Number 1.").value = ""
    document.getElementById("Number 2.").value = ""
    questionturn = "Player1" 
    answerturn = "Player2"
}
function check(){
    getanswer = document.getElementById("inputcheckbox").value
    if (getanswer == answer)
    {
        if (answerturn == "Player1") 
        {
            Player1Score = Player1Score + 1;
            document.getElementById("Player1Score").innerHTML = Player1Score
        }
        else {Player2Score = Player2Score + 1;
            document.getElementById("Player2Score").innerHTML = Player2Score}
    }
    if (questionturn == "Player1")
    {
        questionturn = "Player2"
            document.getElementById("PlayerQuestion").innerHTML = "questionturn- " + Player2Name
    }
    else {
        questionturn = "Player1"
            document.getElementById("PlayerQuestion").innerHTML = "questionturn- " + Player1Name
    }
    if (answerturn == "Player1")
    {
        answerturn = "Player2"
            document.getElementById("PlayerAnswer").innerHTML = "answerturn- " + Player2Name
    }
    else {
        answerturn = "Player1"
            document.getElementById("PlayerAnswer").innerHTML = "answerturn- " + Player1Name
    }
    document.getElementById("Output").innerHTML = ""
}
