const burgerBtn = document.querySelector('.burger-icon')
const nav = document.querySelector('.nav-items')
const navItems = document.querySelectorAll('.nav-items__item')
const footerYear = document.querySelector('.footer-year')

const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselImages = document.querySelectorAll('.slider-img')
const carouselWidth = 700
const carouselSpeed = 3000



const handleNav = () => {
	document.body.classList.toggle('no-scroll')
	nav.classList.toggle('active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active')
		})
	})
}

burgerBtn.addEventListener('click', handleNav)

let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselImages.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}

const handleRightArrow = () => {
	index++
	resetInterval()
}
const handleLeftArrow = () => {
	index--
	resetInterval()
}

const resetInterval = () => {
	changeImage()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}

rightBtn.addEventListener('click', handleRightArrow)
leftBtn.addEventListener('click', handleLeftArrow)


const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

handleCurrentYear()






