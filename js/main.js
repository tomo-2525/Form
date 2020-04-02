$(function () {

    $("form").submit(function () {
        var checkSubmit = true;

        if ($("#uname").val() == "") {
            $("#uname").addClass("error");
            $("#unae+span").text("名前を入力してください。");
            checkSubmit = false;
        } else {
            $("#uname").removeClass("error");
            $("#unae+span").text("");
        }

        if ($(":radio:checked").length == 0) {
            $(":radio").addClass("error");
            $(":radio+span").text("性別を入力してください。");
            checkSubmit = false;
        } else {
            $(":radio").removeClass("error");
            $(":radio+span").text("");
        }

        return checkSubmit;
    });

    $("#umail").change(function () {
        if ($("#umail").val().match(/^[\w\.\-]+\@[\w\.\-]+$/)) {
            $("#umail").removeClass("error");
            $("#umail+span").text("");
        } else {
            $("#umail").addClass("error");
            $("#umail+span").text("書式に誤りがあります。");
        }
    });

    $("#uzip").change(function () {
        if ($("#uzip").val().match(/^\d{3}\-\d{4}$/)) {
            $("#uzip").removeClass("error");
            $("#uzip+span").text("");
        } else {
            $("#uzip").addClass("error");
            $("#uzip+span").text("書式に誤りがあります。");
        }
    });

    $("textarea").keyup(function () {
        var inputLength = $("textarea").val().length;
        if (inputLength <= 100) {
            $("textarea").removeClass("error");
            $("textarea+span").text(inputLength + "/100");
        } else {
            $("textarea").addClass("error");
            $("textarea+span").text("入力文字数が長すぎます。");
        }
    });

});