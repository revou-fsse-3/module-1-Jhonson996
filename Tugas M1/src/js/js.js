const btnNav = document.getElementById('btn-nav');
const headerNav = document.querySelector('header');

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
}

// Function to close the navigation bar
function closeNavBar() {
    headerNav.style.left = '-20rem';
}

// Close the navigation bar when a menu item is clicked
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeNavBar();
    });
});





// tes
function submitForm() {
    // Mendapatkan nilai dari inputan
    var fullName = document.getElementById("full_name").value;
    var attendance = document.querySelector('input[name="attendance"]:checked').value;
    var wishes = document.getElementById("wishes").value;

    // Membuat elemen div pembungkus untuk menampilkan hasil input
    var listDiv = document.createElement("div");
    listDiv.className = "list-attendance";
    
    // Membuat elemen untuk menampilkan hasil input
    var listItem0 = document.createElement("div");
    listItem0.className = "nama-attend";
    listItem0.innerHTML = fullName;

    var listItem1 = document.createElement("div");
    listItem1.className = "attend-y-n";
    listItem1.innerHTML = "Attendance : " + attendance;

    var listItem2 = document.createElement("div");
    listItem2.className = "wishes-attend";
    listItem2.innerHTML = "Wishes : " + wishes;

    // Menambahkan elemen-elemen ke dalam div pembungkus
    listDiv.appendChild(listItem0);
    listDiv.appendChild(listItem1);
    listDiv.appendChild(listItem2);

  // Menambahkan div pembungkus ke daftar kehadiran
    var attendanceList = document.getElementById("attendance-list");
    attendanceList.appendChild(listDiv);

    alert(`Thank you, ${fullName}! For your Attendance.`);

    // Reset formulir
    document.getElementById("attendance-form").reset();
  }
