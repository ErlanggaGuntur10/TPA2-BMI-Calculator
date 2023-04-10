const calculateBtn = document.getElementById('calculateBtn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const myDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value) / 100;
    const bmi = weight / (height * height);
    const fixBmi = bmi.toFixed(2);

    let category = '';

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    myDiv.innerHTML = `Your BMI is ${fixBmi}. Which means You are ${category}.`;
});