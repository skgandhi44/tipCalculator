// function created
function calculator() {

    var amount = $('#amount').val();
    var percentage = $('#percentage').val();

    // calculating the tip
    var tip = amount * (percentage / 100);

    //Converting it to number
    var totalAmount = Number(amount) + tip;

    //using toFixed syntex to round 2 decimal place
    $('#tip').value(tip.toFixed(2));
    $('#totalAmount').value(totalAmount.toFixed(2));

    //telling browser not to load a new page
    return false;
}

//calling functions
$('#tipCalculator').submit(calculator);