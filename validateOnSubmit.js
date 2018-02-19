
var msg = "";
var myElm = {};
var total;
var count;


function chkName(name){
    var pos = name.value.search(/\D+$/);

    if (pos !== 0){
        name.focus();
        name.select();
        return false;
    }else {
        return true;
    }

}
function chkID(id) {
    var pos = id.value.search(/^\d{6}$/);
    if (pos !== 0){
        msg += "NCHA ID is not correct.\n Format should be 123456\n\n";
        id.focus();
        id.select();
        return false;
    }else {
        return true;
    }

}
function chkEmail(email) {
    var pos = email.value.search(/[A-z0-9]{3,}@[A-z]{3,}\.[A-z]{3}/);
    if (pos !== 0){
        msg += "Email is not correct.\nFormat should be abc@cba.com\n\n";
        email.focus();
        email.select();
        return false;
    }else {
        return true;
    }
}
function chkPhone(phone) {
    var pos = phone.value.search(/^\d{3}-\d{3}-\d{4}/);
    if (pos !== 0){
        msg += "Phone number is not correct.\nFormat should be 000-000-0000\n\n";
        phone.focus();
        phone.select();
        return false;
    }else {
        return true;
    }
}
function fees(element) {
    var totalCost = total;
    if (!element.checked){
        totalCost = totalCost - parseInt(element.value);
        if (element.name === "entry"){
            count--;
        }

    }
    else{
        totalCost = totalCost + parseInt(element.value);
        if (element.name === "entry"){
            count++;
        }
    }
    total = totalCost;
    var totalCostLabel = document.getElementById("myTotalCost");
    totalCostLabel.innerHTML = "Total: $"+totalCost;
}
function creditCard(cardNum) {
    var pos = cardNum.value.search(/^\d{16}/);
    if(pos !== 0){
        msg += "Credit card number is not correct.\nFormat should be 0000000000000000\n\n";
        cardNum.focus();
        cardNum.select();
        return false;
    }else {
        return true;
    }
}

function validate() {
try {
    msg = "";

    var fName = document.getElementById('firstName');
    var lName = document.getElementById('firstName');
    var id = document.getElementById('formid');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    // var date = document.getElementById('showDate');
    var cc = document.getElementById('cc');
    var ccn = document.getElementById('ccn');
    // var exp = document.getElementById('ccXM');
    var dom = document.getElementById("myForm");
    for (var i = 0; i < (dom.elements.length - 1); i++) {
        myElm[dom.elements[i].name] = dom.elements[i].value;
    }


    var valid = true;
    if (!chkName(fName)) {
        msg += "The first name is not correct.\n Format should just be alphabetic characters\n\n";
        valid = false;
    }
    if (!chkName(lName)) {
        valid = false;
        msg += "The last name is not correct.\n Format should just be alphabetic characters\n\n";
    }
    if (!chkID(id)) {
        valid = false;
    }
    if (!chkEmail(email)) {
        valid = false;
    }
    if (!chkPhone(phone)) {
        valid = false;
    }

    if (count > 3 || count === 0) {
        msg += "You can only register for a maximum of 3 entries.\nPlease select 1 to 3 entries\n\n";
        valid = false;
    }
    if (!creditCard(ccn)) {
        valid = false;
    }
    if (!valid){
        alert(msg);
        return valid;
    }else {
        msg = "Thank you for registering\nThe total amount your card has been billed: $"+total;
        alert(msg);
        return valid;
    }

}catch(e){
    alert(e.message);
}
}
function loadFees() {
    var chkboxarr = document.getElementsByName("entry");
    var addF = document.getElementsByName("addFees");
    count = 0;
    total = 0;
    for(var k=0;k<chkboxarr.length;k++){
        if (chkboxarr[k].checked) {
            count++;
            total += parseInt(chkboxarr[k].value);
        }
    }
    for(var x=0;x<addF.length;x++){
        if (addF[x].checked) {
            total += parseInt(addF[x].value);
        }
    }
    var totalCostLabel = document.getElementById("myTotalCost");
    totalCostLabel.innerHTML = "Total: $"+total;
}