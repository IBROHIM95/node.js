// packagelarni o'rnatish shart emas lekin ularni chaqirib olish kerak
// Module package CORE

// setTimeout( function() {
//     console.log('ishga tushdi')
// }, 5000 ); // 5sekundan keyin ishga tushiradi

// let number = 0;
// setInterval(function (){
//     console.log('hisob', number )
//     number++
// }, 1000)

// const fs = require('fs') //require() sync hisoblanadi, file sysyteam(fs)ni objectini olib beradi
// const data = fs.readFileSync('./input.txt', 'utf-8')
// console.log(data);

// fs.writeFileSync('./input.txt', `${data} \n\t\t by Ali`)
// const  new_data= fs.readFileSync('./input.txt', 'utf-8')
// console.log(new_data);
// Module package EXTERNAL 

// External package

//  const moment = require('moment');
// ;

// setInterval(() => {
//     const time = moment().format()
//     console.log( 'hozirgi vaqt',  time);
// }, 5000);

// const inquirer = require('inquirer');
// inquirer
// .prompt([{type: 'input', name: 'raqam', message : 'raqamni kiriting'}])
// .then((answer) => {
//     console.log('man kiritgan raqam qiymati' , answer.raqam);
// } )
// .catch(err => console.log(err))

// const validator = require('validator');
// const test = validator.isEmail('foo@bar.com');
// console.log('test:', test);

// const {v4: uuidv4} = require('uuid');
// const random = uuidv4();
// console.log('random:', random);

// const chalk = require('chalk');
// console.log(chalk.red('uuid creates', `${random}` ));

 // MODULE PACKAGE FILE

// const yigindi = require("./hisob.js");

// const natija = yigindi.bolish(20,2)
// console.log(natija);

// const natija2 = yigindi.ayirish(15,8);
// console.log(natija2);

// console.log(require('module').wrapper);


// console.log(arguments);  // pathsda izlash tartibibni korishimiz mumkin

const Account = require('./account');

Account.tellMeTime();
Account.tellMeAboutClass();
const myAccount = new Account('Ali', 2000000, 2354768901);
myAccount.giveMeDetails();
myAccount.makeDeposit(300000000000000);





