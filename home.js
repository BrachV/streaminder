/**
 * Initializes the home page by creating and appending necessary elements to the DOM.
 *
 * @param {Document} document - The document object representing the HTML document.
 * @returns {void}
 */
export default function HomePage(document) {
	// Get container element
	const container = document.getElementById('container');

	// Remove all classes from container
	container.removeAttribute('class');

	// Add home class to container
	container.className = 'home-ctn';

	// Create header element
	const header = document.createElement('header');
	header.className = 'home-header';

	// Create logo image element
	const logoImg = document.createElement('img');
	logoImg.className = 'streaminder-logo';
	logoImg.src = 'img/white-logo.svg';
	logoImg.alt = 'Streaminder Logo';

	// Create settings button element
	const settingsBtn = document.createElement('button');
	settingsBtn.id = 'settings-btn';

	// Create settings icon image element
	const settingsIconImg = document.createElement('img');
	settingsIconImg.className = 'settings-icon';
	settingsIconImg.src = 'img/settings.svg';
	settingsIconImg.alt = 'Settings icon';

	// Append logo image and settings icon to header
	header.appendChild(logoImg);
	settingsBtn.appendChild(settingsIconImg);
	header.appendChild(settingsBtn);

	// Append header to the document body
	document.body.appendChild(header);

	// Create section element
	const section = document.createElement('section');

	// Create filter container div
	const filterCtn = document.createElement('div');
	filterCtn.className = 'filter-ctn';

	// Create search bar container div
	const searchBarCtn = document.createElement('div');
	searchBarCtn.className = 'search-bar-ctn';

	// Create search bar input element
	const searchBar = document.createElement('input');
	searchBar.id = 'search-bar';
	searchBar.className = 'search-bar';
	searchBar.setAttribute('data-locale-placeholder', 'filter_name');

	// Create search icon container div
	const searchIconCtn = document.createElement('div');
	searchIconCtn.className = 'search-icon-ctn';

	// Create search icon image element
	const searchIconImg = document.createElement('img');
	searchIconImg.className = 'search-icon-img';
	searchIconImg.src = 'img/search.svg';
	searchIconImg.alt = 'Search icon';

	// Append search bar and search icon to search bar container
	searchBarCtn.appendChild(searchBar);
	searchIconCtn.appendChild(searchIconImg);
	searchBarCtn.appendChild(searchIconCtn);

	// Create filter button element
	const filterBtn = document.createElement('button');
	filterBtn.className = 'filter-btn';
	filterBtn.id = 'filter';

	// Create filter icon image element
	const filterIconImg = document.createElement('img');
	filterIconImg.className = 'filter-icon';
	filterIconImg.src = 'img/filter.svg';
	filterIconImg.alt = 'Filter icon';

	// Append filter icon to filter button
	filterBtn.appendChild(filterIconImg);

	// Append search bar container and filter button to filter container
	filterCtn.appendChild(searchBarCtn);
	filterCtn.appendChild(filterBtn);

	// Append filter container to section
	section.appendChild(filterCtn);

	// Append streamer list container to section
	section.appendChild(ListStreamer())

	// Append section and header to the document body
	container.appendChild(header);
	container.appendChild(section);
}

/**
 * Generates and returns a container containing a list of streamer rows.
 *
 * @returns {HTMLElement} - The container element containing streamer rows.
 */
export default function ListStreamer() {

	// Create streamer container div
	const streamerCtn = document.createElement('div');
	streamerCtn.className = 'streamer-ctn';

	// Create streamer rows using MOCKS data
	for (let i = 1; i <= 6; i++) {
		const streamerRowCtn = document.createElement('div');
		streamerRowCtn.className = 'streamer-row-ctn';
		streamerRowCtn.id = `streamer${i}`; // ! will use chrome.storage

		// Create streamer row part 1 container
		const streamerRowPartCtn1 = document.createElement('div');
		streamerRowPartCtn1.className = 'streamer-row-part-ctn';

		// Create streamer avatar image
		const streamerAvatarImg = document.createElement('img');
		streamerAvatarImg.className = 'streamer-row-avatar';
		streamerAvatarImg.src = '/img/temp-icon.png'; // ! will use chrome.storage
		streamerAvatarImg.alt = 'X';

		// Create streamer info container
		const streamerInfoCtn = document.createElement('div');
		streamerInfoCtn.className = 'streamer-row-info-ctn';

		// Create streamer name and category
		const streamerName = document.createElement('h2');
		streamerName.className = 'no-margin';
		streamerName.textContent = `Streamer${i}`; // ! will use chrome.storage

		const streamerCategory = document.createElement('p');
		streamerCategory.className = 'no-margin';
		streamerCategory.textContent = 'Jeux'; // ! will use chrome.storage

		// Append name and category to info container
		streamerInfoCtn.appendChild(streamerName);
		streamerInfoCtn.appendChild(streamerCategory);

		// Append avatar and info to row part 1 container
		streamerRowPartCtn1.appendChild(streamerAvatarImg);
		streamerRowPartCtn1.appendChild(streamerInfoCtn);

		// Create streamer row part 2 container
		const streamerRowPartCtn2 = document.createElement('div');
		streamerRowPartCtn2.className = 'streamer-row-part-ctn';

		// Create streamer stats container
		const streamerStatsCtn = document.createElement('div');
		streamerStatsCtn.className = 'streamer-row-stats-ctn';

		// Create streamer stats dot and count
		const streamerStatsDot = document.createElement('span');
		streamerStatsDot.className = 'streamer-row-stats-dot';

		const streamerStatsCount = document.createElement('p');
		streamerStatsCount.textContent = '20'; // ! will use chrome.storage

		// Append stats dot and count to stats container
		streamerStatsCtn.appendChild(streamerStatsDot);
		streamerStatsCtn.appendChild(streamerStatsCount);

		// Create streamer params button container
		const streamerParamsBtnCtn = document.createElement('button');
		streamerParamsBtnCtn.className = 'streamer-row-params-ctn';

		// Create streamer params dots
		for (let j = 0; j < 3; j++) {
			const streamerParamsDot = document.createElement('span');
			streamerParamsDot.className = 'streamer-row-params-dot';
			streamerParamsBtnCtn.appendChild(streamerParamsDot);
		}

		// Append stats and params to row part 2 container
		streamerRowPartCtn2.appendChild(streamerStatsCtn);
		streamerRowPartCtn2.appendChild(streamerParamsBtnCtn);

		// Append row parts to streamer row
		streamerRowCtn.appendChild(streamerRowPartCtn1);
		streamerRowCtn.appendChild(streamerRowPartCtn2);

		// Append streamer row to streamer container
		streamerCtn.appendChild(streamerRowCtn);
	}

	// Return streamer container
	return streamerCtn;
}
