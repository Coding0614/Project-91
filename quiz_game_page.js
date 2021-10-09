function Send(){
    factor_1 = document.getElementById("number_1").value;
    factor_2 = document.getElementById("number_2").value;
    actual_product = parseInt(factor_1) * parseInt(factor_2);
    question_number = "<h4>" + factor_1 + "X" + factor_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}