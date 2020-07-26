const menu = () => {
    let oldDiv = document.getElementById('contentArea');
    oldDiv.innerHTML = `<div class = "menuPage"><div id = "menuTitle">Menu</div><div class = "menuItem" id = "item1">Wuhan Wontons<br>12</div><div class = "menuItem" id = "item2">Lockdownsagna<br>15</div><div class = "menuItem" id = "item3">Did it Right Pizza Pie<br>11</div>
    <div class = "menuItem" id = "item4">AZ 5K Quasadaya<br>9</div><div class = "menuItem" id = "item5">Florida Man<br>(Natty Light and Marlboro Red)<br>6</div><div class = "menuItem" id = "item6">2nd Wave Bloody Mary<br>8</div></div>`;

}

export { menu };