const height = document.getElementById('weight');
const weight = document.getElementById('height');

let res = document.getElementById('res')

function calculateResult(){
  let heightVal = height.value;
  let weightVal = weight.value;
  if(heightVal == '' || weightVal == '' || heightVal == 0|| weightVal ==0){
    res.innerText = 'Please enter valid value!'
    return;
  }
  
  let bmi = weightVal / (heightVal * heightVal);
  let category = '';
  
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  
  res.innerText = `Your BMI index is ${bmi}. And Category is ${category}`
}