$(function () {


    $("form").submit(fuction(){
        var checkSubmit = true;

        if($("#uname").val() == ""){
        checkSubmit = false;
    }

    if ($(":radio:checked").length == 0) {
        checkSubmit = false;
    }

    return checkSubmit;
});
    

});