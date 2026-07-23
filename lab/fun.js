//wap to take any digit 0-9 and return in words
const word = (a) => {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    return words[a];
}
console.log(word(0)); 