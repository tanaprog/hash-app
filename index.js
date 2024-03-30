const tabClear = document.querySelector('.clear');
const tabClouds = document.querySelector('.clouds');
const contantBtn = document.querySelector('.contantBtn');
const listTabs = document.querySelector('.tabs');


function getTabId(event) {
    const parentNode = event.target.closest(".wrapper");
    const id = Number(parentNode.id);
    return id;
}

function changeActiveTabOne(className) {
    if (!tabClear.classList.contains(className)) {
        tabClear.classList.add(className)
        tabClouds.classList.remove(className)
    }
}

function changeActiveTabTwo(className) {
    if (!tabClouds.classList.contains(className)) {
        tabClouds.classList.add(className);
        tabClear.classList.remove(className);
    }
}

function renderClear() {
    contantBtn.innerHTML = '';
    const tabs = `
                <img class="tab-1" src="./img/clear.png" alt="">
        `;

    contantBtn.insertAdjacentHTML('beforeend', tabs);
}

function renderClouds() {
    contantBtn.innerHTML = '';

    const tabs = `
                <img class="tab-2" src="./img/clouds.png " alt="">
        `;
    contantBtn.insertAdjacentHTML('beforeend', tabs)
}

function switchingTabs(e) {
    const id = getTabId(e);
    const tab = e.target.dataset.tab;

    if (tab === "tab-1") {
        window.location.hash = "clear";
        renderClear(id)
        changeActiveTabOne("active");
    }
    if (tab === "tab-2") {
        window.location.hash = "clouds";
        renderClouds(id)
        changeActiveTabTwo("active");
    }
}

function init() {
    renderClear();
    listTabs.addEventListener('click', switchingTabs)
}

init();