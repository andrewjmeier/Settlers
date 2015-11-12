var inherits = require('util').inherits;
var TableTop = require('../lib/TableTop/bundle');

function RoadToken(player) {
  TableTop.Token.call(this, player);
};

inherits(RoadToken, TableTop.Token);

module.exports = RoadToken;