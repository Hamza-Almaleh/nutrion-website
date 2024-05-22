function validateMeal() {
    const protein = parseFloat(document.getElementById('protein').value);
    const fat = parseFloat(document.getElementById('fat').value);
    const carbs = parseFloat(document.getElementById('carbs').value);
    const totalMacros = parseFloat(document.getElementById('totalMacros').value);

    const totalMealMacros = protein + fat + carbs;

    let message;
    if (totalMealMacros <= totalMacros) {
        message = "This meal is healthy for you.";
    } else {
        message = "This meal will destroy your health.";
    }

    document.getElementById('validationMessage').textContent = message;
}
