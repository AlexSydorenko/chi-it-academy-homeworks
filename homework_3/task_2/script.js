let fetchInfo = {};
let pageCounter = 1;

const charactersWrapper = document.querySelector('.characters-wrapper');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const currPage = document.querySelector('.curr-page');

const fetchCharacters = async (pageNum) => {
    try {
        charactersWrapper.innerHTML = "Loading...";

        const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`);
        const data = await result.json();

        fetchInfo = data;

        renderCharacters();

        currPage.innerText = pageCounter;

        prevBtn.disabled = !data.info.prev;
        nextBtn.disabled = !data.info.next;

    } catch (error) {
        console.error('Error fetching characters:', error);
        charactersWrapper.innerHTML = "Failed to load characters.";
    }
};

const renderCharacters = () => {
    charactersWrapper.innerHTML = '';

    fetchInfo.results.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-wrapper');

        characterCard.innerHTML = `
            <img class="character-img" src="${character.image}" alt="${character.name}" />
            <p class="character-name">${character.name}</p>
            <span class="character-status">${character.status}</span>
        `;
        charactersWrapper.appendChild(characterCard);
    });
};

prevBtn.addEventListener('click', () => {
    if (pageCounter > 1) {
        pageCounter--;
        fetchCharacters(pageCounter);
    }
});

nextBtn.addEventListener('click', () => {
    if (pageCounter < fetchInfo.info.pages) {
        pageCounter++;
        fetchCharacters(pageCounter);
    }
});

fetchCharacters(pageCounter);
