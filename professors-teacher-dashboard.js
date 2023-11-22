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

/* ===============  MODAL  =============== */

/* =============== IT/CS DEPARTMENT - MODAL =============== */

// SIR MARCELO - TOGGLE

function toggle_marcelo() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('marcelo_popup')
    popup.classList.toggle('active')
}

// SIR ESER - TOGGLE

function toggle_eser() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('eser_popup')
    popup.classList.toggle('active')
}

// SIR JHAY - TOGGLE

function toggle_jhay() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('jhay_popup')
    popup.classList.toggle('active')
}

// SIR MAR - TOGGLE

function toggle_mar() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('mar_popup')
    popup.classList.toggle('active')
}

/* =============== SOCIAL STUDIES DEPARTMENT - MODAL =============== */

// SIR DE GUZMAN - TOGGLE

function toggle_dg() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('dg_popup')
    popup.classList.toggle('active')
}

// MAAM CIELO - TOGGLE

function toggle_cielo() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('cielo_popup')
    popup.classList.toggle('active')
}

// SIR GEORGE - TOGGLE

function toggle_george() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('george_popup')
    popup.classList.toggle('active')
}

/* =============== BSIT 2 POPUP =============== */

// SIR JOSHUA - TOGGLE

function toggle_joshua() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('joshua_popup')
    popup.classList.toggle('active')
}

// MAAM IVY - TOGGLE

function toggle_ivy() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('ivy_popup')
    popup.classList.toggle('active')
}


// SIR NESTEVE - TOGGLE

function toggle_nesteve() {
    var blur = document.getElementById('blur')
    blur.classList.toggle('active')

    var popup = document.getElementById('nesteve_popup')
    popup.classList.toggle('active')
}