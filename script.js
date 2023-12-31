//functions for refund calculations. Calculator order = Individual, Couple, Family

function calculateRefundIndividual() {
    var startDate = document.getElementById('startDate').value;
    var endDate = document.getElementById('endDate').value;
    var annualFee = parseFloat(document.getElementById('annualFee').innerText);

    startDate = new Date(startDate);
    endDate = new Date(endDate);

    var yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    var monthsDifference = endDate.getMonth() - startDate.getMonth();
    var daysDifference = endDate.getDate() - startDate.getDate();
    
    var totalTime = (yearsDifference * 12) + monthsDifference + Math.ceil(daysDifference / 30);

    var amountUsed = totalTime * 12.9166667;
    var refundAmount= (annualFee - amountUsed);

    document.getElementById('amountUsed').textContent = amountUsed.toFixed(2);
    document.getElementById('refundAmount').textContent = refundAmount.toFixed(2);
}


function calculateRefundCouple() {
    var startDate1 = document.getElementById('startDate1').value;
    var endDate1 = document.getElementById('endDate1').value;
    var annualFee1 = parseFloat(document.getElementById('annualFee1').innerText);

    startDate1 = new Date(startDate1);
    endDate1 = new Date(endDate1);

    var yearsDifference1 = endDate1.getFullYear() - startDate1.getFullYear();
    var monthsDifference1 = endDate1.getMonth() - startDate1.getMonth();
    var daysDifference1= endDate1.getDate() - startDate1.getDate();
    
    var totalTime1 = (yearsDifference1 * 12) + monthsDifference1 + Math.ceil(daysDifference1 / 30);

    var amountUsed1 = totalTime1 * 24.1666667;
    var refundAmount1 = (annualFee1 - amountUsed1);

    document.getElementById('amountUsed1').textContent = amountUsed1.toFixed(2);
    document.getElementById('refundAmount1').textContent = refundAmount1.toFixed(2);
}

function calculateRefundFamily() {
    var startDate2 = document.getElementById('startDate2').value;
    var endDate2 = document.getElementById('endDate2').value;
    var annualFee2 = parseFloat(document.getElementById('annualFee2').innerText);

    startDate2 = new Date(startDate2);
    endDate2 = new Date(endDate2);

    var yearsDifference2 = endDate2.getFullYear() - startDate2.getFullYear();
    var monthsDifference2 = endDate2.getMonth() - startDate2.getMonth();
    var daysDifference2= endDate2.getDate() - startDate2.getDate();
    
    var totalTime2 = (yearsDifference2 * 12) + monthsDifference2 + Math.ceil(daysDifference2 / 30);

    var amountUsed2 = totalTime2 * 26.6666667;
    var refundAmount2 = (annualFee2 - amountUsed2);

    document.getElementById('amountUsed2').textContent = amountUsed2.toFixed(2);
    document.getElementById('refundAmount2').textContent = refundAmount2.toFixed(2);
}

//functions to clear date inputs and amount results. Order = Individual, Couple, Family

function clearIndividual() {
    document.getElementById('startDate').value = "";
    document.getElementById("endDate").value = "";
    document.getElementById('amountUsed').textContent = "";
    document.getElementById('refundAmount').textContent = "";
}

function clearCouple() {
    document.getElementById('startDate1').value = "";
    document.getElementById("endDate1").value = "";
    document.getElementById('amountUsed1').textContent = "";
    document.getElementById('refundAmount1').textContent ="";
}

function clearFamily() {
    document.getElementById('startDate2').value = "";
    document.getElementById("endDate2").value = "";
    document.getElementById('amountUsed2').textContent = "";
    document.getElementById('refundAmount2').textContent = "";
}

document.getElementById("membership-type").addEventListener("change", showCalculator);

function showCalculator() {
    var membershipType = document.getElementById("membership-type").value;

    // Hide all membership sections
    document.querySelectorAll('.container > div').forEach(function(el) {
        el.style.display = 'none';
    });

    // Show the selected membership section
    document.querySelector('.' + membershipType.toLowerCase()).style.display = 'flex';

    if (membershipType === "individual") {
        clearCouple();
        clearFamily();
    } else if (membershipType === "couple") {
        clearIndividual();
        clearFamily();
    } else if (membershipType === "family") {
        clearIndividual();
        clearCouple();
    }
}