import { pageLoader } from "./pageLoad";
import { contentArea as home } from "./home";
import { contact } from "./contact";
import { menu } from "./menu";

pageLoader();
const clearArea = () => {
    const oldDiv = document.getElementById('contentArea');
    oldDiv.innerHTML = '';

}
const navLinker = (() => {
    let menuArea = document.querySelectorAll('.menuLink');
    menuArea.forEach((div) => {
        div.addEventListener('click', () => {
            if (div.getAttribute('id') == 'home') {
                clearArea();
                home();
            }
            else if (div.getAttribute('id') == 'menu') {
                clearArea();
                menu();
            }
            else if (div.getAttribute('id') == 'contact') {
                clearArea();
                contact();
            }
        })
    })
})();
