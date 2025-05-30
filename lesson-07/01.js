/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
    let words = str.split(' ')
    let newA = []
    for (let i = 0; i < words.length; i++) {
        let newWord = words[i].charAt(0).toUpperCase() + words[i].slice(1)
        newA.push(newWord)

    }
    return newA.join(' ')
}

console.log(capitalizeWords('name new'))















/*
let name = 'kate new'
let nwName = name.split(' ')
console.log(nwName)
console.log(nwName.join(' '))
console.log(name.charAt(0).toUpperCase()+ name.slice(1))

*/

/*
const string = 'Hello, World!'

console.log(string.charAt(0)); // => H
console.log(string.charAt(1)); // => e
console.log(string.charAt(5)); // => ,

// возвращаем последний символ строки
console.log(string.charAt(string.length - 1)); // => !*/
