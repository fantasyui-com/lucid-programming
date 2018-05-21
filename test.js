const lucid = require('./index.js')({});

const pieType   = [
  {name: 'Junior', price:2, },
  {name: 'Small', price:2, },
  {name: 'Large', price:2, },
  {name: 'New York', price:2, },
  {name: 'Large New York', price:2, },
];

const pizzaType = [
  {name: 'Cheese', price:500, },
  {name: 'Pepperoni', price:600, },
  {name: 'Hawaiian', price:10000, },
];

const crustType = [
  {name: 'Ranch', price:100 },
  {name: 'Cajun', price:100 },
  {name: 'Asiago', price:100 }
];

let db = lucid.registration({ name:'Pizza Order', pattern:['Order', pieType, pizzaType, 'with', crustType, 'Crust.'] });

//let db = lucid.registration({ name:'ORDER', pattern:['A', [{name: '1'}, {name: '2'}, {name: '3'} ], ' O ', [{name: 'X'}, {name: 'Y'}, {name: 'Z'} ] ]});


db.forEach(function(i){
  
  console.log(i.join(' '));

})
// lucid.recognition('@pizza-bot Order [Large], [Hawaiian], with [Cajun] Crust.')
