const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Dropout' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

/* ===============  POPUP  =============== */

/* =============== BSCS POPUP =============== */

// OWEN TOGGLE

function toggle_owen() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('owen_popup')
    popup.classList.toggle('active')
}

// DYLAN TOGGLE

function toggle_dylan() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('dylan_popup')
    popup.classList.toggle('active')
}

// DROPOUT TOGGLE

function toggle_dropout() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('dropout_popup')
    popup.classList.toggle('active')
}

/* =============== BSIT 1 POPUP =============== */

// AJ TOGGLE

function toggle_aj() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('aj_popup')
    popup.classList.toggle('active')
}

// LA TOGGLE

function toggle_la() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('la_popup')
    popup.classList.toggle('active')
}

// STEVEN TOGGLE

function toggle_steven() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('steven_popup')
    popup.classList.toggle('active')
}

/* =============== BSIT 2 POPUP =============== */

// ANGELO TOGGLE

function toggle_angelo() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('angelo_popup')
    popup.classList.toggle('active')
}

// SOFIA TOGGLE

function toggle_sofia() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('sofia_popup')
    popup.classList.toggle('active')
}

// BAUI TOGGLE

function toggle_baui() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('baui_popup')
    popup.classList.toggle('active')
}

// ANDREA TOGGLE

function toggle_andrea() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('andrea_popup')
    popup.classList.toggle('active')
}