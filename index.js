

module.exports = function(options){
  const database = {};
  const registration = function(declaration){
    const inflate = function(database, declaration){
      declaration.pattern.forEach(function(piece){
        // For each piece of the new declaration...
        if(typeof piece === 'string'){
          // item is string
          if(database.length === 0){
            database.push([piece]);
          }else{
          // Append to each entry in the database.
          database.forEach(function(item){
            if(item) item.push(piece);
          });
          }
        }else{
          // item is array
          // Process evey line in database
          database.forEach(function(item, index){
            piece.forEach(function(variant){
              // copy values from item into replacementExpansion
              let replacementExpansion = [];
              item.forEach(function(itemInThuslyLine){
                replacementExpansion.push(itemInThuslyLine);
              });
              // ADD VARIANT
              replacementExpansion.push(variant.name);
              database.push(replacementExpansion);
            });
            // delete the uninflated original
            database[index] = undefined;
          });
          database = database.filter(i=>i)
        }
      });
      return database;
    }
    let database = inflate([], declaration);
    return database;
  }

  const recognition = function(){

  }

  return {
    registration,
    recognition,
  }

}
