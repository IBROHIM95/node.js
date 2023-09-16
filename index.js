// packagelarni o'rnatish shart emas lekin ularni chaqirib olish kerak
// Module package CORE

setTimeout( function() {
    console.log('ishga tushdi')
}, 5000 ); // 5sekundan keyin ishga tushiradi

let number = 0;
// setInterval(function (){
//     console.log('hisob', number )
//     number++
// }, 1000)

const fs = require('fs') //require() sync hisoblanadi, file sysyteam(fs)ni objectini olib beradi
const data = fs.readFileSync('./input.txt', 'utf-8')
console.log(data);

fs.writeFileSync('./input.txt', `${data} \n\t\t by Ali`)
const  new_data= fs.readFileSync('./input.txt', 'utf-8')
console.log(new_data);
// Module package EXTERNAL 
// Module package FILE
