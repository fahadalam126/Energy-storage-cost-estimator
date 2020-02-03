function batteryTypeSelection(){
    //Getting Value
    var selObj1 = document.getElementById("inputGroupSelect01");
    var selValue1 = selObj1.options[selObj1.selectedIndex].value;
    //Setting Value
    document.getElementById("my-output-pv").value = selValue1;
}

function stateSelection(){
    //Getting Value
    var selObj2 = document.getElementById("inputGroupSelect02");
    var selValue2 = selObj2.options[selObj2.selectedIndex].value;
    //Setting Value
    document.getElementById("my-output-state").value = selValue2;
}


function calculation(){
    //Getting Value
    var num1 = Number(document.getElementById("txtnum1").value); //Design Power
    var num2 = Number(document.getElementById("txtnum2").value); //Op Hr
    var num3 = Number(document.getElementById("txtnum3").value); //DoD
    var num4 = Number(document.getElementById("txtnum4").value); //Efficiency
    var num5 = Number(document.getElementById("my-output-pv").value);
    var num6 = Number(document.getElementById("my-output-state").value);
    var res = ((num1*num2)*10000)/(num3*num4);
    var batteryCost = res*num5;
    var pvCost = num1*num6*1000;

    //Setting Value
    document.getElementById("my-output").value = "$" + res;
    document.getElementById("my-output-ess").value = "$"+ batteryCost;
    document.getElementById("my-output-pvcomponent").value = "$"+ pvCost;

}

