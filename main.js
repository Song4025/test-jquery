const IDCHECK = /^[A-Za-z]{1}[A-za-z0-9_]{5,19}$/;
const PWCHECK = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const EMAIL = /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/;
const PHONE = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;

$(function () {
    //  id 유효성 체크
    $("#id_input").on("change", () => {
        const idTest = $("#id_input").val();
        if (!IDCHECK.test(idTest)) {
            console.log("아이디 오류");
            $(".error_next_box:first").css("display", "block");
        }else{
            $(".error_next_box_blue:eq(0)").css("display", "block");
            $(".error_next_box:first").css("display", "none");
        }
    });
    //  password 유효성 체크
    $("#pswd1").on("change", () => {
        const pwTest = $("#pswd1").val();
        if (!PWCHECK.test(pwTest)) {
            console.log("패스워드 오류");
            $(".error_next_box:eq(1)").css("display", "block");
        }else{
            $(".error_next_box:eq(1)").css("display", "none");
        }
    });
    //  password 확인여부 체크
    $("#pswd2").on("change", () => {
        const pwTest = $("#pswd1").val();
        const pwTest2 = $("#pswd2").val();
        if (pwTest !== pwTest2) {
            console.log("패스워드 불일치");
            $(".error_next_box:eq(2)").css("display", "block");
        }
        else if (pwTest === pwTest2) {
            console.log("패스워드 불일치");
            $(".error_next_box:eq(2)").css("display", "none");
            $(".error_next_box_blue:eq(1)").css("display", "block");
        }
        else{
            $(".error_next_box:eq(2)").css("display", "none");
        }
    });
    //  성별 체크여부 확인
    $("#gender").on("change", () => {
        const gendercheck = $("select[name=gender] option:selected").val();
        if (gendercheck === "" || null || undefined) {
            $(".error_next_box:eq(3)").css("display", "block");
        }else{
            $(".error_next_box:eq(3)").css("display", "none");
        }
    });
    $("#btnJoin").on("click", () => {
        const gendercheck = $("select[name=gender] option:selected").val();
        if (gendercheck === "" || null || undefined) {
            $(".gender").on('focus');
            $(".error_next_box:eq(3)").css("display", "block");
        }else{
            $(".error_next_box:eq(3)").css("display", "none");
        }
    });
    //  e-mail 유효성 체크
    $("#email").on("change", () => {
        const mailcheck = $("#email").val();
        if (!EMAIL.test(mailcheck)) {
            console.log("이메일 오류");
            $("#gender").on("focus");
            $(".error_next_box:eq(4)").css("display", "block");
        }else{
            $(".error_next_box:eq(4)").css("display", "none");
        }
    });
    //  전화번호 유효성 체크
    $("#mobile").on("change", () => {
        const phonecheck = $("#mobile").val();
        if (!PHONE.test(phonecheck)) {
            console.log("전화번호 오류");
            $(".error_next_box:last").css("display", "block");
        }else{
            $(".error_next_box:last").css("display", "none");
        }
    });
    let autoHypenPhone = function(str){
        str = str.replace(/[^0-9]/g, '');
        var tmp = '';
        if( str.length < 4){
            return str;
        }else if(str.length < 7){
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3);
            return tmp;
        }else if(str.length < 11){
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3, 3);
            tmp += '-';
            tmp += str.substr(6);
            return tmp;
        }else{              
            tmp += str.substr(0, 3);
            tmp += '-';
            tmp += str.substr(3, 4);
            tmp += '-';
            tmp += str.substr(7);
            return tmp;
        }
    }
    const phoneNum = document.getElementById('mobile');
    phoneNum.onkeyup = function(){
        console.log(this.value);
        this.value = autoHypenPhone( this.value ) ;  
    }
      
});
