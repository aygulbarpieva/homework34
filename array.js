// 1)

const brandsArr = ['google', 'apple', 'microsoft'];
console.log(brandsArr);
brandsArr.unshift('xiaomi', 'huawei', 'oneplus');
console.log(brandsArr);

const BrandsArr = ['google', 'apple', 'microsoft'];
console.log(BrandsArr);
BrandsArr.push('xiaomi', 'huawei', 'oneplus');
console.log(BrandsArr);

const brandsArray = ['google', 'apple', 'microsoft'];
console.log(brandsArray);
const array = ['xiaomi', 'huawei', 'oneplus'];
console.log(array);
let newArr = brandsArray.concat(array);
console.log(newArr);


// 2)

let names = ['Ann', 'Bred', 'Josef', 'Jacob', 'Ali'];
let firstElement = prompt('Введите первое имя:');
names.unshift(firstElement);
console.log(names);

let secondElement = prompt('Введите второе имя:');
names.push(secondElement);
console.log(names);


// 3)

let colors = ['red', 'orange', 'violet', 'white', 'black'];
console.log(colors);

let splicedItems = colors.splice(1, 1, 'green');
console.log(splicedItems);
console.log(colors);


// 4)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

let sliced = numbers.slice(4, 8);
console.log(sliced);