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
    {type:'value', key:'crustType', text: 'Asiago', price:100 },
  ];

  describe('Statement Recognition', function() {

    it('should return 64 statements', function() {

      db = lucid.registration({
        text: 'Hello World',
        pattern: [
          { type: 'text', text: 'Launch rocket' },
          [
            { type: 'value', key: 'rocket', text: 'A' },
            { type: 'value', key: 'rocket', text: 'B' },
            { type: 'value', key: 'rocket', text: 'C' },
            { type: 'value', key: 'rocket', text: 'D' },
          ],
          { type: 'text', text: 'from launchpad' },
          [
            { type: 'value', key: 'launchpad', text: '1' },
            { type: 'value', key: 'launchpad', text: '2' },
            { type: 'value', key: 'launchpad', text: '3' },
            { type: 'value', key: 'launchpad', text: '4' },

          ],
          { type: 'text', text: 'against' },
          [
            { type: 'value', key: 'attack', text: 'England' },
            { type: 'value', key: 'attack', text: 'Neverland' },
            { type: 'value', key: 'attack', text: 'Poland' },
            { type: 'value', key: 'attack', text: 'Narnia' },
          ]
        ]
      });

 
      console.log(JSON.stringify(db.database,null, '  '))
      assert.equal(db.database.length, 64);
    });

    it('should return 45 statements', function() {
      db = lucid.registration({ text:'Pizza Order', pattern:[{type:'text', text: 'Order'}, pieType, pizzaType, {type:'text', text: 'with'}, crustType, {type:'text', text: 'crust.'} ] });
      assert.equal(db.database.length, 45);
    });

    it('should return Large New York Cheese with Asiago crust', function() {
      const recognized = lucid.recognition('Order Large New York Cheese with Asiago crust.');
      assert.deepStrictEqual({ pieType: 'Large New York', price: 800, pizzaType: 'Cheese', crustType: 'Asiago' }, recognized);
    });

  });
});
