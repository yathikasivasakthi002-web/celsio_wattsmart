// Sample values
let voltage = 229;
let current = 5.2;
let usage = 3.45;
let bill = 1240;

// Update every 3 seconds
setInterval(() => {

    voltage = (228 + Math.random() * 3).toFixed(1);
    current = (5 + Math.random() * 0.5).toFixed(2);
    usage = (3.2 + Math.random() * 0.5).toFixed(2);
    bill = Math.floor(1200 + Math.random() * 100);

    document.getElementById("usage").innerHTML = usage + " kWh";
    document.getElementById("voltage").innerHTML = voltage + " V";
    document.getElementById("current").innerHTML = current + " A";
    document.getElementById("bill").innerHTML = "₹" + bill;

},3000);
