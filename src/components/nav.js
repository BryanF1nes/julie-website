import aiJulie from '../../assets/ai-julie.png';
import about from '../../assets/About Me.png';
import books from '../../assets/Books.png';
import parents from '../../assets/Parents.png';
import events from '../../assets/Events.png';
import contact from '../../assets/Contact Me.png';
import waterColor from '../../assets/watercolour.png';

export function nav() {
	const section = document.createElement('section');

	section.innerHTML = `
		<div>
			<div id="pivot_point">
				<img id="illustrated_julie" src=${aiJulie} alt="Illustrated Julie">
				<a id="about_me" href="./pages/about.html"><img src=${about} alt=""></a>
				<a id="books" href="/books"><img src=${books} alt=""></a>
				<a id="parents" href="/parents"><img src=${parents} alt=""></a>
				<a id="events" href="/events"><img src=${events} alt=""></a>
				<a id="contact_me" href="/contact-me"><img src=${contact} alt=""></a>
			</div>
		</div>
		<img src=${waterColor} alt="Water Colour Background">
	`;

	return section;
}
