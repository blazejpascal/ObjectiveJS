var assert = require("assert");

class Node {
  constructor (id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
}
class Bar {
  constructor (id, startingNode, endingNode) {
    this.id = id;
    this.startingNode = startingNode;
    this.endingNode = endingNode;
  }
}

// Tests
function isBarInstanciable (){
  var node = new Node(1,0,0);
  assert(node, "There is no node object.");
}
isBarInstanciable();
