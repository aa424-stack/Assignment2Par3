const billamountinput = document.getElementById('bill_amount');
const tippercentageinput = document.getElementById('tip_percentage');
const calculatebutton = document.getElementById('calc_button');
const totaldisplay = document.getElementById('total_amount');

calculatebutton.addEventListener('click', () => {
    const bill_amount = parseFloat(billamountinput.value);
    const tip_percentage = parseFloat(tippercentageinput.value);
    const tip_amount = (bill_amount * tip_percentage) / 100;
    const total_amount = bill_amount + tip_amount;
    totaldisplay.value = total_amount.toFixed(2);
});


