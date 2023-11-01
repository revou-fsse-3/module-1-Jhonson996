const btnNav = document.getElementById('btn-nav');
const headerNav = document.querySelector('header');

btnNav.addEventListener('click', () => {
    if (headerNav.style.left === '0px') {
        closeNavBar();
    } else {
        openNavBar();
    }
});

function openNavBar() {
    headerNav.style.left = '0';
}

function closeNavBar() {
    headerNav.style.left = '-20rem';
}

const menuItems = document.querySelectorAll('nav a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeNavBar();
    });
});


// Submit form
function submitForm() {
    // Mendapatkan nilai dari inputan
		var fullName = document.getElementById("full_name").value;
		var attendance = document.querySelector('input[name="attendance"]:checked').value;
		var wishes = document.getElementById("wishes").value;
	
	//unhide text 
		var list = document.getElementById("list");
		if (window.getComputedStyle( list ).display === "none") {
			list.style.display = "flex";
		}
	

	// elemen untuk menampilkan hasil input
		var listItem0 = document.createElement("div");
		listItem0.className = "name-attend";
		listItem0.innerHTML = fullName;

		var listItem2 = document.createElement("p");
		listItem2.innerHTML = "Wishes : ";

		var listItem3 = document.createElement("p");
		listItem3.className = "wishes-attend";
		listItem3.innerHTML = wishes;

            // untuk Attend yes or no tidak di tampilkan
            var listItem1 = document.createElement("div");
            listItem1.className = "attend-y-n";
            listItem1.innerHTML = attendance;

    // Membuat div untuk menampilkan hasil input
		var listDiv = document.createElement("div");
		listDiv.className = "list-attend";


	// Menambahkan elemen-elemen ke dalam div pembungkus
		listDiv.appendChild(listItem0);
		// listDiv.appendChild(listItem1);
		listDiv.appendChild(listItem2);
		listDiv.appendChild(listItem3);

	// Menambahkan list div  ke daftar kehadiran
		var attendanceList = document.getElementById("attendance-list");
		attendanceList.appendChild(listDiv);

	alert(`Thank you, ${fullName}! For your Participation.`);
	
	// Reset formulir
	document.getElementById("attendance-form").reset();
	
  }
