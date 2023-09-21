function calculateRefundIndividual() {
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var annualFee = parseFloat(document.getElementById('annualFee').value);

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    var monthsDifference = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

    var amountUsed= (((monthsDifference / 12) * annualFee) + 12.92);

    var refundAmount= (annualFee - amountUsed)

    document.getElementById('amountUsed').textContent = amountUsed.toFixed(2);
    document.getElementById('refundAmount').textContent = refundAmount.toFixed(2);
}

function calculateRefundCouple() {
    var startDate1 = document.getElementById('startDate1').value;
    var endDate1 = document.getElementById('endDate1').value;
    var annualFee1 = parseFloat(document.getElementById('annualFee1').value);

    startDate1 = new Date(startDate1);
    endDate1 = new Date(endDate1);

    var monthsDifference = (endDate1.getFullYear() - startDate1.getFullYear()) * 12 + (endDate1.getMonth() - startDate1.getMonth());

    var amountUsed1 = (((monthsDifference / 12) * annualFee1));

    var refundAmount1 = (annualFee1 - amountUsed1)

    document.getElementById('amountUsed1').textContent = amountUsed1.toFixed(2);

    document.getElementById('refundAmount1').textContent = refundAmount1.toFixed(2);
}

function calculateRefundFamily() {
    var startDate2 = document.getElementById('startDate2').value;
    var endDate2 = document.getElementById('endDate2').value;
    var annualFee2 = parseFloat(document.getElementById('annualFee2').value);

    startDate2 = new Date(startDate2);
    endDate2 = new Date(endDate2);

    var monthsDifference = (endDate2.getFullYear() - startDate2.getFullYear()) * 12 + (endDate2.getMonth() - startDate2.getMonth());

    var amountUsed2 = (((monthsDifference / 12) * annualFee2))

    var refundAmount2 = (annualFee2 - amountUsed2)
    
    document.getElementById('amountUsed2').textContent = amountUsed2.toFixed(2);
    document.getElementById('refundAmount2').textContent = refundAmount2.toFixed(2);

}