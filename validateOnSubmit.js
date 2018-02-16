
var msg = "";
var myElm = {};


function chkName(name){
    var pos = name.value.search(/^[A-Z][a-z]/);
    alert("in chlName  "+ pos);

    if (pos !== 0){
        msg = "this is not correct";
        name.focus();
        name.select();
        return false;
    }else {
        return true;
    }

}
function chkID(id) {
    var pos = id.value.search(/^\d{6}$/);
    alert("in id  "+ pos);
    if (pos !== 0){
        msg = "this is not correct";
        id.focus();
        id.select();
        return false;
    }else {
        return true;
    }

}
function chkEmail(email) {
    var pos = email.value.search(/[A-z0-9]{3,}@[A-z]{3,}\.[A-z]{3}/);
    alert("in email  "+ pos);
    if (pos !== 0){
        msg = "this is not correct";
        email.focus();
        email.select();
        return false;
    }else {
        return true;
    }
}
function chkPhone(phone) {
    var pos = phone.value.search(/^\d{3}-\d{3}-\d{4}/);
    alert("in phone  "+ pos);
    if (pos !== 0){
        msg = "this is not correct";
        phone.focus();
        phone.select();
        return false;
    }else {
        return true;
    }
}


function validate() {
    alert("in validate");


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
    for(var i = 0; i < (dom.elements.length-1); i++){
        myElm[dom.elements[i].name] = dom.elements[i].value;
    }


        var valid = true;
    if (!chkName(fName)){
        alert("check");
        valid = false;
    }
    if (!chkName(lName)){
        alert("check");
        valid = false;
    }
    if(!chkID(id)){
        valid = false;
    }
    if(!chkEmail(email)){
        valid = false;
        alert("false");
    }
    if (!chkPhone(phone)){
        valid = false;
        alert("phone");
    }


    return valid;
}
