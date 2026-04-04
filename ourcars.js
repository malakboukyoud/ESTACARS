document.addEventListener("DOMContentLoaded", () => {

    // Sélection des éléments
    const brandCards = document.querySelectorAll('.brand-card');
    const cars = document.querySelectorAll('.car-card');
    const showAll = document.getElementById('showAll');
    const carsContainer = document.querySelector('.cars-grid');
    const buttons = document.querySelectorAll('.sort-buttons button');
    const typeSelect = document.getElementById('typeSelect');

    //  Fonction générale de filtre (marque + type)
    function filterCars({brand = null, type = typeSelect.value}) {
        cars.forEach(car => {
            const matchBrand = brand ? car.dataset.brand === brand : true;
            const matchType = type === 'all' ? true : car.dataset.type === type;
            car.style.display = (matchBrand && matchType) ? '' : 'none';
        });
    }

    // Filtre par marque
    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const brand = card.getAttribute('data-brand');
            filterCars({brand});
            document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Afficher toutes les voitures
    showAll.addEventListener('click', () => {
        filterCars({brand: null, type: typeSelect.value});
        document.getElementById('cars').scrollIntoView({ behavior: 'smooth' });
    });

    // Tri par boutons
    function setActiveButton(activeButton) {
        buttons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    function sortCars(sortType) {
        const carsArray = Array.from(cars).filter(car => car.style.display !== 'none');
        let sortedCars;

        switch(sortType) {
            case 'price-low':
                sortedCars = carsArray.sort((a, b) => parseFloat(a.dataset.price) - parseFloat(b.dataset.price));
                break;
            case 'price-high':
                sortedCars = carsArray.sort((a, b) => parseFloat(b.dataset.price) - parseFloat(a.dataset.price));
                break;
            case 'rating':
                sortedCars = carsArray.sort((a, b) => parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating));
                break;
            case 'brand':
                sortedCars = carsArray.sort((a, b) => a.dataset.brand.localeCompare(b.dataset.brand));
                break;
            default:
                sortedCars = carsArray;
        }

        sortedCars.forEach(car => carsContainer.appendChild(car));
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sortType = button.dataset.sort;
            setActiveButton(button);
            sortCars(sortType);
        });
    });

    // Filtre par type (select)
    typeSelect.addEventListener('change', () => {
        filterCars({brand: null, type: typeSelect.value});
    });

});