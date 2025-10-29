import aiJulie from '../../assets/ai-julie.png';
import about from '../../assets/About Me.png';
import books from '../../assets/Books.png';
import parents from '../../assets/Parents.png';
import events from '../../assets/Events.png';
import contact from '../../assets/Contact Me.png';
import waterColor from '../../assets/watercolour.png';

import { Contact } from './pages/contact.js';

export function nav() {
	const section = document.createElement('section');

	section.innerHTML = `
		<div>
			<div id="pivot_point">
				<img id="illustrated_julie" src=${aiJulie} alt="Illustrated Julie">
				<p id="about_me" class="nav-links"><img src=${about} alt=""></p>
				<p id="books" class="nav-links"><img src=${books} alt=""></p>
				<p id="parents" class="nav-links"><img src=${parents} alt=""></p>
				<p id="events" class="nav-links"><img src=${events} alt=""></p>
				<p id="contact_me" class="nav-links"><img src=${contact} alt=""></p>
			</div>
		</div>
		<img src=${waterColor} alt="Water Colour Background">
	`;

	return section;
}
