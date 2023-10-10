const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add("close");
		menu.classList.add("show");
		menuNav.classList.add("show");
		menuBranding.classList.add("show");
		navItems.forEach((item) => item.classList.add("show"));

		showMenu = true;
	} else {
		menuBtn.classList.remove("close");
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		menuBranding.classList.remove("show");
		navItems.forEach((item) => item.classList.remove("show"));

		showMenu = false;
	}
}

function copyToClipboard(e) {
	var target = e.target || e.srcElement;
	var text = target.childNodes[2].nodeValue.trim();

	navigator.clipboard.writeText(text).then(
		function () {
			var copyTextDiv = document.querySelector(".Copy-text");
			copyTextDiv.style.opacity = 1;

			// Get the x and y positions of the mouse click relative to the page
			var clickX = e.clientX;
			var clickY = e.clientY;

			// Get the width and height of the copyTextDiv
			var copyTextDivWidth = copyTextDiv.offsetWidth;
			var copyTextDivHeight = copyTextDiv.offsetHeight;

			// Calculate the position of the copyTextDiv to center it on the click
			var xPosition = clickX - copyTextDivWidth / 2;
			var yPosition = clickY - copyTextDivHeight / 2;

			// Set the position of the copyTextDiv to the calculated position
			copyTextDiv.style.position = "fixed";
			copyTextDiv.style.left = `${xPosition}px`;
			copyTextDiv.style.top = `${yPosition}px`;

			setTimeout(function () {
				copyTextDiv.style.opacity = 0;
				copyTextDiv.style.transition = "opacity 1s ease-in-out";
			}, 1500);
		},
		function (err) {}
	);
}
