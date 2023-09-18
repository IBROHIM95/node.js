const moment = require('moment')

class Account {
    #amount;
    #account_id;
     constructor (ism, amount, account_id) {
        this.ism = ism;
        this.#amount = amount;
        this.#account_id = account_id
     }

     tellMeBalance() {
        console.log('sizni hisobingizdagi qoldiq', this.#amount);
        return this.#amount
     }

     withDrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount
            console.log(`Hisobingizdan yechildi ${amount} va qoldiq ${this.#amount} `);
        } else {
            `hisobingizda pul yetarli emas ${this.#amount} `
        }
     }

     makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Sizning hisobingiz toldirildi ${amount} va hisobingiz ${this.#amount}  `);
     }
     giveMeDetails() {
        console.log(`salom hurmatli ${this.ism} sizning hisob raqamingiz ${this.#account_id} va hisobimgiz ${this.#amount} `);
     }

     static tellMeAboutClass(){
        console.log('class yasash uchun hizmat qiladi');
     }

     static tellMeTime() {
        console.log(`hozirgi vaqt ${moment().format('YYYY MM DD HH:mm:ss')} `);
     }
}
module.exports = Account;