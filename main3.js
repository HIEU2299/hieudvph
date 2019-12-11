function kiem_tra() {
    var sp = document.getElementById("mail");
    if (sp.value.length == 0) {
        alert("Vui lòng nhập email!");
        return false;
    }

    var phone = document.getElementsByName("phone");
    if (phone.value.length==0) {
        alert("Vui lòng nhập số điện thoại!");
        return false;
    }
    alert("Chúng tôi sẽ liên hệ lại");
    return true;
}