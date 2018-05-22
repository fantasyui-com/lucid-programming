# Lucid Programming
Simple, fast and minimalist programming language for programming via SMS, MUD, IRC, etc.

Lucid Programming is the second programming language in the programming series, see
[civilized](https://github.com/fantasyui-com/civilized) for previous reference implementation and original POC.

## About

Lucid Programming aims to be a stateless, variable free, action execution language.
Designed for the Aural User Interface with strong IRC/SMS support.

## Constraints

All potential input must be pre-generated.
No dynamic expression support, all is known ahead of time.

## Benefits

Because we are using pre-defined key-names, the following is the matching function in its entirety:

```JavaScript

  return input => db.lookup[input];

```

Usage

```JavaScript

  const recognized = lucid.recognition('Order Large New York Cheese with Asiago crust.');
  assert.deepStrictEqual({ pieType: 'Large New York', price: 800, pizzaType: 'Cheese', crustType: 'Asiago' }, recognized);

```

Response

```JSON

  {
    "pieType": "Large New York",
    "price": 800,
    "pizzaType": "Cheese",
    "crustType": "Asiago"
  }

```

## Usage

```JavaScript

  db = lucid.registration({
    text: 'Goodbye World',
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

```

Results

```JSON

[
  {
    "text": "Launch rocket A from launchpad 1 against England",
    "data": {
      "rocket": "A",
      "launchpad": "1",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket A from launchpad 1 against Neverland",
    "data": {
      "rocket": "A",
      "launchpad": "1",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 1 against Poland",
    "data": {
      "rocket": "A",
      "launchpad": "1",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 1 against Narnia",
    "data": {
      "rocket": "A",
      "launchpad": "1",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket A from launchpad 2 against England",
    "data": {
      "rocket": "A",
      "launchpad": "2",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket A from launchpad 2 against Neverland",
    "data": {
      "rocket": "A",
      "launchpad": "2",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 2 against Poland",
    "data": {
      "rocket": "A",
      "launchpad": "2",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 2 against Narnia",
    "data": {
      "rocket": "A",
      "launchpad": "2",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket A from launchpad 3 against England",
    "data": {
      "rocket": "A",
      "launchpad": "3",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket A from launchpad 3 against Neverland",
    "data": {
      "rocket": "A",
      "launchpad": "3",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 3 against Poland",
    "data": {
      "rocket": "A",
      "launchpad": "3",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 3 against Narnia",
    "data": {
      "rocket": "A",
      "launchpad": "3",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket A from launchpad 4 against England",
    "data": {
      "rocket": "A",
      "launchpad": "4",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket A from launchpad 4 against Neverland",
    "data": {
      "rocket": "A",
      "launchpad": "4",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 4 against Poland",
    "data": {
      "rocket": "A",
      "launchpad": "4",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket A from launchpad 4 against Narnia",
    "data": {
      "rocket": "A",
      "launchpad": "4",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket B from launchpad 1 against England",
    "data": {
      "rocket": "B",
      "launchpad": "1",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket B from launchpad 1 against Neverland",
    "data": {
      "rocket": "B",
      "launchpad": "1",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 1 against Poland",
    "data": {
      "rocket": "B",
      "launchpad": "1",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 1 against Narnia",
    "data": {
      "rocket": "B",
      "launchpad": "1",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket B from launchpad 2 against England",
    "data": {
      "rocket": "B",
      "launchpad": "2",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket B from launchpad 2 against Neverland",
    "data": {
      "rocket": "B",
      "launchpad": "2",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 2 against Poland",
    "data": {
      "rocket": "B",
      "launchpad": "2",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 2 against Narnia",
    "data": {
      "rocket": "B",
      "launchpad": "2",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket B from launchpad 3 against England",
    "data": {
      "rocket": "B",
      "launchpad": "3",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket B from launchpad 3 against Neverland",
    "data": {
      "rocket": "B",
      "launchpad": "3",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 3 against Poland",
    "data": {
      "rocket": "B",
      "launchpad": "3",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 3 against Narnia",
    "data": {
      "rocket": "B",
      "launchpad": "3",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket B from launchpad 4 against England",
    "data": {
      "rocket": "B",
      "launchpad": "4",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket B from launchpad 4 against Neverland",
    "data": {
      "rocket": "B",
      "launchpad": "4",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 4 against Poland",
    "data": {
      "rocket": "B",
      "launchpad": "4",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket B from launchpad 4 against Narnia",
    "data": {
      "rocket": "B",
      "launchpad": "4",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket C from launchpad 1 against England",
    "data": {
      "rocket": "C",
      "launchpad": "1",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket C from launchpad 1 against Neverland",
    "data": {
      "rocket": "C",
      "launchpad": "1",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 1 against Poland",
    "data": {
      "rocket": "C",
      "launchpad": "1",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 1 against Narnia",
    "data": {
      "rocket": "C",
      "launchpad": "1",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket C from launchpad 2 against England",
    "data": {
      "rocket": "C",
      "launchpad": "2",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket C from launchpad 2 against Neverland",
    "data": {
      "rocket": "C",
      "launchpad": "2",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 2 against Poland",
    "data": {
      "rocket": "C",
      "launchpad": "2",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 2 against Narnia",
    "data": {
      "rocket": "C",
      "launchpad": "2",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket C from launchpad 3 against England",
    "data": {
      "rocket": "C",
      "launchpad": "3",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket C from launchpad 3 against Neverland",
    "data": {
      "rocket": "C",
      "launchpad": "3",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 3 against Poland",
    "data": {
      "rocket": "C",
      "launchpad": "3",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 3 against Narnia",
    "data": {
      "rocket": "C",
      "launchpad": "3",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket C from launchpad 4 against England",
    "data": {
      "rocket": "C",
      "launchpad": "4",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket C from launchpad 4 against Neverland",
    "data": {
      "rocket": "C",
      "launchpad": "4",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 4 against Poland",
    "data": {
      "rocket": "C",
      "launchpad": "4",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket C from launchpad 4 against Narnia",
    "data": {
      "rocket": "C",
      "launchpad": "4",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket D from launchpad 1 against England",
    "data": {
      "rocket": "D",
      "launchpad": "1",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket D from launchpad 1 against Neverland",
    "data": {
      "rocket": "D",
      "launchpad": "1",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 1 against Poland",
    "data": {
      "rocket": "D",
      "launchpad": "1",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 1 against Narnia",
    "data": {
      "rocket": "D",
      "launchpad": "1",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket D from launchpad 2 against England",
    "data": {
      "rocket": "D",
      "launchpad": "2",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket D from launchpad 2 against Neverland",
    "data": {
      "rocket": "D",
      "launchpad": "2",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 2 against Poland",
    "data": {
      "rocket": "D",
      "launchpad": "2",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 2 against Narnia",
    "data": {
      "rocket": "D",
      "launchpad": "2",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket D from launchpad 3 against England",
    "data": {
      "rocket": "D",
      "launchpad": "3",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket D from launchpad 3 against Neverland",
    "data": {
      "rocket": "D",
      "launchpad": "3",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 3 against Poland",
    "data": {
      "rocket": "D",
      "launchpad": "3",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 3 against Narnia",
    "data": {
      "rocket": "D",
      "launchpad": "3",
      "attack": "Narnia"
    }
  },
  {
    "text": "Launch rocket D from launchpad 4 against England",
    "data": {
      "rocket": "D",
      "launchpad": "4",
      "attack": "England"
    }
  },
  {
    "text": "Launch rocket D from launchpad 4 against Neverland",
    "data": {
      "rocket": "D",
      "launchpad": "4",
      "attack": "Neverland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 4 against Poland",
    "data": {
      "rocket": "D",
      "launchpad": "4",
      "attack": "Poland"
    }
  },
  {
    "text": "Launch rocket D from launchpad 4 against Narnia",
    "data": {
      "rocket": "D",
      "launchpad": "4",
      "attack": "Narnia"
    }
  }
]

```
