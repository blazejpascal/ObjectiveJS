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
class CurvedBar extends Bar {
  constructor(id, startingNode, endingNode, curvature) {
    super(id, startingNode, endingNode);
    this.curvature = curvature;
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

isNodeInstanciable();
isBeamLenghtWorking();
isCurvedBarCurvatureDefined();
isConstructionAnalysysWorking();
