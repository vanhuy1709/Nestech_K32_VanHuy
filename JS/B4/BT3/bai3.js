result = (e) => {
    let weight = parseFloat(document.getElementById('weight').value)
    let height = parseFloat(document.getElementById('height').value) / 100

    console.log(height, weight)

    let resultBMI = weight / (height**2)
    let conclusion 
    if (resultBMI < 18.5) {
        conclusion = 'Underweight'
    } else if (resultBMI < 25) {
        conclusion = 'Normal'
    } else if (resultBMI < 30) {
        conclusion = 'Overweight'
    } else {
        conclusion = 'Obese'
    }

    document.getElementById('resultBMI').innerText = resultBMI.toFixed(2)
    document.getElementById('conclusion').innerText = conclusion
    e.preventDefault()

}