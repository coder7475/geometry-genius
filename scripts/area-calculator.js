function calculate(event) {
    const firstInput = event.parentNode.parentNode.childNodes[5].childNodes[1].value;
    const SecondInput = event.parentNode.parentNode.childNodes[5].childNodes[4].value;
    const convFirst = parseFloat(firstInput);
    const convSecond = parseFloat(SecondInput);
    const areaType = event.parentNode.parentNode.childNodes[1].innerText;
    console.log(areaType);
    // console.log(convFirst);
    // console.log(convSecond);
    let area;
    switch(areaType) {
        case 'Triangle':
            area = 0.5 * convFirst * convSecond;
            break;
        case 'Rectangle':
            area = convFirst * convSecond;
            break;
        case 'Parallelogram':
            area = convFirst * convSecond;
            break;
        case 'Rhombus':
            area = 0.5 * convFirst * convSecond;
            break;
        case 'Pentagon':
            area = 0.5 * convFirst * convSecond;
            break;
        case 'Ellipse':
            area = Math.PI * convFirst * convSecond;
            break;
        default:
            return;
    }
    console.log('Area: '+ area);
}