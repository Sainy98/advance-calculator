content = document.getElementById('content');
pg1 = document.getElementById('page1');
page2 = document.getElementById('page2');
page3 = document.getElementById('page3');
page4 = document.getElementById('page4');
page5 = document.getElementById('page5');
page6 = document.getElementById('page6');
back = document.getElementById("back");
function home() {

    content.style.display = "block";
    pg1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    back.style.innerHTML = "HOME";
    document.getElementById("back").innerHTML = "HOME";
}
//age calculator
function age() {

    pg1.style.display = "block";

    content.style.display = "none";

    back.style.innerHTML = "back";
    document.getElementById("back").innerHTML = "BACK";

}
function pg2() {

    page2.style.display = "block";

    content.style.display = "none";
    document.getElementById("back").innerHTML = "BACK";
}
function pg3() {

    page3.style.display = "block";

    content.style.display = "none";
    document.getElementById("back").innerHTML = "BACK";
}
function pg4() {

    page4.style.display = "block";

    content.style.display = "none";
    document.getElementById("back").innerHTML = "BACK";
}
function pg5() {

    page5.style.display = "block";

    content.style.display = "none";
    document.getElementById("back").innerHTML = "BACK";
}
function pg6() {

    page6.style.display = "block";

    content.style.display = "none";
    document.getElementById("back").innerHTML = "BACK";
}
// page 1 age calculator
function fun1() {

    var d = parseInt(document.getElementById("D1").value, 10);
    var m = parseInt(document.getElementById("D2").value, 10);
    var y = parseInt(document.getElementById("D3").value, 10);

    //get the current date
    var date = new Date();
    var d2 = date.getDate();
    var m2 = date.getMonth() + 1;
    var y2 = date.getFullYear();

    //define the number of days in each month
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d > d2) {
        d2 = d2 + month[m2 - 1];
        m = m - 1;
    }

    if (m > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var dayDiff = d2 - d;
    var monthDiff = m2 - m;
    var yearDiff = y2 - y;

    document.getElementById("d5").innerHTML = yearDiff + " year " + monthDiff + " month " + dayDiff + " day";
}

//page 2 discount calculator
function fun() {

    per = document.getElementById("per").value;
    per2 = document.getElementById("per2").value;

    total = (per2 / 100) * per;
    percent = (per2 - total).toFixed(2);
    save_price = (per2 - percent).toFixed(2);

    document.getElementById('1').innerHTML = 'YOU SAVED  ₹' + save_price + '<br><br>'
        + 'DISCOUNT PRICE ₹' + percent;

}

//page 3 EMI Calculator
function fun3() {
    var P = parseFloat(document.getElementById("emi").value);
    var I = parseFloat(document.getElementById("emi1").value);
    var T = parseFloat(document.getElementById("emi2").value);

    //convert interest rate to monthly rate
    var r = (I / 12) / 100;

    //calculate the EMI
    var n = P * r * Math.pow(1 + r, T);
    var d = Math.pow(1 + r, T) - 1;
    var emi = (n / d).toFixed(2);

    document.getElementById('2').innerHTML = "PER MONTH EMI IS ₹" + emi;

}
//page 4 invesment calculator
function fun4() {
    P = document.getElementById("int").value;
    I = document.getElementById("int2").value;
    T = document.getElementById("int3").value;

    int = (P * I * T / 100).toFixed(2);
    total = (parseInt(int) + parseInt(P)).toFixed(2);

    document.getElementById("3").innerHTML = "INTREST AMOUNT " + " ₹" + int + "<br><br>" + "TOTAL AMOUNT IS ₹" + total;
}



