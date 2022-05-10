'use strict'

const handlebars = require('handlebars')
const template = "{{#each letters}} {{this}} | {{/each}}"
var context

class Alphabet {
  get letters() {
    return 'abc'.split('')
  }
}

context = new Alphabet()
console.log('class instance with getter methods:')
console.log(handlebars.compile(template)(context, {
    allowedProtoProperties: {
        letters: true 
    }   
}))


context = {
  letters: 'xyz'.split('')
}

console.log('regular object:')
console.log(handlebars.compile(template)(context))
