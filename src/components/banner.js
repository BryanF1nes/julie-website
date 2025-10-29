import bannerImage from '../../assets/daisy.png';

export function banner() {
	const header = document.createElement('header');
	header.setAttribute('id', 'header');

	header.innerHTML = `
		<div id="header-text">
			<h1>Julie Ann Garnett</h1>
			<p>Award Winning Christian Author</p>
		</div>
		<img src=${bannerImage} alt="Daisy Delightful Day">
	`;

	return header;
};
