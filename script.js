content = document.getElementById('content');
pg1 = document.getElementById('page1');
page2 = document.getElementById('page2');
page3 = document.getElementById('page3');
page4 = document.getElementById('page4');
page5 = document.getElementById('page5');
page6 = document.getElementById('page6');

function home() {

    content.style.display = "block";
    pg1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
}

function age() {

    pg1.style.display = "block";

    content.style.display = "none";


}
function pg2() {

    page2.style.display = "block";

    content.style.display = "none";

}
function pg3() {

    page3.style.display = "block";

    content.style.display = "none";

}
function pg4() {

    page4.style.display = "block";

    content.style.display = "none";

}
function pg5() {

    page5.style.display = "block";

    content.style.display = "none";

}
function pg6() {

    page6.style.display = "block";

    content.style.display = "none";

}
// page 1 age calculator
function fun1() {
    d = document.getElementById("D1").value;
    m = document.getElementById("D2").value;
    y = document.getElementById("D3").value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    // var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // if (d - d2) {
    //     d2 = d2 + month[m2 - 1];
    //     m = m2 - 1

    // }
    // if (m > m2) {
    //     m2 = m2 + 12;
    //     y2 = y2 - 1;

    // }
    var d = d2 - d;

    var m = m - m2;
    var y = y2 - y;
    document.getElementById("d5").innerHTML = y + " year   " + m + " month " + d + " day ";
}

//page 2 discount calculator
function fun() {

    per = document.getElementById("per").value;
    per2 = document.getElementById("per2").value;

    total = (per2 / 100) * per;
    percent = (per2 - total).toFixed(1);
    save_price = (per2 - percent).toFixed(1);

    document.getElementById('1').innerHTML = 'YOU SAVED  💵' + save_price + '<br>'
        + 'DISCOUNT PRICE 💵' + percent;
    // document.getElementById('2').innerHTML = 'TOTAL AMOUNT ' + percent;
}

//page 3 EMI Calculator
function fun3() {
    P = document.getElementById("emi").value;
    I = document.getElementById("emi1").value;
    T = document.getElementById("emi2").value;

    int = P * I * T / 100;

    emi = parseInt((P / T) + int).toFixed(2);

    total = parseInt(int * T) + parseInt(P);

    document.getElementById('2').innerHTML = "PER MONTH EMI IS 💵" + EMI + "<br><br>" + "TOTAL AMOUNT IS 💵" + total;

}
function fun4() {
    P = document.getElementById("int").value;
    I = document.getElementById("int2").value;
    T = document.getElementById("int3").value;

    int = (P * I * T / 100).toFixed(2);
    total = (parseInt(int) + parseInt(P)).toFixed(2);

    document.getElementById("3").innerHTML = "INTREST AMOUNT - " + "    🤑🤑💸" + int + "<br><br>" + "TOTAL AMOUNT IS " + total;
}



