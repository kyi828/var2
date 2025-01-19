
let billAmount = parseFloat(prompt("Enter your bill amount:"));


if (isNaN(billAmount) || billAmount <= 0) {
    console.error("Invalid bill amount entered. Please enter a valid number.");
} else {
    console.log(`Original bill amount: $${billAmount.toFixed(2)}`);

   
    const taxRate = 0.07;
    let taxedBill = billAmount + (billAmount * taxRate);
    console.log(`Taxed bill (including 7% tax): $${taxedBill.toFixed(2)}`);

   
    const tipRate = 0.15;
    let tipAmount = taxedBill * tipRate;
    console.log(`Tip (15% of taxed bill): $${tipAmount.toFixed(2)}`);


    let finalBill = taxedBill + tipAmount;
    console.log(`Final bill total (including tax and tip): $${finalBill.toFixed(2)}`);


    alert(`Your final bill total (including tax and tip) is: $${finalBill.toFixed(2)}`);
}
