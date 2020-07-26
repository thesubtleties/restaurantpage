const contact = () => {
    let oldDiv = document.getElementById('contentArea');
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class = "homeText">We love to hear from our patien... patrons. Please contact us at 555-432-1234 or noreply@covidcafe.com</div>`;
    newDiv.setAttribute('class', 'homePage');
    oldDiv.appendChild(newDiv);
}

export { contact };