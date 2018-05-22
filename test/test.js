const lucid = require('../index.js')({});

var assert = require('assert');

describe('Lucid Programming', function() {

  let db;

  const pieType   = [
    {type:'value', key:'pieType', text: 'Junior', price:200, },
    {type:'value', key:'pieType', text: 'Small', price:200, },
    {type:'value', key:'pieType', text: 'Large', price:200, },
    {type:'value', key:'pieType', text: 'New York', price:200, },
    {type:'value', key:'pieType', text: 'Large New York', price:200, },
  ];

  const pizzaType = [
    {type:'value', key:'pizzaType', text: 'Cheese', price:500, },
    {type:'value', key:'pizzaType', text: 'Pepperoni', price:600, },
    {type:'value', key:'pizzaType', text: 'Hawaiian', price:10000, },
  ];

  const crustType = [
    {type:'value', key:'crustType', text: 'Ranch', price:100 },
    {type:'value', key:'crustType', text: 'Cajun', price:100 },
    {type:'value', key:'crustType', text: 'Asiago', price:100 }
  ];

  describe('Statement Recognition', function() {

    it('should return 45 statements in database', function() {
      db = lucid.registration({ text:'Pizza Order', pattern:[{type:'text', text: 'Order'}, pieType, pizzaType, {type:'text', text: 'with'}, crustType, {type:'text', text: 'crust.'} ] });
      assert.equal(db.database.length, 45);
    });

    it('should return Large New York Cheese with Asiago crust', function() {
      const recognized = lucid.recognition('Order Large New York Cheese with Asiago crust.');
      assert.deepStrictEqual({ pieType: 'Large New York', price: 800, pizzaType: 'Cheese', crustType: 'Asiago' }, recognized);
    });

  });
});
