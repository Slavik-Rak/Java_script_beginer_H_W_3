
// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let user_any = {
    name: 'Yaroslav',
    age: 36,
    married: 'yes'
};
let car = {
    status: 'yes',
    year: 2013,
    color: 'black'
};
let nout = {
    model: 'ASUS',
    materal: 'metal',
    sensor: 'yes'
};
let trening = {
    distans: 5,
    speed: 10,
    time: 'morning'
};
let travel = {
    town: 'Krakow',
    kilometrs: 36,
    excursions: 'yes'
};


// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let user = {
    name: 'Yaroslav',
    age: 36,
    married: 'yes',
    famely: [
        {
            ststus: "wife",
            name: "Kristyna",
            age: 30
        },
        {
            ststus: "son",
            name: "Oleksander",
            age: 7
        },
        {
            ststus: "daughter",
            name: "Sofia",
            age: 7
        },
        {
            ststus: "young_daughter",
            name: "Veronika",
            age: 4
        }

    ]
};

let cars_any = {
    manufacturers: [
        {
            marka: 'Mersedes',
            model: ['model_M_1', 'model_M_2', 'model_M_3', 'model_M_4']
        },
        {
            marka: 'Volvo',
            model: ['model_V_1', 'model_V_2', 'model_V_3', 'model_V_4']
        },
        {
            marka: 'BMW',
            model: ['model_B_1', 'model_B_2', 'model_B_3', 'model_B_4']
        }
    ],
    type_configurations: ['config_1', 'config_2', 'config_3', 'config_4']
}

let magazine = {
    personals: {
        names: ['Name_1', 'Name_2', 'Name_3', 'Name_4'],
        salaries: ['solar_1', 'solar_2', 'solar_3', 'solar_4']
    },
    products: {
        milk: ['milk_1', 'milk_2', 'milk_3', 'milk_4'],
        meat: ['meat_1', 'meat_2', 'meat_3', 'meat_4'],
        grocery: ['grocery_1', 'grocery_2', 'grocery_3', 'grocery_4']
    }
}

let my_parents = {
    mather: {
        name: 'Oksana',
        age: 60,
        job: 'teacher'
    },
    father: {
        name: 'Roman',
        age: 68,
        job: 'water_utility'
    }
}


let school = {
    director: {
        name_director: 'Name',
        age_director: 50,
    },
    titches: ['Name_titche_1', 'Name_titche_2', 'Name_titche_3', 'Name_titche_4'],
    claass: ['A', 'B', 'C', 'D']
}


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

/* console.log(user);
for (const keyUser in user) {
    console.log(keyUser);
}
console.log(cars);
for (const key_cars in cars) {
    console.log(key_cars);
}
console.log(magazine);
for (const key_magazine in cars) {
    console.log(key_magazine);
}
console.log(my_parents);
for (const key_my_parents in cars) {
    console.log(key_my_parents);
}
console.log(school);
for (const key_school in school) {
    console.log(key_school);
}
 */
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

/* let arr_key_user = Object.keys(user);
console.log(arr_key_user);
let arr_key_cars = Object.keys(cars);
console.log(arr_key_cars);
let arr_key_magazine = Object.keys(magazine);
console.log(arr_key_magazine);
let arr_key_my_parents = Object.keys(my_parents);
console.log(arr_key_my_parents);
let arr_key_school = Object.keys(school);
console.log(arr_key_school);
 */

// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let cars = [
    {
        model: 'Nissan',
        years: 2013,
        power: 2.5,
        color: 'black'
    },
    {
        model: 'lexus',
        years: 2015,
        power: 2,
        color: 'white'
    },
    {
        model: 'BMW',
        years: 2020,
        power: 2,
        color: 'blue'
    },
    {
        model: 'mersedes',
        years: 2021,
        power: 3,
        color: 'white'
    },
    {
        model: 'VW',
        years: 2016,
        power: 2,
        color: 'black'
    },
    {
        model: 'Volvo',
        years: 2019,
        power: 2.5,
        color: 'silver'
    },
    {
        model: 'Infiniti',
        years: 2018,
        power: 3,
        color: 'black'
    },
    {
        model: 'Mazda',
        years: 2017,
        power: 3.5,
        color: 'white'
    },
    {
        model: 'Toyota',
        years: 2021,
        power: 3,
        color: 'silver'
    },
    {
        model: 'Audi',
        years: 2021,
        power: 13,
        color: 'black'
    },
    {
        model: 'Peugeot',
        years: 2020,
        power: 2,
        color: 'white'
    }
];

// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let cities = [
    {
        name: 'Toun_1',
        population: 30000,
        country: 'Country_1',
        region: 'Region_1'
    },
    {
        name: 'Toun_2',
        population: 30000,
        country: 'Country_2',
        region: 'Region_2'
    },
    {
        name: 'Toun_3',
        population: 30000,
        country: 'Country_3',
        region: 'Region_3'
    },
    {
        name: 'Toun_4',
        population: 30000,
        country: 'Country_4',
        region: 'Region_4'
    },
    {
        name: 'Toun_5',
        population: 30000,
        country: 'Country_5',
        region: 'Region_5'
    },
    {
        name: 'Toun_6',
        population: 30000,
        country: 'Country_6',
        region: 'Region_6'
    },
    {
        name: 'Toun_6',
        population: 30000,
        country: 'Country_6',
        region: 'Region_6'
    },
    {
        name: 'Toun_7',
        population: 30000,
        country: 'Country_7',
        region: 'Region_7'
    },
    {
        name: 'Toun_8',
        population: 30000,
        country: 'Country_8',
        region: 'Region_8'
    },
    {
        name: 'Toun_9',
        population: 30000,
        country: 'Country_9',
        region: 'Region_9'
    },
    {
        name: 'Toun_10',
        population: 30000,
        country: 'Country_10',
        region: 'Region_10'
    },
];

// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
let User_cars = [
    {
        model: 'lexus',
        years: 2015,
        power: 2,
        color: 'white',
        driver: {
            name_drive: 'Name1',
            yaer: 1985,
            pol: 'man',
            expiriens_year: '13'
        }
    },
    {
        model: 'mersedes',
        years: 2021,
        power: 3,
        color: 'white',
        driver: {
            name_drive: 'Name2',
            yaer: 1993,
            pol: 'man',
            expiriens_year: '12'
        }
    },
    {
        model: 'Audi',
        years: 2021,
        power: 13,
        color: 'black',
        driver: {
            name_drive: 'Name3',
            yaer: 2000,
            pol: 'man',
            expiriens_year: '11'
        }
    }
];

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
/*
let i = 0;
while (i < cars.length) {
    console.log(cars[i]);
    i++;
};
let j = 0;
while (j < cities.length) {
    console.log(cities[j]);
    j++;
}
let k = 0;
while(k<User_cars.length){
    console.log(User_cars[k]);
    k++;
}
 */
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
/*
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i])
}

for (let i = 0; i < User_cars.length; i++) {
    console.log(User_cars[i])
}
 */
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
/*
for (let elem of cars) {
    console.log(elem);
}
for (let elem of cities) {
    console.log(elem);
}
for (let elem of User_cars) {
    console.log(elem);
}
 */
// - взять объекты из задания 1 и превратить каждый в json.
/* 
let user_any_json = JSON.stringify(user_any);
console.log(user_any_json);
let cars_any_json = JSON.stringify(cars_any);
console.log(cars_any_json);
let magazine_json = JSON.stringify(magazine);
console.log(magazine_json);
let my_parents_json = JSON.stringify(my_parents);
console.log(my_parents_json);
let school_json = JSON.stringify(school);
console.log(school_json);
 */
// - взять json из задания 11 и превратить их обратно в объекты.
/* 
let res_user_any_json= JSON.parse(user_any_json);
console.log(res_user_any_json);
let res_cars_any_json= JSON.parse(cars_any_json);
console.log(res_cars_any_json);
let res_magazine_json= JSON.parse(magazine_json);
console.log(res_magazine_json);
let res_my_parents_json= JSON.parse(my_parents_json);
console.log(res_my_parents_json); 
let res_school_json= JSON.parse(school_json);
console.log(res_school_json);
 */

// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
/* 
for(let elem of cars){
    console.log(JSON.stringify(elem));
}
 */
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
/* 
for(let elem of cities){
    console.log(JSON.stringify(elem));
}
 */
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
/* 
for(let elem of User_cars){
    console.log(JSON.stringify(elem));
}
 */
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
/* 
let users_arr = [
    {
        name: 'name_User_1',
        age: 18,
        skills: ['Skils_11', 'Skils_12', 'Skils_13', 'Skils_14', 'Skils_15', 'Skils_16']
    },
    {
        name: 'name_User_2',
        age: 28,
        skills: ['Skils_21', 'Skils_22', 'Skils_23', 'Skils_24', 'Skils_25', 'Skils_26']
    },
    {
        name: 'name_User_3',
        age: 38,
        skills: ['Skils_31', 'Skils_32', 'Skils_33', 'Skils_34', 'Skils_35', 'Skils_36']
    }
]

for (let elem of users_arr) {
    for (let elem_in in elem) {
       
        if (Array.isArray(elem[elem_in])) {
            for (let el_arr of elem[elem_in]) {
                console.log('  ' + el_arr)
            }
        }else{
            console.log(elem[elem_in])
        }
    }
}
 */

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
/* 
let users_arr = [
    {
        name: 'name_User_1',
        age: 18,
        skills: ['Skils_11', 'Skils_12', 'Skils_13', 'Skils_14', 'Skils_15', 'Skils_16']
    },
    {
        name: 'name_User_2',
        age: 28,
        skills: ['Skils_21', 'Skils_22', 'Skils_23', 'Skils_24', 'Skils_25', 'Skils_26']
    },
    {
        name: 'name_User_3',
        age: 38,
        skills: ['Skils_31', 'Skils_32', 'Skils_33', 'Skils_34', 'Skils_35', 'Skils_36']
    }
]

let arr_skills = [];


for (let obj_arr of users_arr) {
    for (let key_obj in obj_arr) {

        if (key_obj == 'skills') {
            for (let elem of obj_arr[key_obj]) {
                arr_skills.push(elem);
            }
        }
    }
}
console.log(arr_skills);
 */

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
/* let users = [
    {
        name: 'vasya',
        age: 31,
        status: false,
        skills: ['java', 'js']
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        skills: ['java', 'js', 'html']
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        skills: ['mysql', ',mongo']
    },
    {
        name: 'olya',
        age: 28,
        status: false,
        skills: ['java', 'js']
    },
    {
        name: 'max',
        age: 30,
        status: true,
        skills: ['mysql', ',mongo']
    }
]; */
/*
for (let elem of users) {
    console.log(elem)
    for (let elem_skill of elem.skills) {
        console.log(elem_skill);
    }
}
 */


// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
/* 
let arr_adres = [];
for(let elem of users){
    arr_adres.push(elem);
}
console.log(arr_adres);
 */
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
/* 
let div = document.createElement('div');
for (let elem of users) {
    for (let key in elem) {

        div.innerHTML += elem[key]+ '<br>';
    }
    div.innerHTML += '<hr>';
 
}
document.body.appendChild(div);
 */
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
/* 
for (let obj_user of users) {
    let div = document.createElement('div');
    for (let key in obj_user) {

        div.innerHTML += obj_user[key] + '<br>';
    }
    document.body.appendChild(div);
}
 */
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
/* 
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

let div_wrap = document.createElement('div');
div_wrap.classList.add('div_wrap');

for (let elem_us of users) {
    let div_user_wrap = document.createElement('div');
    div_user_wrap.classList.add('div_user_wrap');
    for (let key_us in elem_us) {
        if (typeof elem_us[key_us] == 'object') {
            let div_wrap_address = document.createElement('div');
            div_wrap_address.classList.add('div_wrap_address');
            let e_a = elem_us[key_us];

            for (let key_address in e_a) {
                let div_address_ittem = document.createElement('div');
                div_address_ittem.classList.add('div_address_ittem');
                div_address_ittem.innerHTML += e_a[key_address] + '<br>';

                div_wrap_address.appendChild(div_address_ittem);
            }

            div_user_wrap.appendChild(div_wrap_address);
        } else {
            div_user_wrap.innerHTML += elem_us[key_us] + '<br>';
        }
    }

    div_wrap.appendChild(div_user_wrap);
}

document.body.appendChild(div_wrap); 
*/
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
/* let usersWithId = [
    {
        id: 1,
        name: 'vasya',
        age: 31,
        status: false
    },
    {
        id: 2,
        name: 'petya',
        age: 30,
        status: true
    },
    {
        id: 3,
        name: 'kolya',
        age: 29,
        status: true
    },
    {
        id: 4,
        name: 'olya',
        age: 28,
        status: false
    },
];
let citiesWithId = [
    {
        user_id: 3,
        country: 'USA',
        city: 'Portland'
    },
    {
        user_id: 1,
        country: 'Ukraine',
        city: 'Ternopil'
    },
    {
        user_id: 2,
        country: 'Poland',
        city: 'Krakow'
    },
    {
        user_id: 4,
        country: 'USA',
        city: 'Miami'
    },
];
 */
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

/* 
let user_citi = [];
for (let elem_usersWithId of usersWithId) {

    let obj_user_citi = {};

    for (let key_elem_usersWithId in elem_usersWithId) {
        obj_user_citi[key_elem_usersWithId] = elem_usersWithId[key_elem_usersWithId];
    }
    for (let elem_citiesWithId of citiesWithId) {
        if (elem_usersWithId.id == elem_citiesWithId.user_id) {
            let adres_obj = {};
            for (let key_elem_citiesWithId in elem_citiesWithId) {
                if (key_elem_citiesWithId != 'user_id') {
                    //obj_user_citi[key_elem_citiesWithId] = elem_citiesWithId[key_elem_citiesWithId];
                    adres_obj[key_elem_citiesWithId] = elem_citiesWithId[key_elem_citiesWithId];
                }
            }
            obj_user_citi['adress : '] = adres_obj;
        }

    }

    user_citi.push(obj_user_citi);
}

console.log(user_citi);

 */

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

/* let div_text = document.createElement('div');
div_text.classList.add('div_text_class');
div_text.innerText = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellat reprehenderit veritatis porro, officiis laudantium eveniet veniam obcaecati nesciunt ducimus.'
document.body.appendChild(div_text); */

/* 
let div_textId = document.getElementById('div_text_id');
console.log(div_textId.innerText);
let div_textClass = document.getElementsByClassName('div_text_class');
for (let elem of div_textClass) {
    console.log(elem.innerHTML);
}

let div_textTeg = document.getElementsByTagName('div');
for(let elem of div_textTeg){
    console.log(elem.innerHTML);
}
 */
// - змінити цей текст використовуючи селектори id, class,  tag

/* let div_textId = document.getElementById('div_text_id');
div_textId.innerText +='Id Id Id Id Id Id Id Id Id Id Id '; 
console.log(div_textId.innerText);
let div_textClass = document.getElementsByClassName('div_text_class');
for (let elem of div_textClass) {
    elem.innerHTML += 'class class class class class class ';
    console.log(elem.innerHTML);
}

let div_textTeg = document.C('div');
for(let elem of div_textTeg){
    elem.innerHTML+='teg teg teg teg teg teg teg teg teg ';
    console.log(elem.innerHTML);
} */

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
/* 
let div_id = document.getElementById('div_text_id');
div_id.style.width = '500px';
div_id.style.height = '400px';

let div_class = document.getElementsByClassName('div_text_class');
for(let elem of div_class){
    elem.style.width = '100px';
    elem.style.height = '500px';
}

let div_teg = document.getElementsByTagName('div');
for(let elem of div_teg){
    elem.style.width = '600px';
    elem.style.height = '300px';
}
 */

// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

/* 
let new_table = document.createElement('table');
let tr = document.createElement('tr');

for (let i = 0; i < 3; i++) {
    let td = document.createElement('td');
    td.classList.add('clas_table');
    td.innerHTML = 'TD : '+ (i + 1);
    tr.appendChild(td);
}
    new_table.appendChild(tr);
document.body.appendChild(new_table);
 */

// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

/* 
let new_table = document.createElement('table');
for(let i = 1; i<=10; i++){
    let tr = document.createElement('tr');
    for(let j = 1; j<=3;j++){
        let td = document.createElement('td');
        td.classList.add('clas_table');
        td.innerHTML = ' '+ i + " TR " + j + " TD ";
        tr.appendChild(td);
    }
    new_table.appendChild(tr);
}
document.body.appendChild(new_table);
 */

// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
/* 
let new_table = document.createElement('table');
for(let i = 1; i<=10; i++){
    let tr = document.createElement('tr');
    for(let j = 1; j<=5;j++){
        let td = document.createElement('td');
        td.classList.add('clas_table');
        td.innerHTML = ' '+ i + " TR " + j + " TD ";
        tr.appendChild(td);
    }
    new_table.appendChild(tr);
}
document.body.appendChild(new_table);
 */
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
/* 
let n = prompt("Enter number n");
let m = prompt("Enter number m"); 
let new_table = document.createElement('table');
for (let i = 1; i <= n; i++) {
    let tr = document.createElement('tr');
    for (let j = 1; j <= m; j++) {
        let td = document.createElement('td');
        td.classList.add('clas_table');
        td.innerHTML = ' ' + i + " TR " + j + " TD ";
        tr.appendChild(td);
    }
    new_table.appendChild(tr);
}
document.body.appendChild(new_table);
 */

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії

//  - знайти всі елементі, які мають class
/* 
const all = document.body.querySelectorAll('*');

for (let elem of all) {
    if (elem.classList.value != '') {
        console.log(elem);
    }
}
 */
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
/* 
let par = document.body.getElementsByTagName('p');
for(let elem of par){
    elem.innerText='hello oktenweb!';
}
 */

//  - знайти всі div та змінити ім колір на червоний
/* 
let div_red = document.body.getElementsByTagName('div');

for(let elem of div_red){
    elem.style.background = 'red';
}
 */


// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.   

// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
let wrap = document.getElementsByClassName('navigation');
console.log(wrap);
let pars = document.getElementsByClassName('title_h2');

let ul = document.createElement('ul')

for (let elem of pars) {
    let li = document.createElement('li');
    li.innerText = elem.innerText;
    ul.appendChild(li);
    console.log(elem);
}

    document.body.appendChild(ul);

// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
