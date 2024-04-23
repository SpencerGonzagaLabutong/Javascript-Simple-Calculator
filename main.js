function addition(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 + num2;
    // alert(result);

    document.querySelector("#answer").innerHTML = result;
}

function subtraction(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 - num2;

    document.querySelector("#answer").innerHTML = result;
}

function multiplication(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 * num2;

    document.querySelector("#answer").innerHTML = result;
}

function division(){
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);

    let result = num1 / num2;

    document.querySelector("#answer").innerHTML = result;
}