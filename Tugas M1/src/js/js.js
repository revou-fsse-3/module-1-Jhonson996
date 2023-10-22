const btnNav = document.getElementById('btn-nav');
const navBar = document.querySelector('nav');
const main = document.querySelector('main');

btnNav.addEventListener('click', () => {
    if (navBar.style.left === '0px') {
        closeNavBar();
    } else {
        openNavBar();
    }
});

// Function to open the navigation bar
function openNavBar() {
    navBar.style.left = '0';
    main.style.marginLeft = '20rem';
}

// Function to close the navigation bar
function closeNavBar() {
    navBar.style.left = '-20rem';
    main.style.marginLeft = '0';
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