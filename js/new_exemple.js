'use strict'

const person = {
    gender : 'man',
    age : 10,
    skills : {
        speak : true,
        talk : false,
    },

    think : function() {
        console.log(this)
    }
};

for (let i in person) {
    console.log(`property of object ${this} is ${i} has a value ${person[i]}`)
};
console.log('*********\n ********')
person.think();