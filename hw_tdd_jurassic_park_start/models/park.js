const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.aCollectionOfDinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
    this.aCollectionOfDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.aCollectionOfDinosaurs.indexOf(dinosaur);
    this.aCollectionOfDinosaurs.splice(indexOfDinosaur, 1);
};

Park.prototype.findDinosaurThatAttractsMostVisitors = function () {
    
};

module.exports = Park;