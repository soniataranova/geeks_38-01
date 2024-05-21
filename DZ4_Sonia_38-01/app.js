//задание со строками


//const capitalizeString=(string)=>{
//
//    let result = string[0].toUpperCase()
//
//
//    for (let i = 1; i < string.length; i++) {
//        result += string[i].toLowerCase()
//    }
//
//    return console.log(result)
//}
//
//capitalizeString('евГенИй')


// сколько раз в строке попадается выбранный символ


const charCount=(string, char)=> {
    let count = 0

    const upperChar = char.toUpperCase()
    const lowerChar = char.toLowerCase()

    for (let i = 0; i < string.length; i++) {
        if (string[i] === upperChar || string[i] === lowerChar) {
            count++
        }
    }

    return count
}
console.log(charCount('mommy', 'O'))