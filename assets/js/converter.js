var binaryArea = $("textarea[name*='binaryArea']");
var hexArea = $("textarea[name*='hexArea']");
var octalArea = $("textarea[name*='octalArea']");

$("button[name*='submitBtn1']").click(function(){
    regexp = /^[0-9a-fA-F]+$/;
    // getting the value from the input
    var hex = ((document.getElementById("number").value).toString(16));
    if (regexp.test(hex))
        {
            //converting hex to decimal
            var decimal = parseInt(hex, 16);
            hexArea.val(decimal);
        }
    else
        {
            alert("You must input the correct Hex number(0~9, A~F)");
        }
});

$("button[name*='submitBtn2']").click(function(){
    //getting the value from the input
    regexp = /^[0-9a-fA-F]+$/;
    // getting the value from the input
    var hex = ((document.getElementById("number").value).toString(16));
    if (regexp.test(hex))
        {
            //converting hex to decimal
            var decimal = parseInt(hex, 16);
            var binary = decimal.toString(2);
            hexArea.val(binary);
        }
    else
        {
            alert("You must input the correct Hex number(0~9, A~F)");
        }
});
// Event listener for the reset button
$("button[name*='resetBtn']").click(function(){
    // resetting the value of all the textarea and input
    $("input[name*='decimalInput']").val("");
    hexArea.val("");
});
