//! 1
//* 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели.

// function someDay(day) {
//     // console.log("ENTER NUMBER FROM 1 TO 7");
//     switch (day) {
//         case 1:
//             console.log("Monday");
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log("Wednesday");
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log("Friday");
//             break;
//         case 6:
//             console.log("Saturday");
//             break;
//         case 7:
//             console.log("Sunday");
//             break;
//         default:
//             console.log("ERROR");
//     }
//     // console.log("OK");
// }
// someDay();

//! 2
//* 2. Дан список дел
//* задача: принимать от пользователя id того, что он сделал и менять статус на true,
//* также должна быть возможность добавлять новые пункты дел, учесть, что айди должен быть уникальным

// let arr = [
//     { id: 1, todo: "Принять душ", done: false },
//     { id: 2, todo: "Завтрак", done: false },
//     { id: 3, todo: "Пойти на работу", done: false },
//     { id: 4, todo: "Приготовить ужин", done: false },
//     { id: 5, todo: "Лечь спать", done: false },
// ];
// let isAdd;
// while (true) {
//     let userInfo = prompt(
//         "Поменять статус(c), добавить новое дело(a), просмотреть дела(r), закончить(e)"
//     );
//     function addArr(todo) {
//         let maxId = 0;
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].id > maxId) {
//                 maxId = arr[i].id;
//             }
//         }
//         let newArr = {
//             id: maxId + 1,
//             todo: "",
//             done: false,
//         };
//         arr.push(newArr);
//         newArr.todo = isAdd;
//     }

//     function changeArr(id) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i].id === id) {
//                 arr[i].done = true;
//                 break;
//             }
//         }
//     }

//     if (userInfo == "a") {
//         isAdd = prompt("КАКОЕ ДЕЙСТВИЕ НАДО ДОБАВИТЬ?");
//         addArr();
//     } else if (userInfo == "r") {
//         console.log(arr);
//     } else if (userInfo == "c") {
//         let isId = +prompt("КАКОЕ ДЕЛО ВЫ СДЕЛАЛИ?(id)");
//         changeArr(isId);
//     } else if (userInfo == "e") {
//         console.log(arr);
//         break;
//     } else {
//         console.log("ERROR");
//     }
// }

//! 3
//* 3. Дан список товаров следующего вида:
//* , задача: запросить у пользователя
//* информацию о том, какой телефон он бы хотел приобрести, затем предложить ему
//* варианты расцветки телефона, после того как пользователь введет цвет, озвучить
//* цену на товар и спросить будет ли он покупать, если ответ положительный то
//* количество товара нужно уменьшить на 1, учесть, что товара может не быть
//* на складе, в этом случае вывести сообщение типа: Извините, в данный момент товара нет на складе

// let data = [
//     {
//         title: "Samsung",
//         price: 1000,
//         count: 3,
//         color: ["black", "white", "blue"],
//     },
//     { title: "Xiaomi", price: 600, count: 0, color: ["white"] },
//     { title: "LG", price: 450, count: 5, color: ["black", "white"] },
//     { title: "Sony", price: 700, count: 4, color: ["white", "yellow", "gray"] },
// ];

// function buyPhone() {
//     const phoneName = prompt(
//         "Какой телефон хотите купить? Samsung,Xiaomi,LG,Sony."
//     );
//     let selectedPhone = null;

//     for (let i = 0; i < data.length; i++) {
//         if (data[i].title.toLowerCase() === phoneName.toLowerCase()) {
//             selectedPhone = data[i];
//             break;
//         }
//     }
//     if (!selectedPhone) {
//         console.log("Такого телефона нет");
//         return;
//     }

//     const selectedColor = prompt(
//         `Выберите цвет (${selectedPhone.color.join(", ")}):`
//     );
//     const colorExists = selectedPhone.color.includes(selectedColor);
//     if (!colorExists) {
//         console.log("Извините, такой цвет не найден.");
//         return;
//     }
//     console.log(`Стоимость: ${selectedPhone.price} сом`);

//     const isBuy = prompt("Хотите купить? (y/n)").toLowerCase();

//     if (isBuy === "y" && selectedPhone.count > 0) {
//         selectedPhone.count--;
//         console.log("Покупка выполнена.");
//     } else if (isBuy === "y") {
//         console.log("Товара нет на складе");
//     } else if ("n") {
//         console.log("Покупка отменена.");
//     } else {
//         console.log("ERROR");
//     }
// }
// buyPhone();

//! 4
//* 4. Сортировка по цене. Дан массив
//* задача: запросить у пользователя диапазон цен от и до(необходимо получить информацию за один запрос)
//* затем найти подходящие товары и вывести пользователю в формате: Название товара - цена
// let data = [
//     { title: "Samsung S20", price: 1000 },
//     { title: "Samsung A31", price: 200 },
//     { title: "Samsung S10", price: 600 },
//     { title: "Xiaomi Mi 10", price: 400 },
//     { title: "Xiaomi Redmi 8", price: 300 },
//     { title: "iPhone 13", price: 1100 },
//     { title: "iPhone 11", price: 800 },
// ];
// function sort() {
//     let minPrice = +prompt("Введите минимальную цену:");
//     let maxPrice = +prompt("Введите максимальную цену:");

//     let foundProducts = false;

//     for (let i = 0; i < data.length; i++) {
//         const product = data[i];

//         if (product.price >= minPrice && product.price <= maxPrice) {
//             console.log(`${product.title} - ${product.price} сом`);
//             let foundProducts = true;
//         }
//     }
//     if (foundProducts == false) {
//         console.log("Товары не найдены.");
//     }
// }
// sort();
// 5. Создать игру. Задача: создать программу, которая
// запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100),
// стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по
// умолчанию(герой 1, герой 2), каждая стихия повышает силу героя на определенное
// количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля
// +5 к силе), после добавления героев в бд, устраивать между ними бой и выявлять
// победителя по следующим характеристикам(победил тот, у кого больше силы, если
// силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья),
// выводить информацию в виде имени победителя либо просто сообщение типа: Ничья, в том случае
// если победителя нет

//* ОБЪЯВЛЯЮ БАЗУ ДАННЫХ
let hero1 = {
    name: null,
    strength: null,
    agility: null,
    element: null,
};

let hero2 = {
    name: null,
    strength: null,
    agility: null,
    element: null,
};

// УЗНАЕМ ПАРАМЕТРЫ ГЕРОЕВ

let hero1Name = prompt("Выберите имя первого героя");
hero1.name = hero1Name;
let hero1Strength = +prompt("Выберите силу первого героя (макс 100)");
let hero1Agility = +prompt("Выберите ловкость первого героя (макс 100)");

//* ЗДЕСЬ ОГРАНИЧЕНИЯ СТАВИМ

if (hero1Strength <= 100 && hero1Agility <= 100) {
    hero1.strength = hero1Strength;
    hero1.agility = hero1Agility;
} else {
    console.log(
        "Первый герой слишком сильный, поэтому ваши параметры обнуляются!"
    );
}

let hero1Element = prompt(
    "Выберите стихию первого героя (fire, air, water, earth)"
);
hero1.element = hero1Element;

//* ЗДЕСЬ УЗНАЕМ СТИХИЮ И ДАЕМ БОНУС ОЧКИ

switch (hero1Element) {
    case "fire":
        hero1.strength = hero1.strength + 20;
        break;
    case "air":
        hero1.strength = hero1.strength + 15;
        break;
    case "water":
        hero1.strength = hero1.strength + 10;
        break;
    case "earth":
        hero1.strength = hero1.strength + 5;
        break;
    default:
        console.log("ERROR, вы неправильно выбрали стихию");
        break;
}

// УЗНАЕМ ПАРАМЕТРЫ ГЕРОЕВ

let hero2Name = prompt("Выберите имя второго героя");
hero2.name = hero2Name;
let hero2Strength = +prompt("Выберите силу второго героя (макс 100)");
let hero2Agility = +prompt("Выберите ловкость второго героя (макс 100)");

//* ЗДЕСЬ ОГРАНИЧЕНИЯ СТАВИМ

if (hero2Strength <= 100 && hero2Agility <= 100) {
    hero2.strength = hero2Strength;
    hero2.agility = hero2Agility;
} else {
    console.log(
        "Второй герой слишком сильный, поэтому ваши параметры обнуляются!"
    );
}
let hero2Element = prompt(
    "Выберите стихию второго героя (fire, air, water, earth)"
);
hero2.element = hero2Element;

//* ЗДЕСЬ УЗНАЕМ СТИХИЮ И ДАЕМ БОНУС ОЧКИ

switch (hero2Element) {
    case "fire":
        hero2.strength = hero2.strength + 20;
        break;
    case "air":
        hero2.strength = hero2.strength + 15;
        break;
    case "water":
        hero2.strength = hero2.strength + 10;
        break;
    case "earth":
        hero2.strength = hero2.strength + 5;
        break;
    default:
        console.log("ERROR, вы неправильно выбрали стихию");
        break;
}

console.log(hero1);
console.log(hero2);

if (hero1.strength > hero2.strength) {
    console.log(
        `${hero1.name} победил!!! Так как у ${hero1.name} больше силы.`
    );
} else if (hero1.strength < hero2.strength) {
    console.log(
        `${hero2.name} победил!!! Так как у ${hero2.name} больше силы.`
    );
} else if ((hero1.strength = hero2.strength)) {
    if (hero1.agility > hero2.agility) {
        console.log(
            `${hero1.name} победил!!! Так как у ${hero1.name} больше ловкости.`
        );
    } else if (hero1.agility < hero2.agility) {
        console.log(
            `${hero2.name} победил!!! Так как у ${hero2.name} больше ловкости.`
        );
    } else if ((hero1.agility = hero2.agility)) {
        console.log("Никто из героев не победил. Так как их параметры равны.");
    } else {
        console.log("ERROR");
    }
} else {
    console.log("ERROR");
}
//! Решение всех задач должно быть в одном файле, файл залить в гитхаб, ссылку прикрепить в классрум
