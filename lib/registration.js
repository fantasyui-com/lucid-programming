module.exports = function(declaration){

  const inflate = function(declaration){
    let database = [];

    // Declarations have a pattern with multiple variations.
    // Pre-create a lookup table of all possible statements.

    declaration.pattern.forEach(function(piece){

      // For each piece of the new declaration...
      const isString = (typeof piece === 'string');

      if(isString){
        // item is string, so it is just plain old text.
        // When database is empty, initialize it.
        if(database.length === 0){
          database.push([piece]);
        }else{
          // When database is not empty...
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
            // copy initial values from existing line that is to be inflated.
            item.forEach(function(itemInThuslyLine){
              replacementExpansion.push(itemInThuslyLine);
            });
            // ADD the VARIANT in question.
            replacementExpansion.push(variant.name);
            // push the new line in.
            database.push(replacementExpansion);
          });

          // delete the uninflated original, it has been replaced with the inflation.
          database[index] = undefined;
        });

        // clear database of deleted items.
        database = database.filter(i=>i)

      }
    });
    return { database, declaration};
  }

  let table = inflate(declaration);
  return table;
}
