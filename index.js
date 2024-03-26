const buttonOne = document.querySelector(".one");
const buttonTwo = document.querySelector(".two");
const contantBtn = document.querySelector('.contantBtn');
const listTabs = document.querySelector('.tabs')

function getTabId(event){
    const parentNode = event.target.closest(".wrapper");
    const id = Number(parentNode.id);
    return id;
}

function controllerButton(event) {
    const tab = event?.newURL.split("#").at(1);
    console.log(tab);
}

function switchingTabs (e){
    const id = getTabId(e);
    
    const tab = e.target.dataset.tab;
    if (tab === "tab-1") {
        window.location.hash = "1";
        contantBtn.innerHTML = "button ONE";
    }
    if (tab === "tab-2") {
        window.location.hash = "2";
        contantBtn.innerHTML = "button TWO";
    }
}

function urlWithoutHash (){
    const newUrl = history.replaceState(null, null, ' ');
    contantBtn.innerHTML = "URL without HASH";
    return newUrl;
}

function init() {
    urlWithoutHash();
    
    window.addEventListener("hashchange", controllerButton);
    listTabs.addEventListener("click", switchingTabs)   
}

init();














// function renderButton() {
//     tabs.forEach((tab) =>{
//     const createDivWrapper = createElement("div", "wrapper");
//     createDivWrapper.setAttribute(id, tab.id)

//     const tabs = `
//     <button type="button" data-action="one" class="on" id="one">one</button>
//     <button type="button" data-action="two" class="on" id="two">two</button>
//     `;

//     createDivWrapper.innerHTML = tabs;
//     wrapper.appendChild(createDivWrapper);
//     })
// }


// window.addEventListener("hashchange", (event) => {
//     const tab = event?.newURL.split("#").at(1);
//     console.log(tab);
//     if(tab == 2){
//         contantBtn.innerHTML = "button TWO"
//     }
//     if(tab == 1){
//         contantBtn.innerHTML = "button ONE"
//     }
// })