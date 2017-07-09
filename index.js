var assert = require("assert");

class ConstructionAnalysis {
  static distance(firstNode, secondNode) {
    var xSquared = Math.pow(secondNode.x - firstNode.x, 2);
    var ySquared = Math.pow(secondNode.y - firstNode.y, 2);
    return Math.sqrt(xSquared + ySquared);
  }
}
class Node {
  constructor (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
}
class Bar {
  constructor(id, startingNode, endingNode) {
    this.id = id;
    this.startingNode = startingNode;
    this.endingNode = endingNode;
  }
}
class Beam extends Bar {
  constructor(id, startingNode, endingNode) {
    super(id, startingNode, endingNode);
  }
  lenght() {
    var xSquared = Math.pow(this.endingNode.x - this.startingNode.x, 2);
    var ySquared = Math.pow(this.endingNode.y - this.startingNode.y, 2);
    return Math.sqrt(xSquared + ySquared);
  }
}
class CurvedBar extends Bar { // inheritance definition. curved bar inherits from bar all its method and properties. the is relation curved bar IS Bar
  constructor(id, startingNode, endingNode, curvature) {
    super(id, startingNode, endingNode); // creates object of parent class
    this.curvature = curvature; // extends parent object with new properti
  }
}
// Example of composition
class Structure {
    constructor(id, beam) {
      this.id = id;
      this.beams = [beam];
    }
    addBeam(beam) {
      this.beams.push(beam);
    }
    removeBeam(beamId) {
      var indexOfBeam;
      for (var i=0; i < this.beams.length; i++) {
        if (this.beams[i].id === beamId) {
          indexOfBeam = i;
          break;
        }
      }
      if (!indexOfBeam) {
        //console.log("Beam id not found.");
        throw new Error("Beam id not found.");
      }
      this.beams.splice(indexOfBeam, 1);
    }
}


// Example of Singleton Design Pattern
var singletonInstance;
class Singleton {
  constructor() {
    if (!singletonInstance) {
      singletonInstance = this;
    }
    return singletonInstance;
  }
}
// Tests
function isNodeInstanciable() {
  var node = new Node(1, 0, 0);
  assert(node, "There is no node object.");
}
function isBeamLenghtWorking() {
  var firstNode = new Node(1, 3, 8);   //new rezerwuje miejsce w pamięci na obiekt zwrócony przez wywołany konstruktor;
  var secondNode = new Node(2, 6, 12);
  var beam = new Beam(1, firstNode, secondNode);
  assert.equal(beam.lenght(), 5, "Lenght of beam calculated incorecctly. Actual: " + beam.lenght + ", Expected: " + 5);
}
function isCurvedBarCurvatureDefined() {
  var firstNode = new Node(1, 3, 8);   //new rezerwuje miejsce w pamięci na obiekt zwrócony przez wywołany konstruktor;
  var secondNode = new Node(2, 6, 12);
  var curvedBar = new CurvedBar(1, firstNode, secondNode, "parabolic");
  assert.equal(curvedBar.curvature, "parabolic", "Curvature of curved bar printed incorecctly. Actual: " + curvedBar.curvature + ", Expected: parabolic");
}
function isConstructionAnalysysWorking() {
  var firstNode = new Node(1, 3, 8);   //new rezerwuje miejsce w pamięci na obiekt zwrócony przez wywołany konstruktor;
  var secondNode = new Node(2, 6, 12);
  var distance = ConstructionAnalysis.distance(firstNode, secondNode);
  assert.equal(distance, 5, "Nodes distance calculated incorecctly. Actual: " + distance + ", Expected: " + 5);
}
function isStructureWorking() {
  var firstNode = new Node(1, 3, 8);   //new rezerwuje miejsce w pamięci na obiekt zwrócony przez wywołany konstruktor;
  var secondNode = new Node(2, 6, 12);
  var beam = new Beam(1, firstNode, secondNode);
  var structure = new Structure(1, beam);
  var thirdNode = new Node(3, 2, 6);
  var secondBeam = new Beam(2, firstNode, thirdNode);

  structure.addBeam(secondBeam); //important! going to object structure and running addBeam function
  assert(structure.beams[1]);
  structure.removeBeam(secondBeam.id);
  assert(!structure.beams[1]);
}

isNodeInstanciable();
isBeamLenghtWorking();
isCurvedBarCurvatureDefined();
isConstructionAnalysysWorking();
isStructureWorking();
