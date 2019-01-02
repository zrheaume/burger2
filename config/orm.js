// TODO
// //Import MySQL DB connection
//// Create query methods
    //// selectAll() 
   // // insertOne( obj )  
    //// updateOne ( obj )
// //Export ORM object
const burgerDb = require('./connection');

function createQuery (queryStr, opt, onEvent){
    burgerDb.query(queryStr,opt,function(err, res, fields){
        if (err) return onEvent(err)
        if (res) return onEvent(res, fields)
        else return onEvent(err, res);
    });
}


function selectAll (card) {
    createQuery("SELECT * FROM burgers", null, card);
}

function insertOne(dat, card){
    createQuery("INSERT INTO burgers SET ?", dat, card);
}

function updateOne(brgId, newDat, card){
    createQuery('UPDATE burgers SET ? WHERE ?', [newDat,{id: brgId}], card);
}

module.exports = {
    selectAll : selectAll,
    insertOne : insertOne,
    updateOne : updateOne
}