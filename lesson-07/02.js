/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    let isNumber = !isNaN(Number(str))

    if (str.trim() === '') {
        return false
    }
     return isNumber

}
console.log(isNumeric(" "))

