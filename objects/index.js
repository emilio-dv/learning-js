
let name = 'Emilio'
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
        console.log(this.window)
      console.log('hello, my name is ' + this.name)
    },
  
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }
  
  arto.doAddition(1, 4)        // 5 es impreso
  
  const referenceToAddition = arto.doAddition
  referenceToAddition(10, 15)   // 25 es impreso

  arto.greet()   


  const referenceToGreet = arto.greet.bind(arto)
referenceToGreet() // imprime "hello, my name is undefined"