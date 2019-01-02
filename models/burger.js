// TODO
//// Import ORM object
// Create code to call ORM functions using burger specific input
// Export model object
const orm = require('./../config/orm');

//* Formats new burger parameters to be read by DB
function BurgerInsertPacket(params){
    for (var i in params){
        if (params[i] === false || params[i] === 'false'){
            params[i] = 0
        } else if (params [i] === true || params [i] === 'true'){
            params[i] = 1
        }
    };

    this.burger_name = params.name
    this.meat = params.meat
    this.bun = params.bun
    this.lettuce = params.lettuce
    this.toms = params.toms
    this.onions = params.onions
    this.pickles = params.pickles
    this.bacon = params.bacon
    this.ketchup = params.ketchup
    this.mustard = params.mustard
    this.mayo = params.mayo
    this.bbq = params.bbq
    this.devoured = false;    
}

function addBurger(params, onEvent){
    orm.insertOne(params, onEvent);
}

function getBurgers(card){
    orm.selectAll(card);
}

module.exports = {
    addBurger : addBurger,
    getBurgers : getBurgers,
    BurgerInsertPacket : BurgerInsertPacket
}