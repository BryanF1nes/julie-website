export function footer() {
	const footer = document.createElement('footer');
	footer.classList.add('footer-wave');

	footer.innerHTML = `
	<svg class="footer-wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
		<path fill="#B495F5"
			d="M0,96 C240,160 480,160 720,130 C960,100 1200,50 1440,90 L1440,320 L0,320 Z"></path>
	</svg>

	<div class="footer-content">
		<nav class="footer-links">
			<a href="#">Books</a>
			<a href="#">Contact Me</a>
			<a href="#">About Me</a>
			<a href="#">Follow Me</a>
		</nav>

		<div class="footer-icons">
			<a href="#"><i class="fa-brands fa-facebook fa-xl" style="color: #fff;"></i></a>
			<a href="#"><i class="fa-brands fa-x-twitter fa-xl" style="color: #fff;"></i></a>
			<a href="#"><i class="fa-brands fa-instagram fa-xl" style="color: #fff;"></i></a>
		</div>

		<p class="footer-copy">
			© Julie Ann Garnett. All Rights Reserved | Website designed by Bryah Fines
		</p>
	</div>
	`;

	return footer;
}
