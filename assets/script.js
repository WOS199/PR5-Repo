const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let image = document.querySelector('.banner-img')
let tagLineHtml = document.querySelector('#banner p')
let dotList = document.querySelectorAll(".dots div")
let i = 0

setSlide()

function setSlide() {
	image.src = "./assets/images/slideshow/" + slides[i].image
	tagLineHtml.innerHTML = slides[i].tagLine
}

function setDots() {
	dotList.forEach((element) => element.classList.remove("dot_selected"));
	dotList[i].classList.add("dot_selected");
}

function changeRight() {
	i++
	if (i > slides.length - 1) {
		i = 0
	}
	setSlide()
	setDots()
}

function changeLeft() {
	i--
	if (i < 0) {
		i = slides.length - 1
	}
	setSlide()
	setDots()
}

let leftArrow = document.querySelector(".arrow_left")
leftArrow.addEventListener("click", () => {
	changeLeft()
	
});

let rightArrow = document.querySelector(".arrow_right")
rightArrow.addEventListener("click", () => {
	changeRight()
});

