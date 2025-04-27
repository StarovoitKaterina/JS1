/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

/*
function includesElement(array,element) {
    for(let i = 0; i < array.length; i++) {
        if(element === array[i]){
            return true;
        }
    }
    return false;
}

function findCommonElements(arr,arr2) {
    let newSum = []
    for(let i = 0; i < arr2.length; i++) {
        if(includesElement(arr,arr2[i])) {
            newSum.push(arr2[i]);
        }
    }
    return newSum;
}

console.log(findCommonElements([ ], [ ]))
*/






function findCommonElements(arr,arr2) {
    let newArr3 = []
    for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr2.length; j++) {
                if (arr[i] === arr2[j]) {
                    newArr3.push(arr2[j]);
                }
            }
    }
    return newArr3
}

console.log(findCommonElements([1,2,3 ], [3,4,5,2, ]))







