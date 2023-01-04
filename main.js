const IDCHECK = /^[A-Za-z]{1}[A-za-z0-9_]{5,19}$/;

$(function () {
    //  id 유효성 체크
    $("#id_input").on("change", function () {
        const idTest = $("#id_input").val();
        console.log("#id_input의 값: ", idTest);
        console.log("IDCHECK", IDCHECK);
        // console.log("event: ", event.target);
        if (!IDCHECK.test("test5252")) {
            console.log("올바르지 않은 형식의 아이디입니다.");
        }
        // if (!IDCHECK.test(idTest)) {
        //     console.log("올바르지 않은 아이디입니다.");
        // } else {
        //     console.log("사용할 수 있는 아이디입니다.");
        // }
    });
});
