/*  menu bar */

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');
    const navBar = document.querySelector('.nav-bar');

    leftArrow.addEventListener('click', () => {
        navBar.scrollBy({ left: -200, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        navBar.scrollBy({ left: 200, behavior: 'smooth' });
    });
});

/* menu bar finish */

/* search bar code */

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const languageListItems = document.querySelectorAll('#languageList li');

    searchBar.addEventListener('input', () => {
        const searchText = searchBar.value.toLowerCase();
        
        languageListItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchText)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    });
});

/* finish search bar code */