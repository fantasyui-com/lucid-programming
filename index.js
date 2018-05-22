const registration = require('./lib/registration.js');
const recognition = require('./lib/recognition.js');

module.exports = function(options){
  const db = {};

  return {
    registration: registration(db),
    recognition: recognition(db),
  };

}
