player_name_1 = "";
player_name_2 = "";
function Add_User(){
    player_name_1 = document.getElementById("mlogin1_input").value;
    player_name_2 = document.getElementById("mlogin2_input").value;
    localStorage.setItem("player_name_1", player_name_1);
    localStorage.setItem("player_name_2", player_name_2);
    window.location = "quiz_game_page.html";
}