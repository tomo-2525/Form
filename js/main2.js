$(function () {
    $(":radio").prop("disabled", true);
    $("#qcheck").click(function () {
        if ($("#qcheck").prop("checked")) {
            $(":radio").prop("disabled", false);
        } else {
            $(":radio").prop("disabled", true);
        }
    });

    $(".price").change(function () {
        if (Number($("#lprice").val()) <= Number($("#hprice").val())) {
            $(".price").removeClass("error");
            $(".alert").text("");
        } else {
            $(".price").addClass("error");
            $(".alert").text("価格帯を正しく入力してください。");
        }
    });

    var placeholderText = "商品名かカテゴリーを入力してください。";

    $("#gword").addClass("placeholder");
    $("#gword").val(placeholderText);

    $("#gword").focus(function () {
        if ($("#gword").val() == "") {
            $("#gword").addClass("placeholder");
            $("#gword").val(placeholderText);
        }
    });


});
