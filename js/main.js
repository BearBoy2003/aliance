const navbar = document.querySelector('.navbar')
const logoImg = navbar.querySelector('img')

window.addEventListener('scroll', () => {
	if (window.scrollY > 1) {
		navbar.classList.add('navbar-light')
		logoImg.src = 'img/logo-dark.svg'
	} else {
		navbar.classList.remove('navbar-light')
		logoImg.src = 'img/logo-light.svg'
	}
})
