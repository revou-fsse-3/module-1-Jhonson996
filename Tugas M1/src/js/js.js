const btnNav = document.getElementById('btn-nav');
const headerNav = document.querySelector('header');
const main = document.querySelector('main');
const content = document.querySelector('.content');

btnNav.addEventListener('click', () => {
    if (headerNav.style.left === '0px') {
        closeNavBar();
    } else {
        openNavBar();
    }
});

// Function to open the navigation bar
function openNavBar() {
    headerNav.style.left = '0';
    main.style.marginLeft = '20rem';
    content.style.marginRight = '-10rem';
}

// Function to close the navigation bar
function closeNavBar() {
    main.style.marginLeft = '0';
    headerNav.style.left = '-20rem';
    content.style.marginRight = '0';
}

// Close the navigation bar when a menu item is clicked
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeNavBar();
    });
});






// alert
function myFunction() {
                    
    const fullName = document.getElementById('full_name').value;

    alert(`Thank you, ${fullName}! For your Attendance.`);

    form.reset();
}