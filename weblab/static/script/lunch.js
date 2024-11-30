const dishes = [
    // Супы (6 блюд)
    { keyword: 'gazpacho', name: 'Гаспачо', price: 195, category: 'soups', kind: 'veg', image: '../static/img/gazpacho.webp' },
    { keyword: 'borscht', name: 'Борщ', price: 250, category: 'soups', kind: 'meat', image: '../static/img/borscht.webp' },
    { keyword: 'fish_soup', name: 'Уха', price: 220, category: 'soups', kind: 'fish', image: 'soups/fish_soup' },
    { keyword: 'mushroom_soup', name: 'Грибной суп', price: 200, category: 'soups', kind: 'veg', image: 'soups/mushroom' },
    { keyword: 'chicken_soup', name: 'Куриный суп', price: 230, category: 'soups', kind: 'meat', image: 'soups/chicken' },
    { keyword: 'shrimp_soup', name: 'Суп с креветками', price: 260, category: 'soups', kind: 'fish', image: 'soups/shrimp' },

    // Главные блюда (6 блюд)
    { keyword: 'steak', name: 'Стейк', price: 650, category: 'main-dishes', kind: 'meat', image: 'main/steak' },
    { keyword: 'grilled_salmon', name: 'Лосось на гриле', price: 750, category: 'main-dishes', kind: 'fish', image: 'main/salmon' },
    { keyword: 'ratatouille', name: 'Рататуй', price: 400, category: 'main-dishes', kind: 'veg', image: 'main/ratatouille' },
    { keyword: 'pasta', name: 'Паста с овощами', price: 300, category: 'main-dishes', kind: 'veg', image: 'main/pasta' },
    { keyword: 'beef_burger', name: 'Говяжий бургер', price: 550, category: 'main-dishes', kind: 'meat', image: 'main/beef_burger' },
    { keyword: 'fish_taco', name: 'Рыбное тако', price: 500, category: 'main-dishes', kind: 'fish', image: 'main/fish_taco' },

    // Салаты и стартеры (6 блюд)
    { keyword: 'greek_salad', name: 'Греческий салат', price: 200, category: 'salads-starters', kind: 'veg', image: 'salads/greek' },
    { keyword: 'caesar_salad', name: 'Цезарь с курицей', price: 250, category: 'salads-starters', kind: 'meat', image: 'salads/caesar' },
    { keyword: 'tuna_tartare', name: 'Тартар из тунца', price: 300, category: 'salads-starters', kind: 'fish', image: 'salads/tuna_tartare' },
    { keyword: 'vegetable_starter', name: 'Овощная тарелка', price: 180, category: 'salads-starters', kind: 'veg', image: 'salads/vegetable' },
    { keyword: 'bruschetta', name: 'Брускетта', price: 220, category: 'salads-starters', kind: 'veg', image: 'salads/bruschetta' },
    { keyword: 'carrot_salad', name: 'Морковный салат', price: 190, category: 'salads-starters', kind: 'veg', image: 'salads/carrot' },

    // Напитки (6 блюд)
    { keyword: 'lemonade', name: 'Лимонад', price: 150, category: 'drinks', kind: 'cold', image: 'drinks/lemonade' },
    { keyword: 'tea', name: 'Чай', price: 100, category: 'drinks', kind: 'hot', image: 'drinks/tea' },
    { keyword: 'coffee', name: 'Кофе', price: 200, category: 'drinks', kind: 'hot', image: 'drinks/coffee' },
    { keyword: 'juice', name: 'Апельсиновый сок', price: 120, category: 'drinks', kind: 'cold', image: 'drinks/juice' },
    { keyword: 'milkshake', name: 'Молочный коктейль', price: 180, category: 'drinks', kind: 'cold', image: 'drinks/milkshake' },
    { keyword: 'hot_chocolate', name: 'Горячий шоколад', price: 210, category: 'drinks', kind: 'hot', image: 'drinks/hot_chocolate' },

    // Десерты (6 блюд)
    { keyword: 'chocolate_cake', name: 'Шоколадный торт', price: 250, category: 'desserts', kind: 'medium', image: 'desserts/chocolate_cake' },
    { keyword: 'cheesecake', name: 'Чизкейк', price: 300, category: 'desserts', kind: 'large', image: 'desserts/cheesecake' },
    { keyword: 'pancakes', name: 'Блины', price: 150, category: 'desserts', kind: 'small', image: 'desserts/pancakes' },
    { keyword: 'ice_cream', name: 'Мороженое', price: 100, category: 'desserts', kind: 'small', image: 'desserts/ice_cream' },
    { keyword: 'tiramisu', name: 'Тирамису', price: 200, category: 'desserts', kind: 'medium', image: 'desserts/tiramisu' },
    { keyword: 'fruit_platter', name: 'Фруктовая тарелка', price: 180, category: 'desserts', kind: 'small', image: 'desserts/fruit_platter' },
];


const selectedDishes = { soups: null, 'main-dishes': null, drinks: null, salads: null, desserts: null };

// Функция для добавления блюда в заказ
function addToOrder(category, dish) {
    selectedDishes[category] = dish; // Добавляем выбранное блюдо в объект
    console.log(`Добавлен ${category}:`, dish); // Логируем, чтобы понять, что добавляется
    updateOrderForm(); // Обновляем отображение в форме
    checkOrder(); // Проверяем правильность заказа
}

// Функция обновления формы с заказом
function updateOrderForm() {
    console.log(selectedDishes); // Логируем содержимое объекта заказа, чтобы увидеть, что в нем

   document.querySelector('#soup-order').textContent =
        selectedDishes.soups ? `Суп: ${selectedDishes.soups.name} - ${selectedDishes.soups.price} ₽` : 'Суп: Блюдо не выбрано';

    document.querySelector('#main-order').textContent =
        selectedDishes['main-dishes'] ? `Главное блюдо: ${selectedDishes['main-dishes'].name} - ${selectedDishes['main-dishes'].price} ₽` : 'Главное блюдо: Блюдо не выбрано';

    document.querySelector('#drink-order').textContent =
        selectedDishes.drinks ? `Напиток: ${selectedDishes.drinks.name} - ${selectedDishes.drinks.price} ₽` : 'Напиток: Блюдо не выбрано';

    // Изменяем, чтобы использовалась правильная категория для салата
    document.querySelector('#salad-order').textContent =
        selectedDishes['salads-starters'] ? `Салат: ${selectedDishes['salads-starters'].name} - ${selectedDishes['salads-starters'].price} ₽` : 'Салат: Блюдо не выбрано';

    document.querySelector('#dessert-order').textContent =
        selectedDishes.desserts ? `Десерт: ${selectedDishes.desserts.name} - ${selectedDishes.desserts.price} ₽` : 'Десерт: Блюдо не выбрано';

    // Подсчет общей стоимости
    let totalPrice = 0;
    Object.values(selectedDishes).forEach((dish) => {
        if (dish) totalPrice += dish.price; // Добавляем цену каждого выбранного блюда
    });

    document.querySelector('#total-price').textContent = `Итого: ${totalPrice} ₽`;
}

// Функция проверки правильности заказа
function checkOrder() {
    const soup = selectedDishes.soups;
    const main = selectedDishes['main-dishes'];
    const drink = selectedDishes.drinks;

    let notification = document.getElementById('notification');
    notification.textContent = ''; // Очистить старые уведомления

    // Проверка на все необходимые блюда
    if (!soup || !main || !drink) {
        notification.style.color = 'red';
        notification.textContent = 'Ошибка: Выберите все необходимые блюда!'; // Уведомление об ошибке
        return false; // Возвращаем false, если не выбраны все обязательные блюда
    }
    notification.style.color = 'green';
    notification.textContent = 'Все блюда выбраны правильно!';
    return true; // Возвращаем true, если все обязательные блюда выбраны
}

// Запуск фильтров по категориям
document.addEventListener('DOMContentLoaded', () => {
    const categories = ['soups', 'main-dishes', 'salads-starters', 'drinks', 'desserts'];

    categories.forEach((category) => {
        displayDishes(category); // Отображаем блюда в каждой категории

        // Добавление обработчиков для кнопок фильтров
        const filterButtons = document.querySelectorAll(`#${category} .filter-btn`);
        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const kind = button.dataset.kind;
                displayDishes(category, kind);
            });
        });
    });
});

// Функция для отображения блюд
function displayDishes(category, kind = 'all') {
    const section = document.querySelector(`#${category} .menu-section`);
    section.innerHTML = ''; // Очищаем контейнер перед заполнением

    const filteredDishes = dishes.filter(
        (dish) => dish.category === category && (kind === 'all' || dish.kind === kind)
    );

    if (filteredDishes.length === 0) {
        section.innerHTML = '<p>Нет блюд для отображения</p>';
        return;
    }

    filteredDishes.forEach((dish) => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish';
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <h3>${dish.name}</h3>
            <p>${dish.price} ₽</p>
            <button class="add-btn">Добавить</button>
        `;
        section.appendChild(dishCard);

        const button = dishCard.querySelector('button');
        button.addEventListener('click', () => addToOrder(category, dish)); // Связываем кнопку с добавлением блюда в заказ
    });
}

// Отправка формы и проверка
document.getElementById('lunch-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Проверка на корректность заказа
    if (checkOrder()) {
        alert('Заказ принят!');
    } else {
        alert('Ошибка: Пожалуйста, выберите все обязательные блюда!');
    }
});
