const tabClear = document.querySelector('.clear');
const tabClouds = document.querySelector('.clouds');
const contantBtn = document.querySelector('.contantBtn');
const listTabs = document.querySelector('.tabs');

function changeActiveTabOne(className) {
    if (!tabClear.classList.contains(className)) {
        tabClear.classList.add(className);
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
    const tab = e.target.dataset.tab;

    if (tab === "tab-1") {
        window.location.hash = "clear";
        changeActiveTabOne("active");
    }
    if (tab === "tab-2") {
        window.location.hash = "clouds";
        changeActiveTabTwo("active");
    }
}

function controllerButton() {
    if (location.hash === "#clear") {
        renderClear();
    }
    false

    if (location.hash === "#clouds") {
        renderClouds();
    }
    false
}

function updatePage() {
    const newUrl = history.replaceState(null, null, "#clear");
    return newUrl;
}

function init() {
    renderClear();
    updatePage();

    window.addEventListener ("hashchange", controllerButton);
    listTabs.addEventListener('click', switchingTabs);
}

init();