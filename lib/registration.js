module.exports = function(db){
  return function(declaration){
  const inflate = function(declaration){
    let database = [];
    // Declarations have a pattern with multiple variations.
    // Pre-create a lookup table of all possible statements.
    declaration.pattern.forEach(function(piece){
      // For each piece of the new declaration...
      if( Array.isArray(piece) ){
        // item is array
        // Process evey line in database
        database.forEach(function(item, index){
          piece.forEach(function(variant){
            // copy values from item into replacementExpansion
            let replacementExpansion = {list:[]};
            // copy initial values from existing line that is to be inflated.
            if(item.list) item.list.forEach(function(itemInThuslyLine){
              replacementExpansion.list.push(itemInThuslyLine);
            });
            // ADD the VARIANT in question.
            replacementExpansion.list.push(variant);
            // push the new line in.
            database.push(replacementExpansion);
          });
          // delete the uninflated original, it has been replaced with the inflation.
          database[index] = null;
        });
        // clear database of deleted items.
        database = database.filter(i=>i)
      }else{
        // item is string, so it is just plain old text.
        // When database is empty, initialize it.
        if(database.length === 0){
          database.push({text:piece.text, list:[piece]});
          //console.log(database)
        }else{
          // When database is not empty...
          // Append to each entry in the database.
          database.forEach(function(line){
            if(line) line.list.push(piece);
          });
        }
      }
    });
    // Database has been constructed.
    database.forEach(function( item ){

      item.text = item.list.map(i=>i.text).join(' ');
      item.data = {};

      item.list.filter(i=>i.type == 'value').forEach(function(j){
        let i = Object.assign({}, j);
        item.data[i.key] = i.text;
        delete i.type;
        delete i.key;
        delete i.text;
        if(item.data.price && i.price) {
          item.data.price = item.data.price + i.price;
          delete i.price;
        }
        Object.assign(item.data,i);
      });

    });

      db.database = database;
      db.declaration = declaration;
  }

  inflate(declaration);
  return db;
  };
}
