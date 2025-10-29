import chickens from '../../../assets/chickens.jpg';
import juliePhoto from '../../../assets/julie_garnett_photo.png';
import authorBg from '../../../assets/transition.png';

import daisyBook from '../../../assets/daisys-delightful-day.png';
import bookFestAward from '../../../assets/bookfest-award.png';

export function HomePage(node) {
	return node.after(authorTransition(), bookSection());
}

function authorTransition() {
	const authorTransition = document.createElement('div');
	authorTransition.setAttribute('id', 'author-transition');

	authorTransition.innerHTML = `
		<img id="daisys-chickens" src=${chickens} alt="Daisy's Chickens">
		<div>
			<img id="julie-ann-garnett-photo" src=${juliePhoto}
				alt="Julie Ann Garnett Photo">
		</div>
		<div id="author-information">
			<h1>Christian Book Author Julie Ann Garnett</h1>
			<p>Hi! I’m Julie Ann Garnett, and I write children’s books that tell about Jesus,
				His love for them, and how they can have a relationship with Him. My goal,
				as an author, is to help families talk about God. Check out all the different
				links to see my current book, upcoming books, events I’ll be at, or email me
				whatever you like (only kindness, please). I’d love to hear from you!
			</p>
			<a href="contact-me">Contact Me</a>
		</div>
		<img class="author-bg" src=${authorBg} alt="">
	`;

	return authorTransition;
};

function bookSection() {
	const daisysDay = document.createElement('div');
	daisysDay.setAttribute('id', 'daisys-delightful-day');

	daisysDay.innerHTML = `
		<div id="book-image">
			<img id="julie-ann-garnett-photo" src=${daisyBook} alt="Julie Ann Garnett Photo">
			<img id="bookfest-award" src=${bookFestAward} alt=""/>
		</div>
		<div id="book-information">
			<h1>Daisy's Delightful Day</h1>
			<p>
				Daisy's Delightful Day is the story of Palm Sunday told through the eyes of the donkey. 
				Meet Daisy, a sweet, young donkey who lives on a farm but has big dreams of living in
				the city. It is another beautiful day on the farm when suddenly, her normal routine gets
				disrupted. Daisy finds herself in the city! Here, she has a unique encounter with
				someone who will change her life forever. <br><span>*Third Place Winner of the Book Fest Award!*</span>
			</p>
			<a href="https://www.amazon.com/Daisys-Delightful-Day-Julie-Garnett/dp/B0D764D8MD"
				target="_blank">Buy Now</a>
		</div>
	`;

	return daisysDay;
}
