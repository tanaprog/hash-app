
const contantBtn = document.querySelector('.contantBtn');
const listTabs = document.querySelector('.tabs');

let TABS = [];

function createElement(tag, className) {
    let element = document.createElement(tag);
    if (className) element.classList.add(className);
    return element;
}

function getTabId(event) {
    const parentNode = event.target.closest(".wrapper");
    const id = Number(parentNode.id);
    return id;
}

function controllerButton(event) {
    // const tab = event?.newURL.split("#").at(1);
    contantBtn.innerHTML = "button ONE";
}

function completeTabForId(id) {
    const findTab = TABS.find((tab) => tab.id === id);
    findTab.isCompleted = !findTab.isCompleted;
}

function render() {
    TABS.forEach((tab) => {
        const mainTab = tab.isCompleted ? "tab-main tab-main2" : "tab-main";
        const elementDiv = createElement('div', "city-list");
        elementDiv.setAttribute('id', city.id);

        const tabs = `
    <div class="favorit">
    <button class="${mainTab}" data-action="favorite">6565656565</button>
    </div>
    `;
    elementDiv.innerHTML = cityList;
    contantBtn.appendChild(elementDiv);
    
    })
}

function switchingTabs(e) {
    const id = getTabId(e);

    const tab = e.target.dataset.tab;
    if (tab === "tab-1") {
        window.location.hash = "one";
        // contantBtn.innerHTML = "button ONE";

    }
    if (tab === "tab-2") {
        window.location.hash = "two";
        // contantBtn.innerHTML = "button TWO";
    }
    render()
}

function urlWithoutHash() {
    const newUrl = history.replaceState(null, null, ' ');
    return newUrl;
}

function init() {
    render()
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