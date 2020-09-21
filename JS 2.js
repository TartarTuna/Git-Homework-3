//BMI
function BMI(w, h) {
    let height = h / 100;
    let result = w / (height * height);
    console.log(result.toFixed(1));
}

BMI(52, 159)