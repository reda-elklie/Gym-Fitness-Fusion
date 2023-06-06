let menu = document.querySelector('.bx-menu');
let navbar = document.querySelector('.nav');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
navbar.addEventListener("click", function() {
    navbar.classList.remove("open");
    menu.classList.toggle('bx-x');
});
document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activityLevel = document.getElementById('activity').value;
    const weightGoal = document.getElementById('goal').value;


    if (!age || !gender || !weight || !height || !activityLevel || !weightGoal) {
        alert('Please fill in all fields.');
        return;
    }

    let bmr;
    if (gender === 'male') {
//         bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
         bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    } else {
        alert('Invalid gender');
        return;
    }


    let activityFactor;
    switch (activityLevel) {
        case 'sedentary':
            activityFactor = 1.2;
            break;
        case 'lightly active':
            activityFactor = 1.375;
            break;
        case 'moderately active':
            activityFactor = 1.55;
            break;
        case 'very active':
            activityFactor = 1.725;
            break;
        case 'extra active':
            activityFactor = 1.9;
            break;
        default:
            alert('Invalid activity level');
            return;
    }


    let estimatedCalories = bmr * activityFactor;


    if (weightGoal === 'lose') {
        estimatedCalories -= 500;
    } else if (weightGoal === 'gain') {
        estimatedCalories += 500;
    }


    const resultElement = document.getElementById('result');
    let spanValue = document.querySelector(".span");
    resultElement.classList.remove('hidden');
    spanValue.textContent = estimatedCalories.toFixed(2);
});
