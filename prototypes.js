//Tutaj beda prototypy
function Node(id, x, y) {
  this.id = id;
  this.x = x;
  this.y = y;
}
var node = new Node (1, 0, 0);
function Bar(id, startingNode, endingNode) {
  this.id = id;
  this.startingNode = startingNode;
  this.endingNode = endingNode;
}
function Beam(id, startingNode, endingNode) {
  Bar.call(this, id, startingNode, endingNode);
  this.length = function() {
    var xSquared = Math.pow(this.endingNode.x - this.startingNode.x, 2);
    var ySquared = Math.pow(this.endingNode.y - this.startingNode.y, 2);
    return Math.sqrt(xSquared + ySquared);
  };
}
var firstNode = new Node(1, 3, 8);   //new rezerwuje miejsce w pamięci na obiekt zwrócony przez wywołany konstruktor;
var secondNode = new Node(2, 6, 12);
var beam = new Beam(2, firstNode, secondNode);
console.log(beam.length() + ", " + beam.id);
