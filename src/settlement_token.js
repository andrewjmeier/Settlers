var inherits = require('util').inherits;
var TableTop = require('tabletop-boardgames');

function SettlementToken(player) {
  TableTop.Token.call(this, player);
};

inherits(SettlementToken, TableTop.Token);

module.exports = SettlementToken;