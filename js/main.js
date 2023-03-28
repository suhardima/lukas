// === Resize navbar on Scroll ===
var navbar = document.querySelector(".navbar");

// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

//Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector('.menu-btn');

if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlick is clicked
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove(".active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

// Product Color
var pic = document.querySelector("#main-shoe");
var white = document.querySelector(".white");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var yellow = document.querySelector(".yellow");
var green = document.querySelector(".green");
var black = document.querySelector(".black");
const colors = document.querySelectorAll(".color");
//store product info in object
var info = [
	{
		src: "images/products/Xiaomi-Redmi-10-putih.png"
	},
	{
		src: "images/products/xiaomi 12 pro biru muda.png"
	},
	{
		src: "images/products/vivo v11 pink.png"
	},
	{
		src: "images/products/poco m3 kuning.png"
	},
	{
		src: "images/products/OPPO-A53 hijau muda.png"
	},
	{
		src: "images/products/mi 12 T 5G Hitam.png"
	}
]
// change color 
white.addEventListener("click",function(){
	pic.src = info[0].src;
})

blue.addEventListener("click",function(){
	pic.src = info[1].src;
})

pink.addEventListener("click",function(){
	pic.src = info[2].src;
})

yellow.addEventListener("click",function(){
	pic.src = info[3].src;
})

green.addEventListener("click",function(){
	pic.src = info[4].src;
})

black.addEventListener("click",function(){
	pic.src = info[5].src;
})

// active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}

colors.forEach(c => c.addEventListener('click', color));