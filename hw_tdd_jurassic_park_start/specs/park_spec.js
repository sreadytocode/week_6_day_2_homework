const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Sonorasaurus', 'herbivore', 55)
    park = new Park('Alton Towers', 20, [dinosaur1]);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Alton Towers');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.aCollectionOfDinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.aCollectionOfDinosaurs;
    const expected = [dinosaur1];
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.removeDinosaur(dinosaur1);
    const expected = [];
    const actual = park.aCollectionOfDinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.findDinosaurThatAttractsMostVisitors()
    const expected = [dinosaur2];
    assert.deepStrictEqual(park.findDinosaurThatAttractsMostVisitors(), expected);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
