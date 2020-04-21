//{'виробник':'назва продукту'}
var map1 = new Map();
map1.set('BMW', 'BMW M5');
map1.set('Mercedes', 'Mercedes Benz');
map1.set('Honda', 'Honda Civic');
map1.set('Bently', 'Bently Classic');
map1.set('Subaru', 'Subaru Impreza');
map1.set('Lamborgini', 'Lamborgini Galardo');

//{'вартість':'виробник'}
var map2 = new Map([
    [50000, 'BMW'],
    [30999, 'Mercedes'],
    [20000, 'Honda'],
    [100000, 'Bently'],
    [30000, 'Subaru'],
    [120000, 'Lamborgini']
]);
//{'час доставки':'виробник'}
var map3 = new Map();
map3.set(3, 'BMW');
map3.set(5, 'Mercedes');
map3.set(8, 'Honda');
map3.set(12, 'Bently');
map3.set(25, 'Subaru');
map3.set(21, 'Lamborgini');


var ob = {};

var listMaker = []; 
var listProduct = []; 
var listPrice = [];
var listTime = [];

map1.forEach((value, key) => {
    listMaker.push(key), listProduct.push(value)
});

map2.forEach((key, value) => {
    listPrice.push(value)
});

map3.forEach((key, value) => {
    listTime.push(value)
});

inPrice = minEl(listPrice);
inTime = minEl(listTime);
inMaxPrice = maxEl(listPrice);
inMaxTime = maxEl(listTime);


ob[listProduct[inPrice]] = `Ціна: ${listPrice[inPrice]}, Виробник: ${listMaker[inPrice]}, Час доставки: ${listTime[inPrice]}`;
ob[listProduct[inTime]] = `Ціна: ${listPrice[inTime]}, Виробник: ${listMaker[inTime]}, Час доставки: ${listTime[inTime]}`;
ob[listProduct[inMaxPrice]] = `Ціна: ${listPrice[inMaxPrice]}, Виробник: ${listMaker[inMaxPrice]}, Час доставки: ${listTime[inMaxPrice]}`;
ob[listProduct[inMaxTime]] = `Ціна: ${listPrice[inMaxTime]}, Виробник: ${listMaker[inMaxTime]}, Час доставки: ${listTime[inMaxTime]}`;
console.log(ob)

function minEl(ls) {
    var index = 0;
    var min = ls[index];
    for (let i = 0; i < ls.length; i++) {
        if (ls[i] < min) {
            min = ls[i]
            index = i
        }
    }
    return index;
}

function maxEl(ls) {
    var index = 0;
    var min = ls[index];
    for (let i = 0; i < ls.length; i++) {
        if (ls[i] > min) {
            min = ls[i]
            index = i
        }
    }
    return index;
}