// Массив объектов с блюдами
const dishes = [
    {
        keyword: 'tom_yam',
        name: 'Том Ям',
        price: 300,
        category: 'soup',
        count: '350 мл',
        image: 'img/i.webp'
    },
    {
        keyword: 'borsch',
        name: 'Борщ',
        price: 250,
        category: 'soup',
        count: '400 мл',
        image: 'img/bori.webp'
    },
    {
        keyword: 'cream_soup',
        name: 'Крем-суп',
        price: 280,
        category: 'soup',
        count: '300 мл',
        image: 'img/crem.jpg'
    },
    {
        keyword: 'carbonara',
        name: 'Паста Карбонара',
        price: 400,
        category: 'main',
        count: '250 г',
        image: 'img/pasta.webp'
    },
    {
        keyword: 'steak',
        name: 'Стейк с овощами',
        price: 700,
        category: 'main',
        count: '300 г',
        image: 'img/steik.webp'
    },
    {
        keyword: 'chicken',
        name: 'Куриное филе с картофелем',
        price: 350,
        category: 'main',
        count: '200 г',
        image: 'img/potato.webp'
    },
    {
        keyword: 'lemonade',
        name: 'Лимонад',
        price: 150,
        category: 'drink',
        count: '500 мл',
        image: 'img/limonad.webp'
    },
    {
        keyword: 'coffee',
        name: 'Кофе',
        price: 100,
        category: 'drink',
        count: '300 мл',
        image: 'img/coffe.webp'
    },
    {
        keyword: 'juice',
        name: 'Сок',
        price: 120,
        category: 'drink',
        count: '500 мл',
        image: 'img/juice.webp'
    }
];

// Выбранные блюда (начальное состояние)
let selectedDishes = {
    soup: null,
    main: null,
    drink: null
};

// Функция для отображения блюд на странице
function displayDishes() {
    const soupsSection = document.querySelector('#soups .menu-section');
    const mainsSection = document.querySelector('#main-dishes .menu-section');
    const drinksSection = document.querySelector('#drinks .menu-section');

    // Сортируем блюда по алфавиту
    dishes.sort((a, b) => a.name.localeCompare(b.name));

    dishes.forEach(dish => {
        // Создаем карточку для блюда
        const dishCard = document.createElement('div');
        dishCard.classList.add('dish');
        dishCard.setAttribute('data-dish', dish.keyword);

        // Добавляем содержимое карточки
        dishCard.innerHTML = `
            <img src="../static/${dish.image}" alt="${dish.name}">
            <p>${dish.name}</p>
            <p>Объем/Вес: ${dish.count}</p>
            <p>Цена: ${dish.price}₽</p>
            <button>Добавить</button>
        `;

        // Определяем, в какую секцию добавить блюдо
        if (dish.category === 'soup') {
            soupsSection.appendChild(dishCard);
        } else if (dish.category === 'main') {
            mainsSection.appendChild(dishCard);
        } else if (dish.category === 'drink') {
            drinksSection.appendChild(dishCard);
        }

        // Добавляем событие для кнопки "Добавить"
        dishCard.querySelector('button').addEventListener('click', () => addToOrder(dish));
    });
}

// Функция для добавления выбранного блюда в заказ
function addToOrder(dish) {
    // Обновляем выбранное блюдо в соответствующей категории
    selectedDishes[dish.category] = dish;

    // Обновляем отображение заказа
    updateOrderForm();
}

// Функция для обновления формы заказа
function updateOrderForm() {
    const soupOrder = document.querySelector('#soup-order');
    const mainOrder = document.querySelector('#main-order');
    const drinkOrder = document.querySelector('#drink-order');
    const totalPriceElement = document.querySelector('#total-price');

    // Обновляем отображение для каждой категории
    soupOrder.textContent = selectedDishes.soup ? `${selectedDishes.soup.name} - ${selectedDishes.soup.price}₽` : 'Блюдо не выбрано';
    mainOrder.textContent = selectedDishes.main ? `${selectedDishes.main.name} - ${selectedDishes.main.price}₽` : 'Блюдо не выбрано';
    drinkOrder.textContent = selectedDishes.drink ? `${selectedDishes.drink.name} - ${selectedDishes.drink.price}₽` : 'Напиток не выбран';

    // Подсчет общей стоимости
    let totalPrice = 0;
    if (selectedDishes.soup) totalPrice += selectedDishes.soup.price;
    if (selectedDishes.main) totalPrice += selectedDishes.main.price;
    if (selectedDishes.drink) totalPrice += selectedDishes.drink.price;

    // Отображение итоговой стоимости
    if (totalPrice > 0) {
        totalPriceElement.textContent = `Стоимость заказа: ${totalPrice}₽`;
    } else {
        totalPriceElement.textContent = '';
    }
}

// При загрузке страницы вызываем функции для отображения блюд и пустой формы заказа
document.addEventListener('DOMContentLoaded', () => {
    displayDishes();

    // Убираем лишнее добавление блока, если оно уже есть
    const orderForm = document.querySelector('.order-form fieldset');
    if (!document.querySelector('#soup-order')) {
        orderForm.innerHTML += `
            <p id="soup-order">Блюдо не выбрано</p>
            <p id="main-order">Блюдо не выбрано</p>
            <p id="drink-order">Напиток не выбран</p>
            <p id="total-price"></p>
        `;
    }
});
