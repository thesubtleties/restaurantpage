const pageLoader = () => {
    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<div class = "restName">Covid Cafe</div>
    <div class = "menuBar">
      <div class = "menuLink" id = "home">Home</div>
      <div class = "menuLink" id = "menu">Menu</div>
      <div class = "menuLink" id = "contact">Contact</div>
    </div>
    <div class = "contentArea" id = "contentArea">
    <div class = "homePage"><div class = "homeText">Founded in 2019, Covid Cafe offers an unparalled menu of chef and crowd favorites. Globally inspired and locally sourced, we are laser focused on delivering a unique dining experience. 
      Whether you are in the mood for our signature 'Mask it or Casket' hand crafted cocktail, or our 1.5lb, USA#1 Burger - we deliver with pride. Remember, just because you can't taste, don't mean our shit don't taste good. </div></div>
    </div>`;
    
    };


export { pageLoader };