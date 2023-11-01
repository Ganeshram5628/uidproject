function calculateDiscount() {
    var ticketPrice = parseFloat(document.getElementById("ticketPrice").value);
    var discountPercentage = parseFloat(document.getElementById("discountPercentage").value);

    if (!isNaN(ticketPrice) && !isNaN(discountPercentage)) {
        var discountAmount = (ticketPrice * discountPercentage) / 100;
        var discountedPrice = ticketPrice - discountAmount;
        document.getElementById("discountedPrice").textContent = discountedPrice.toFixed(2);
    } else {
        alert("Please enter valid numbers for ticket price and discount percentage.");
    }
}
