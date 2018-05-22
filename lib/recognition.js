module.exports = function(db){
  return input => db.lookup[input];
}
