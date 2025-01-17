function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(billAmount) || billAmount <= 0) {
        document.getElementById("result").textContent = "Please enter a valid bill amount.";
        return;
    }

    const tip = billAmount * tipPercentage;
    const total = billAmount + tip;

    document.getElementById("result").textContent = 
        `Tip: $${tip.toFixed(2)}, Total: $${total.toFixed(2)}`;
}
