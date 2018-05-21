module.exports = function(db){
  return function(input){
    let match = null;
    db.database.forEach(function(item){
      if(item.text === input) match = item.data;
    })
    return match;
  }
}
