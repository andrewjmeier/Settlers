var TableTop = require('../../lib/TableTop/bundle'),
    inherits = require('util').inherits;

function SettlersEdgeTile(start, end) {
  TableTop.EdgeTile.call(this, start, end);
  this.road = null;   // starts w/out a road

  this.leftTile = null;
  this.rightTile = null;
};

inherits(SettlersEdgeTile, TableTop.EdgeTile);


//      /\
//     /  \
//    /    \
//   /      \
//  /        \
// |          |
// |          |
// |          |
// |          |
// |          |
//  \        /
//   \      /
//    \    /
//     \  /
//      \/

// Here's a poor rough example of one of the hex tiles
// Each edge has an obvious left and right side.



module.exports = SettlersEdgeTile;
