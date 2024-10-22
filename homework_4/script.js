let fetchInfo = {};
let pageCounter = 1;
let isFetching = false;

const charactersWrapper = document.querySelector('.characters-wrapper');
const modalWrapper = document.querySelector('.modal-wrapper');
const modalCharacterImg = document.querySelector('.modal-character-img');
const modalCharacterName = document.querySelector('.modal-character-name');
const modalCharacterStatus = document.querySelector('.modal-character-status');

const fetchCharacterById = async (characterId) => {
    try {
        const result = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`);
        const character = await result.json();
        
        return character;

    } catch (error) {
        console.error('Error fetching character details:', error);
    }
};

const fetchCharacters = async (pageNum) => {
    if (isFetching) return;

    try {
        isFetching = true;
        charactersWrapper.innerHTML += "<div class='loading'>Loading...</div>";

        const result = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`);
        const data = await result.json();

        fetchInfo = data;

        renderCharacters();

        isFetching = false;
        document.querySelector('.loading').remove();

    } catch (error) {
        console.error('Error fetching characters:', error);
        charactersWrapper.innerHTML = "Failed to load characters.";
        isFetching = false;
    }
};

const renderCharacters = () => {
    fetchInfo.results.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-wrapper');
        characterCard.dataset.id = character.id;

        characterCard.innerHTML = `
            <img class="character-img" src="${character.image}" alt="${character.name}" />
            <p class="character-name">${character.name}</p>
            <span class="character-status">${character.status}</span>
        `;
        charactersWrapper.appendChild(characterCard);
    });
};

const showModal = (character) => {
    modalCharacterImg.src = character.image;
    modalCharacterName.innerText = character.name;
    modalCharacterStatus.innerText = character.status;

    modalWrapper.classList.add('modal-visible');
    document.body.style.overflow = 'hidden';
};

const hideModal = () => {
    modalWrapper.classList.remove('modal-visible');
    document.body.style.overflow = 'auto';
};

charactersWrapper.addEventListener('click', async (e) => {
    const characterCard = e.target.closest('.character-wrapper');
    
    if (characterCard) {
        e.stopPropagation();
        
        try {
            const character = await fetchCharacterById(characterCard.dataset.id);
            
            if (character) {
                showModal(character);
            }
        } catch (error) {
            console.error('Error showing character modal:', error);
        }
    }
});

modalWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal-wrapper')) {
        hideModal();
    }
});

const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !isFetching && fetchInfo.info.next) {
        pageCounter++;
        fetchCharacters(pageCounter);
    }
};

window.addEventListener('scroll', handleScroll);

fetchCharacters(pageCounter);
