function calculateRefundIndividual() {
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var annualFee = parseFloat(document.getElementById('annualFee').value);

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    var yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    var monthsDifference = endDate.getMonth() - startDate.getMonth();
    var daysDifference = endDate.getDate() - startDate.getDate();
    
    // Calculate total time in months rounded up
    var totalTime = (yearsDifference * 12) + monthsDifference + Math.ceil(daysDifference / 30);

    var amountUsed = totalTime * 12.9166667;
    var refundAmount= (annualFee - amountUsed);

    document.getElementById('amountUsed').textContent = amountUsed.toFixed(2);
    document.getElementById('refundAmount').textContent = refundAmount.toFixed(2);
}

function calculateRefundCouple() {
    var startDate1 = document.getElementById('startDate1').value;
    var endDate1 = document.getElementById('endDate1').value;
    var annualFee1 = parseFloat(document.getElementById('annualFee1').value);

    startDate1 = new Date(startDate1);
    endDate1 = new Date(endDate1);

    var yearsDifference1 = endDate1.getFullYear() - startDate1.getFullYear();
    var monthsDifference1 = endDate1.getMonth() - startDate1.getMonth();
    var daysDifference1= endDate1.getDate() - startDate1.getDate();
    
    // Calculate total time in months rounded up
    var totalTime1 = (yearsDifference1 * 12) + monthsDifference1 + Math.ceil(daysDifference1 / 30);

    var amountUsed1 = totalTime1 * 24.1666667;
    var refundAmount1 = (annualFee1 - amountUsed1);

    document.getElementById('amountUsed1').textContent = amountUsed1.toFixed(2);
    document.getElementById('refundAmount1').textContent = refundAmount1.toFixed(2);
}

function calculateRefundFamily() {
    var startDate2 = document.getElementById('startDate2').value;
    var endDate2 = document.getElementById('endDate2').value;
    var annualFee2 = parseFloat(document.getElementById('annualFee2').value);

    startDate2 = new Date(startDate2);
    endDate2 = new Date(endDate2);

    var yearsDifference2 = endDate2.getFullYear() - startDate2.getFullYear();
    var monthsDifference2 = endDate2.getMonth() - startDate2.getMonth();
    var daysDifference2= endDate2.getDate() - startDate2.getDate();
    
    // Calculate total time in months rounded up
    var totalTime2 = (yearsDifference2 * 12) + monthsDifference2 + Math.ceil(daysDifference2 / 30);

    var amountUsed2 = totalTime2 * 26.6666667;
    var refundAmount2 = (annualFee2 - amountUsed2);
    
    document.getElementById('amountUsed2').textContent = amountUsed2.toFixed(2);
    document.getElementById('refundAmount2').textContent = refundAmount2.toFixed(2);
}